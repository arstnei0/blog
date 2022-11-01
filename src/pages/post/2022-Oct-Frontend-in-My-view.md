---
title: 2022 October 我眼中的前端
pubDate: 2022/10/29
layout: "$layout/Post.astro"
description: 2022 October 我眼中的前端，各个框架的对比，以及未来。
tags:
 - 前端
 - 观点与感想
---

十月又要过去了，我加入前端这个大家庭也要有几个月了，今儿咱来谈谈目前各个前端框架的现状。

就当作吃吃瓜好了。

## TL;DR
本文章涵盖了我对以下几个前端框架的看法（主要）：
 - [React](https://reactjs.org/)
 - [Vue](https://vuejs.org/)
 - [Svelte](https://svelte.dev/)
 - [Solid](https://solidjs.com/)

同时也会提及（非细谈）以下几个前端框架：
 - [Angular](https://angular.io/)
 - [Preact](https://preactjs.com/)
 - [Elm](https://elm-lang.org/)
 - [Lit](https://lit.dev/)
 - [Inferno](https://www.infernojs.org/)

## 概况
React 和 Vue 依然是毫无疑问的`最流行的`前端框架。

Svelte 发展异常迅速，是目前最时髦的框架（过会会谈谈为什么）。

虽然我很看好 Solid，但遗憾的是它一直没有什么大发展。

Angular 已经基本上完全退出时代的舞台了。Lit, Elm, Preact 发展就那样，没什么变化。

贴几张本文会一直讲到的图，本文中使用`🚀`表示这张图

（点击图片查看大图）

<a class="desktop-only" href="/js-framework-comparison-1.webp"><img src="/js-framework-comparison-1.webp" width="700" /></a>
<a class="mobile-only" href="/js-framework-comparison-1.webp"><img src="/js-framework-comparison-1.webp" width="300" /></a>

<a class="desktop-only" href="/js-framework-comparison-2.webp"><img src="/js-framework-comparison-2.webp" width="700" /></a>
<a class="mobile-only" href="/js-framework-comparison-2.webp"><img src="/js-framework-comparison-2.webp" width="300" /></a>

<a class="desktop-only" href="/js-framework-comparison-3.webp"><img src="/js-framework-comparison-3.webp" width="700" /></a>
<a class="mobile-only" href="/js-framework-comparison-3.webp"><img src="/js-framework-comparison-3.webp" width="300" /></a>

这是目前最为出名的性能分析(benchmark): js framework benchmark。参考性很高。强烈推荐看看[这张图的来源](https://krausest.github.io/js-framework-benchmark/2022/table_chrome_107.0.5304.62.html#eyJmcmFtZXdvcmtzIjpbImtleWVkL2FuZ3VsYXIiLCJrZXllZC9lbG0iLCJrZXllZC9saXQiLCJrZXllZC9wcmVhY3QiLCJrZXllZC9yZWFjdCIsImtleWVkL3NvbGlkIiwia2V5ZWQvc3ZlbHRlIiwia2V5ZWQvdmFuaWxsYWpzIiwia2V5ZWQvdnVlIl0sImJlbmNobWFya3MiOlsiMDFfcnVuMWsiLCIwMl9yZXBsYWNlMWsiLCIwM191cGRhdGUxMHRoMWtfeDE2IiwiMDRfc2VsZWN0MWsiLCIwNV9zd2FwMWsiLCIwNl9yZW1vdmUtb25lLTFrIiwiMDdfY3JlYXRlMTBrIiwiMDhfY3JlYXRlMWstYWZ0ZXIxa194MiIsIjA5X2NsZWFyMWtfeDgiLCIyMV9yZWFkeS1tZW1vcnkiLCIyMl9ydW4tbWVtb3J5IiwiMjNfdXBkYXRlNS1tZW1vcnkiLCIyNV9ydW4tY2xlYXItbWVtb3J5IiwiMjZfcnVuLTEway1tZW1vcnkiLCIzMV9zdGFydHVwLWNpIiwiMzRfc3RhcnR1cC10b3RhbGJ5dGVzIl0sImRpc3BsYXlNb2RlIjoxLCJjYXRlZ29yaWVzIjpbMSwyLDMsNF19)

## React
React 发展比较早，发明了许多新观念，颠覆了时代，在早期占领了大量用户群，生态最为成熟，实际应用最多。但是我现在并不怎么看好 React 了，原因有很多。
1. React 似乎**更新不活跃**了，最新的服务器组件的概念提出好久了，不仅没什么用，半天了也不怎么更新，发展太慢了。对于 Async/Await 支持也才刚出。
2. **学习曲线**越来越不友好。这点过会和 Vue 对比一下就知道了。
3. 性能！性能！**性能差**！在🚀中，React 性能竟到了 1.85，简单来说，它运行所花的时间时原生 JS 的大约 1.85 倍！多么恐怖啊😱！Angular 都比 React 好多了。

最近 Next 跟新出来个新的 Turbopack，的确比 Vite 快。但 Turbopack 问题严重，对其他框架还没有支持。

有些琐碎内容会在 Vue 中讲。

## Vue
我个人认为 Vue 现在**非常成功**。
Vue 的成功表现在以下几点：
1. 整个前端界已经完全**认同** Vue 了。以前还有些人说到前端框架只说 React 和 Angular，现在基本上都是 React 和 Vue了，老一点的还会带上 Angular。
2. **生态**成熟了。废话。
3. **工具链**让人放心。如果你用过 Vite + Vue + TS + Vue Router + Pinia 或者直接 Nuxt，你就会知道什么叫真正的“放心”和“爽”。IDE 支持更不用说了，完全一流。
4. **性能**！Vue 在🚀中获得了 1.25 分，可以说非常非常优秀了。Bundle Size 也还行，可以接受。这么高的性能主要归结于 Vue 的模版语法（SFC），因为模版语法可控性高，Vue 的自动优化做的相当好。如果说 React 是手动档，Vue 就是自动挡。

Vue 的成功**我认为**归结于以下几点：
1. **学习曲线极低**，对新手十分友好。我学的第一个框架就是 Vue，可以说 Vue 的教程渐进得非常到位，非常关照我们新手，i18n做的也非常棒（毕竟中国人在维护）。
2. 中国人特爱用 Vue。原因我就不想说了。
3. 性能。还是性能。说过了。
4. Vue 圈子你要是观察过，就会发现这些人从来不会随便贬低其他框架，有一种形成了“Vue”文化的感觉。

## Svelte
欢迎我们的前端新秀 Svelte!👋

Svelte 可以让你写更少、更可读的代码，获得更好的性能。

虽然 Svelte 发展很好，但实际上我并很不看好 Svelte。理由如下：
1. 它的性能还没有 Vue 好！它在🚀中获得了1.30，比 Vue 竟然还要慢一点。要不是它 Bundle Size 令人震惊，还有多少人会用它呢？
2. “写更少代码”有待考量。在 [Realworld](https://github.com/gothinkster/realworld) 的实现中，有人统计 Svelte 的代码数量竟然比 Solid 还多好多！那么问题来了，对于性能获得 1.10 的 Solid 来说，给我什么理由用 Svelte?
3. **生态**令人作呕🤮。我曾想找个 Svelte Material Design 的 UI Library，最后很明显，失败了。又由于 Svelte 于 React 没有任何相似的写法，导致 MUI 无法被移植。这点 Solid 还可以，有个 [Suid](https://suid.io/) UI 库，日常需求满足的了。

有人可能会说 SvelteKit。光对中国人来说，Svelte 文档都是英文的，没有中文，很不友好。我对 SvelteKit 还是比较看好的。如果 SvelteKit没有误入歧途，Svelte 可能又要被带火一整子了。

## Solid
我相信有些人可能甚至不知道 Solid 是什么。Solid 可能是性能王了。首先，Solid 在🚀中获得 1.10，换句话说，它的运行速度是目前所有主流框架中毫无疑问的最快的，速度和原生 JS 几乎持平。Bundle size 也还可以，Gzip 后只有 7 kb。为了犒劳你看到这里，贴个我自己做的测试：

 - 140.56 react
 - 52.65 vue
 - 12.83 preact
 - 5.23 svelte
 - 7.17 solid

这些框架在 StackBlitz 中的 Template 最基础的 Bundle size，单位全是 KB。Svelte 最少，但不比 Solid 少多少。反之，Svelte 性能却比 Solid 慢了好多。

Solid 与 Preact 更没法比了，不管是 Bundle size 还是性能。

[SolidStart](https://start.solidjs.com) 文档也公布出来了。

但 Solid 问题很严重。就单看 SolidStart，它的文档犯了最智障的 Bug，导致文档几乎没法让人看。（它的下面导航部分不会自动隐藏，会遮住大部分你想阅读的地方）Solid 发展也很慢。Solid 文档对新手十分不友好，你要没完全掌握 React，根本看不懂。Solid 的 Star 增长非常缓慢，大家可以去 [Github Star History](https://star-history.com/) 对比对比。

还有一张 Solid 官网贴的图：

<img class="desktop-only" src="/solid-performance-comparison.webp" width="700" />
<img class="mobile-only" src="/solid-performance-comparison.webp" width="300" />

但我很看好 Solid。之前说过，Solid 有 [Suid](https://suid.io/)，UI 库有了着落。而且搭配上 [Astro](https://astro.build/)：Super fast！这也是我的博客网站的技术选型（Astro + Solid)。而且看看 Solid 的赞助商们：

<img class="desktop-only" src="/sponsor-of-solid.webp" width="700" />
<img class="mobile-only" src="/sponsor-of-solid.webp" width="300" />

😉

## 其他
人不能偏心，只说自己喜欢说的。

Angular 问题太严重，就不讲了。

Lit 有 Google 撑腰，发展还行，性能也很理想，但这个框架我没怎么研究过，就不多 BB 了。

Preact 说过了，发明出来没什么 P 用。

Elm 问题也很严重，发展不起来（它本身的确不适合生产环境）。

Inferno 竟然还是 JavaScript 写的...不过对比 Solid，没什么优势。

## 明天
我怎么看未来趋势？说实话心里很没底。

入前端也没多久，也不是特别了解时代趋势。

但我很肯定，只有像 Next 或者 Nuxt 那样的一体化框架才能获胜。

【完】