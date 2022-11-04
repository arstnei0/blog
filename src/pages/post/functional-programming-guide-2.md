---
title: 函数式编程指南 2：条件判断
layout: "$layout/Post.astro"
pubDate: 2022/11/4
description: 关于 TypeScript 函数式的基本写法以及一些入门和高级技巧。系列中的第一篇文章。
tags:
 - 函数式编程指南
 - TypeScript
---

接[上一篇文章](https://cn.zihan.ga/post/functional-programming-guide-1)，上次简单介绍了函数式指南，这篇文章将让你了解如何在函数式中使用条件判断。本文比较关心新手，讲的比较细，如果遇到已经掌握的内容，建议直接跳过。

## 三元运算符
在非函数式代码中，经常见到 `if` 语句。但在函数式中，我们通常使用表达式作为函数体。那么如何在函数式中进行条件判断呢？

先看第一段非函数式代码（TypeScript）：
```ts
// 判断一个数字是否是是基数
function isOdd(n: number) {
    if (n % 2 === 1) {
        return true
    } else {
        return false 
    }
}
```

有些写的优雅点的人可能会写成这样：
```ts
function isOdd(n: number) {
    if (n % 2 === 1) return true
    else return false
}
```

但他们本质并没有区别，都写出来只是怕有些人揪住这点说我不懂 JS 语法。

回到正题。大家可能有了解过 JavaScript 有一个叫三元表达式的东西，它长这样：`condition ? valueIfTheConditionIsTrue : valueIfTheConditionIsFalse`。其中的 condition 就是那个条件，valueIfTheConditionIsTrue 就是当这个条件为真时的值，valueIfTheConditionIsFalse 就是当这个条件为假的值。

简单来说，三元表达式就是将这段代码：
```ts
let 我是天才

if (我的智商 > 150) {
	我是天才 = true
} else {
	我是天才 = false
}
```

变成了这段代码：
```ts
const 我是天才 = 我的智商 > 150 ? true : false
```

看着有点懵？再来解读下：

`我的智商 > 150，`?` 后面的 `true` 就是当条件为真时的值，`:` 后面的 `false` 就是当条件为 `false` 时的值。

为了防止某些人说我不懂 JS，我又得贴上更简洁的代码，顺带解释了：
```ts
const 我是天才 = !!我的智商 > 150
```

有时候后面那个 `? true : false` 可以省略，写法就是这样。通过两个非运算符 `!`，将其转换成布尔值，于前面的代码是等效的

学会了三元表达式，就可以将之前的代码转写成函数式的了：
```ts
const isOdd = (n: number) => n % 2 === 1 ? true : false
```

或者用刚才那个两个感叹号的（这里叫个括号是为了防止 JS 理解为将 `n` 进行布尔化，将：`n % 2 === 1` 看为一个整体):
```ts
const isOdd = (n: number) => !!(n % 2 === 1)
```

要是理解不了两个感叹号的没关系，三元表达式平时够用了。

还是没看懂？Jesus Christ

## 没有 else 的情况
我又扔给你一段代码，让你改成函数式：
```ts
const IQ = 149

function getMyIQ() {
	if (IQ >= 150) {
		return IQ
	}

	// 如果没有150，就拒绝告诉别人我的智商 }

// 调用函数，这段不要改
if (!getMyIQ()) {
	console.log(`Zihan 拒绝张嘴`)
}
```

你很高兴，表示你刚学会，过一会交了作业：
```ts
const IQ = 149

const getMyIQ = () => IQ >= 150 ? IQ : undefined

if (!getMyIQ()) {
	console.log(`Zihan 拒绝张嘴`)
}
```

你很聪明，知道如果一个函数如果不返回任何东西就相当于返回 `undefined`，但我表示这段代码并不是正规的函数式代码。

于是你上网开始努力寻找答案，最终找到了另一个写法，并且交了给我：
```ts

const IQ = 149

const getMyIQ = () => IQ >= 150 && IQ

if (!getMyIQ()) {
	console.log(`Zihan 拒绝张嘴`)
}
```

看，我把整个你寻找答案的过程都给写出来了，是不是很贴心？

那么这个 `IQ >= 150 && IQ` 到底是什么呢？你可能知道它的学名叫做“逻辑与”，实际上就是一个 `and` 运算，表示只有在两个条件同时成立时才是“真”的。但是你可能不知道，在 JS 中，这个表达式返回的不是`true` 或者 `false`。

拿 `A && B` 举个例子：当两个值都为真时，这个表达式会返回 B（不管 B 是不是个布尔值！B 是任何类型，它都会返回 B！）；当两个条件有一个为假时，表达式会返回那个假的值（返回的不一定是布尔类型，取决于 A 或者 B 的类型）；当两个条件都为假时，就会返回 A。

现在懂了吗？🤪要是不懂的话先用再说🥲

有人说这样这个表达式返回的不就不是 `undefined` 了吗？在实际应用中，`false` 与 `undefined` 用法区别并不大。这里我就懒一点了，应为我实在找不到更好的例子了...

更广泛的这个表达式的应用在于简化 `if` 语句，比如这段代码：
```ts
if (condition) doSomething()
```

可以写成这样：
```ts
condition && doSomething()
```

原理是当第一个条件为假时，后面的 `doSomething()` 就不会被执行了。

不在细讲了，我觉得说的其实有点多了。会 TS 的人怎么可能不会这些啊...

## 总结
今天学了两个条件判断的表达方法：
1. 三元表达式
```ts
const 我是天才 = 我的智商 > 150 ? true : false
```

2. “与”运算符
```ts
const getMyIQ = () => IQ >= 150 && IQ
```

没别的了。下期讲讲函数式中的循环。