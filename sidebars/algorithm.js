module.exports = {
  '1. Analysis of Algorithms': [
    'algorithm/1.analysis-of-algorithms/asymptotic-notations',
    'algorithm/1.analysis-of-algorithms/analysis-of-loops'
  ],
  '2. 数组': [
    'algorithm/2.array/duplicated-number-in-array',
    'algorithm/2.array/inverse-pairs',
    'algorithm/2.array/3sum'
  ],
  '3. 栈与队列': ['algorithm/3.stack-queue/min-stack'],
  '4. 链表': ['algorithm/4.linkedlist/merge-two-sorted-lists'],
  '5. 二叉树': [
    'algorithm/5.binary-tree/build-tree',
    'algorithm/5.binary-tree/mirror-tree',
    'algorithm/5.binary-tree/subtree',
    'algorithm/5.binary-tree/maximum-depth-of-binary-tree',
    'algorithm/5.binary-tree/balanced-binary-tree'
  ],
  '8. 排序': ['algorithm/8.sort/merged-sort', 'algorithm/8.sort/quick-sort'],
  '9. 查找': [
    {
      type: 'category',
      label: '二分查找',
      items: [
        'algorithm/9.search/number-same-as-index',
        'algorithm/9.search/number-in-sorted-array',
        'algorithm/9.search/missing-number'
      ]
    },
    {
      type: 'category',
      label: 'BST',
      items: ['algorithm/9.search/k-node-in-bst']
    },
    {
      type: 'category',
      label: '哈希表',
      items: ['algorithm/9.search/first-unique-character']
    }
  ],
  '10. 回溯法': [
    'algorithm/10.back-tracking/permutation',
    'algorithm/10.back-tracking/combination',
    'algorithm/10.back-tracking/n-queens'
  ],
  '11. 位运算': ['algorithm/11.bit-operation/single-number'],
  '12. 反转和旋转': [
    'algorithm/12.reverse/reverse-linked-list',
    'algorithm/12.reverse/rotate-string',
    'algorithm/12.reverse/reverse-integer'
  ],
  '13. 数学': ['algorithm/13.math/powx-n']
};
