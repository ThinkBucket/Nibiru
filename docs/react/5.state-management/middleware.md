---
id: middleware
title: Middleware
sidebar_label: Middleware
---

import Hint from '../../../src/components/Hint'; import Img from '../../../src/components/Img';

## 思想精华三：中间件思想与洋葱模型

### 在 dispatch 过程中穿过 middleware

- 原生 dispatch -> 洋葱的中心
- middleware -> 洋葱的一层一层皮
- store.dispatch -> 经过洋葱包裹后的 dispatch

<Img width="400" legend="图：middleware 洋葱模型" src='https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/middleware.png'/>

我们需要对 dispatch 做一个增强，让其每调用一次都穿过所有的 middleware，假设将这个增强的函数定义为:

```js
enhanceDispatchByMiddleware(store, [middleware1, middleware2]);
```

在我们之前的代码 `demo.js` 的基础上，创建了 2 个中间件，一个用来记录日志，一个用来捕获错误：

```js
const middleware1 = store => next => action => {
  console.log('m1 left part');
  next(action);
  console.log('m1 right part');
};
const middleware2 = store => next => action => {
  console.log('m2 left part');
  next(action);
  console.log('m2 right part');
};
enhanceDispatchByMiddleware(store, [middleware1, middleware2]);
```

我们注意到中间件是一个柯里化的函数：

```js
const middleware1 = store => next => action => {};
```

其实每个中间件调用后，本质目的是增强 `store.dispatch`, 而 `next` 是指上一个中间件穿越过后的`store.dispatch`, 可以简单这样理解：

- **next**: previous enhanced dispatch
- **store.dispatch**: current enhanced dispatch

```diff
+ function enhanceDispatchByMiddleware (store, middlewares) {
+   middlewares.forEach(middleware => {
+     let next = store.dispatch
+     store.dispatch = middleware(store)(next) // 传入 store 是因为一些中间件需要 getState
+   })
+ }
export {
  createStore,
+ enhanceDispatchByMiddleware
}
```

以上是 redux 中中间件的基本实现原理，middleware 在里面其实是一个函数调用，具体的定义其实是写在外部的业务代码中，有点类似 `reduce` 和 `reducer` 的关系，这种思想在 JS 中也会用到。最终的输出结果是这样的：

<img width="180" src='https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/Nl4J4H.png'/>

我们发现先输出的是 middleware2, 这是为什么呢？

我们在业务代码中 dispatch 一般是按照如下方式调用的：

```js
dispatch(action); // {type: 'SOME_TYPE', payload: {...}}
```

<Hint type="tip">此时的 dispatch 并不是源码中最原始的 dispatch 而是经过了 middleware 等一系列的 enhancers 的增强。</Hint>

再深入一点去想，最原始的每次穿过一层 middleware(柯里化的函数) 的时候其最内层的函数并没有执行，而是将 `store.dispatch` 进行了增强：

```js
store.dispatch = middleware(store)(next);
```

这段代码是核心思想，可以暂时先想象成一个栈，遵循先进后出的原则，而出栈的操作就巧妙地调用 `next(action)` 即可，因为 **next 此时指向上一个 middleware 包装后的 dispatch**。采用传参的方式将一个个增强后的 dispatch 进行有秩序的“环环相扣”，这也就形成了上图所示的**“洋葱”模型**。

### 改善 middleware 的顺序

到这里可能还是会觉得这个顺序不太符合常识，也和上图所示的洋葱模型不太一致。其实 redux 的真实 middleware 的顺序就是按照定义的顺序，我们在内部实现中对传入的 `middlewares` 进行 `reverse()` 即可。

```diff
function enhanceDispatchByMiddleware (store, middlewares) {
- middlewares.forEach(middleware => {
+ middlewares.reverse().forEach(middleware => {
    let next = store.dispatch
    store.dispatch = middleware(store)(next)
  })
}
```

Redux 在 middleware 的内部实现的源码中用的是 `compose` 函数，因为其是从右至左进行的，所以在 middlwware 的顺序方面本质上和 `reverse()` 的效果是一样的。

## 洋葱模型中重要变量的值

我们再深入研究一下洋葱模型各个部分的 `getState`, `dispatch`, `next` 看看它们都实际指的是什么。

### store.getState

```js
const middleware1 = store => next => action => {
  console.log('m1 left part:', store.getState());
  next(action);
  console.log('m1 right part:', store.getState());
};
const middleware2 = store => next => action => {
  console.log('m2 left part:', store.getState());
  next(action);
  console.log('m2 right part:', store.getState());
};
```

输出的结果：

<img width="350" src='https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/MFHyUR.png'/>

<Hint type="tip">当到达中间件右半边的时候， `getState` 返回的是最新修改后的 state。</Hint>

