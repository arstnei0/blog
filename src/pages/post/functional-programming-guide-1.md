---
title: 函数式编程指南 1：入门
description: 关于 TypeScript 函数式的基本写法以及一些入门和高级技巧。
pubDate: 2022/11/1
tags: 
 - 函数式编程指南
 - TypeScript
layout: "$layout/Post.astro"
---

我开启了一个新系列，有关 TypeScript 函数式编程的指南和技巧。

## 简介
[函数式编程](https://zh.wikipedia.org/wiki/%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B)是一种现在慢慢流行起来的[编程范式](https://zh.wikipedia.org/wiki/%E7%BC%96%E7%A8%8B%E8%8C%83%E5%9E%8B)。这么说是因为以前函数式编程其实并不被很多人认可（因为以前很多时候函数式编程不适合生产环境使用），但现在随着时间的推移，程序员们开始逐渐意识到函数式编程的优点完全大于缺点。本指南会使用 TypeScript，要求要有一定的基础。

举个例子，这是一段代码的非函数式的写法（摘自我的博客源码）：
```ts
// 没必要读懂，只是一个展示
function getPosts(posts: MarkdownInstance<Record<string, any>>[]) {
    if (import.meta.env.PROD) {
        for (let i in posts) {
            if (posts[i].frontmatter.draft) {
                posts.splice(i, 1)
            }
        }
    }
    
    return posts
}
```

而使用函数式重写后明显简洁了不知道多少：
```ts
// 没必要读懂，只是一个展示
const getPosts = (posts: MarkdownInstance<Record<string, any>>[]) =>
  import.meta.env.PROD
    ? posts.filter((post) => !post.frontmatter.draft)
    : posts
```

而且完全可以写进一行里：
```ts
const getPosts = (posts: MarkdownInstance<Record<string, any>>[]) => import.meta.env.PROD ? posts.filter((post) => !post.frontmatter.draft) : posts
```

酷不酷？

## 改写代码：第一步
我扔给你一段代码，让你把它改写成函数式的：
```ts
function add(a: number, b: number) {
    return a + b
}
```

想要写出函数式代码，首先要了解 [JavaScript 的箭头函数（实际上就是匿名函数）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)。别点那个链接！那个是 MDN 的文档。

通俗的解释，箭头函数就只是更加简洁，以一个类似于 `() => ...` 的表达式。括号里就是函数的参数，比如在刚才的代码里就是 `(a: number, b: number)`。`=>` 表明这是个箭头函数。`() => ...` 中的 `...` 则是函数体，可以是一个块（就是`{ ... }`）。这个表达式返回一个函数（也是一个值），可以储存到一个变量（或者常量，通常都是常量）里去。

初步改写后：
```ts
const add = (a: number, b: number) => {
    return a + b
}
```

关于 `const`，我就不解释了。如果还不懂，你需要先学一学 ES6 的语法了。我建议读读[阮老师](https://ruanyifeng.com/)的[ES6 入门教程](https://es6.ruanyifeng.com/)，免费的。

## 改写代码：第二步
接下来，我们将把那个难看的花括号`{}`去掉。

箭头函数后面的函数体更加灵活，不仅可以用一个块表示，还可以直接用表达式来简化函数体。
在表达式中，你可以使用定义参数。

经过第二步改写后的代码：
```ts
const add = (a: number, b: number) => a + b
```

可以看到，大括号和 `return` 关键字都不见了，代码可读性也没有变差。

## 深入理解
刚才你已经成功将一段代码改写成了函数式的。路人们有问题了。

路人甲：我用 `function` 和 `return` 关键字写的好好的，你突然给我去掉了，搞得人家好难受哦。

路人乙：这有什么用吗？写短一点代码又有什么好处？只会让领导觉得你又偷懒，写的代码短的要死。

路人丙：我以前写法写得好好的，非得给我整些新花样。

路人丁：函数式写法不灵活，不怎么好用。

对于路人甲，我们掠过😝。甲的说法毫无道理，就是矫情。

对于路人乙，不愿意提高写代码效率，就做一辈子一线码农写着最难看的代码好了。

对于丙，丙有点死板了。过会你就会看到函数式的优势了。

丁比较理性。是的，对于新手而言函数式的确很多功能都无法完成，但是深入研究和实践后，大部分语法上的不便之处都可以迎刃而解。

函数式流行到什么地步？这么说，Python, JavaScript, C++ 和大部分主流语言都对函数式进行了非常完整、认真的支持，我的博客源码也可以大量使用函数式，屡试不爽，效率有大幅度提升。

要深入理解函数式的一些理念，我仍然建议阅读阮老师的[函数式编程入门教程](https://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html)。这篇文章对函数式的设计目的、核心理念解释得已经非常到位了，我也就没有必要重新整理一遍了。但是这篇文章关于新语法没有涉及到，只讲了理念，更没有用 ES6 的新语法。

要是还是觉得函数式没啥用，看看这篇来自[酷壳](https://coolshell.cn/)的[如何读懂并写出装逼的函数式代码](https://coolshell.cn/articles/17524.html)的文章。装逼极了。但是这篇文章只适合娱乐用用（我认为是的）。

## 后续
这篇文章仅仅是入个门，别以为现在你就已经可以开始用函数式写代码了。后续我还会慢慢讲解一些刚入门会遇到的坑和问题，以及一些小技巧。

喜欢的话 leave a reaction please。谢。只是为了看看有没有人看我文章。
