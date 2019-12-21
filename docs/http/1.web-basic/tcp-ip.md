---
title: TCP/IP协议
sidebar_label: TCP/IP协议
---

import Img from '../../../src/components/Img';

import Hint from '../../../src/components/Hint'

## 前言

TCP/IP 协议实际上是一系列网络通信协议的统称，其中最核心的两个协议是 TCP 和 IP，其他的还有 UDP、ICMP、ARP 等等，共同构成了一个复杂但有层次的协议栈。

<Img width="480" legend="图：TCP/IP协议簇" src="https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/3YA6IN.png" />

## TCP/IP 协议分层

TCP/IP 协议簇里的层次划分为链路层、传输层、网络层和应用层。TCP/IP 协议的四层就像搭积木一样，每一层需要下层的支撑，同时又支撑着上层，任何一层被抽掉都可能会导致整个协议栈坍塌。同时分层也使得各层只考虑分配给自己的任务，而不需要关心其他层的具体实现。

<Img width="360" legend="图：TCP/IP协议分层" src="https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/jv7Caj.png" />

- 链路层（link layer）负责在**以太网、WiFi 这样的底层网络上发送原始数据包**，工作在网卡这个层次，使用**MAC 地址**来标记网络上的设备，所以有时候也叫 MAC 层。

- 网络层（internet layer），IP 协议就处在这一层。因为 IP 协议定义了**IP 地址**的概念，所以就可以在链路层的基础上，**用 IP 地址取代 MAC 地址**，把许许多多的**局域网、广域网连接成一个虚拟的巨大网络**，在这个网络里找网络上的设备时只要把 IP 地址再“翻译”成 MAC 地址就可以了。

- 传输层（transport layer），这个层次协议的职责是保证数据在**IP 地址标记的两点之间可靠地传输**，是 TCP 和 UDP 协议工作的层次。

- 应用层（application layer），应用层有各种面向具体应用的协议。HTTP 层属于该层，还有其他协议例如 Telnet、SSH、FTP、SMTP 等等。

## OSI 网络分层模型

OSI，全称是**开放式系统互联通信参考模型**（Open System Interconnection Reference Model）。由于 TCP/IP 的概念出现于 1970 年代，当时除了它还有很多其他的网络协议，整个网络世界比较混乱，所以而国际标准组织（ISO）为了统一既存的各种网络协议设计了该模型。

OSI 一共分为 7 层，并为每层设计了编号，具体如下图所示：

<Img width="360" legend="图：OSI分层模型图" src="https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/mhBFCr.png" />

- 第一层：物理层，网络的物理形式，例如电缆、光纤、网卡、集线器等等；
- 第二层：数据链路层，它基本相当于 TCP/IP 的链路层；
- 第三层：网络层，相当于 TCP/IP 里的网络层；
- 第四层：传输层，相当于 TCP/IP 里的传输层；
- 第五层：会话层，维护网络中的连接状态，即保持会话和同步；
- 第六层：表示层，把数据转换为合适、可理解的语法和语义；
- 第七层：应用层，面向具体的应用传输数据。

由于 TCP/IP 等协议已经在许多网络上实际运行，所以将他们全部推翻重构显然是不现实的。此外，OSI 的分层模型在四层以上分的太细，而 TCP/IP 实际应用时的会话管理、编码转换、压缩等和具体应用经常联系的很紧密，很难分开。例如，HTTP 协议就同时包含了连接管理和数据格式定义。因此，OSI 分层模型在发布的时候就明确地表明只是作为一个参考。

<Hint type="tip">OSI 分层模型在发布的时候就明确地表明只是作为一个**参考**</Hint>

## TCP/IP 和 OSI 分层的映射关系

现在我们有了两个网络分层模型：TCP/IP 和 OSI，新的问题又出现了，一个是四层模型，一个是七层模型，这两者应该如何互相映射呢？

<Img width="540" legend="图：TCP/IP和OSI分层的映射关系" src="https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/yfEQMV.png" />

通过上图，我们可以得到如下结论：

- 第一层：物理层，TCP/IP 分层里没有；
- 第二层：数据链路层，对应 TCP/IP 的链路层；
- 第三层：网络层，对应 TCP/IP 的网络层；
- 第四层：传输层，对应 TCP/IP 的传输层；
- 第五、六、七层：统一对应到 TCP/IP 的应用层。

通过两者的映射关系可以看出，TCP/IP 是一个**纯软件的栈**，没有网络应有的最根基的电缆、网卡等物理设备的位置。而 OSI 则补足了这个缺失，**在理论层面上**描述网络更加完整。

## TCP/IP 协议栈的工作方式

TCP/IP 协议栈的工作方式，可以用 HTTP 来举个例子：

1. 客户端如果要获得 Web 页面的资源，可以在应用层发出一个 HTTP 请求。

2. 为了传输方便，在传输层(TCP 协议)把从**应用层处收到的数据(HTTP 请求报文)进行分割**，并在各个报文段上打上**标记序号和端口号**，然后将报文转发给网络层。

3. 在网络层(IP 协议)，为数据添加 IP 头信息生成数据包，并将这些包路由转发给链路层。

4. 链路层为数据包添加 MAC 头，然后组装成帧并将数据传输给服务器。

5. 接收端的服务器在链路层接收到数据，按序往上层发送，一直到应用层。当传输到应用层，才能算真正接收到由客户端发送过来的 HTTP 请求。

<Img width="360" legend="图：TCP/IP 协议栈的工作方式" src="https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/iAUBTu.png" />

发送端在层与层之间传输数据时，每经过一层时必定会被打上一个该层所属的首部信息。反之，接收端在层与层传输数据时，每经过一层时会把对应的首部消去。如下图所示：

<Img width="360" legend="图：TCP/IP各层数据封装和拆分流程" src="https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/w0KyOo.png" />

## 小结

本文整理了一些 HTTP 相关的基础知识，但是对于其中的细节并没有展开，如果对于文中具体的知识点感兴趣，可以去网上搜索相关的知识点进行学习。