### store.dispatch

我们再看一下 dispatch 在各个中间件中的变化情况：

```js
const middleware1 = store => next => action => {
  console.log('m1 left part:', store.dispatch);
  next(action);
  console.log('m1 right part:', store.dispatch);
};
const middleware2 = store => next => action => {
  console.log('m2 left part:', store.dispatch);
  next(action);
  console.log('m2 right part:', store.dispatch);
};
```

<img width="420" src='https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/F0kIkM.png'/>

<Hint type="tip">中间件中每一层返回的 dispatch 都是一样的，都是经过所有 middleware 增强后的 dispatch。</Hint>

这也就使得某个 middleware 内部使用 `store.dispatch(action)`, 相当于重新来一遍，如下图所示：

<Img width="420" align="center" src='https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/c8qzUQ.png'/>

<Hint type="must">middleware 内部不能简单粗暴地调用 `store.dispatch(action)`, 而要加以判断和限制，否则会形成无限循环。</Hint>

看看 middleware 中使用 `store.dispatch` 的正确姿势，以 redux-thunk 这个中间件为例：

```js
const thunk = store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
```

这里加以判断避免了无限循环，另外可以将 `store.dispatch, store.getState` 传递给业务中的异步 action 相关代码。

<Hint type="tip">在 middleware 中使用 dispatch 场景一般是接受到一个定向 action，这个 action 并不希望到达原生的分发 action，往往用在异步请求的需求里。</Hint>

### next

```js
const middleware1 = store => next => action => {
  console.log('m1 left part:', next);
  next(action);
  console.log('m1 right part:', next);
};
const middleware2 = store => next => action => {
  console.log('m2 left part:', next);
  next(action);
  console.log('m2 right part:', next);
};
```

输出结果如下：

<img width="410" src='https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/1n2Ekr.png'/>

之前在解释洋葱模型的时候也说过 next 指向的是上一个 middleware 包装后的 dispatch。

<Hint type="tip">next 本质上是 dispatch ，只是增强的层度不一样。</Hint>

<Hint type="tip">next 在同一层的左右两边中，其值都是一样的。</Hint>

<Hint type="tip">在代码里面，`next(action)` 之前处在洋葱的左边，之后处在洋葱的右边。</Hint>

<Hint type="must">要想进入下一个 middleware 必须写成 `next(action);` 而不是 `next;` 。</Hint>

## applyMiddleware

### 实现 applyMiddleware

```js
const store = createStore(reducer, initialState);
enhanceDispatchByMiddleware(store, [middleware1, middleware2]);
```

这两行代码都是为生成 store 而服务，那我们对 `createStore` 作一个增强，让 store 调用该函数后拿到的就是一个加强版的 store：

```js
const enhancers = applyMiddleware([middleware1, middleware2]);
const store = createStore(reducer, initialState, enhancers);
```

这里我们将 `enhanceDispatchByMiddleware` 进行柯里化，形成 `applyMiddleware` 函数 , 以下是模拟实现 `applyMiddleware` 和 `createStore` 加强的源码：

```diff
- function enhanceDispatchByMiddleware (store, middlewares) {
+ function applyMiddleware (middlewares) {
+   return function (store) {
      middlewares.reverse().forEach(middleware => {
        let next = store.dispatch
        store.dispatch = middleware(store)(next)
      })
+     return store
+   }
  }

- function createStore(reducer, initialState) {
+ function createStore (reducer, initialState, enhancers) {
+   funtion createStoreWithoutEnhancers (reducer, initialState) {
      let state = initialState;
      return {
        getState: function () {
          return state;
        },
        dispatch: function(action) {
          state = reducer(state, action)
        }
      }
+   }
+   const store = createStoreWithoutEnhancers(reducer, initialState)
+   return enhancers(store)
  }
```

我们可以发现 `applyMiddleware` 本质上是对 `enhanceDispatchByMiddleware` 做了一个小外科手术，将其进行了柯里化，这有什么好处？本质目的还是在“解耦”，将 applyMiddleware 和 enhanceDispatch 进行拆分，让 enhanceDispatch 还可以拼装其它 enhancer，更为灵活。

### 官方 applyMiddleware

我们再看一下官方 `applyMiddleware` 的源码：

```js
import compose from './compose';

export default function applyMiddleware(...middlewares) {
  return createStore => (reducer, preloadedState, enhancer) => {
    var store = createStore(reducer, preloadedState, enhancer);
    var dispatch = store.dispatch;
    var chain = [];

    var middlewareAPI = {
      getState: store.getState,
      dispatch: action => dispatch(action)
    };

    chain = middlewares.map(middleware => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);

    return {
      ...store,
      dispatch
    };
  };
}
```

// TODO
