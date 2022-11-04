---
title: The problems of RSS
layout: "$layout/Post.astro"
pubDate: 2022/11/4
description: The introduction of RSS and what the problems of RSS now.
tags:
 - RSS
 - future
image:
    src: /rss_hero_image.webp
    width: 100%
---

## Intro to RSS
RSS has been a popular way to read articles or blog posts. Lots of websites have implemented RSS(including mine). It provides a nice data center to combine and track articles from many different websites. If you are using RSS, you don’t need to go to every website everyday to see if they have updated. Instead, your RSS reader has collected the feeds that you have subscribed to, and you can just open the reader, and see what people are doing.

## How it works
How does RSS work? For example, when you are viewing a personal website, you might see an icon like this:

![](/rss-colored.webp)

And after you click this, it will link you to another URL such as `myblog.com/rss.xml` or `www.john.com/feed`. This page is in the particular format of XML which is defined by RSS. If you installed any browser extension about RSS, it may show you all the articles of this website because it detected RSS on this page.

<img src="/rss-content.webp" alt="RSS content" width="100%" />

After you follow the feed through an RSS app or your browser RSS extension, your RSS app or your browser extension will start tracking this URL and remind you when there are new feeds.

## The problems of RSS
RSS defined that everything should only be on one page. This means all articles that the content creator made are on this single page. And also, you can only **read** articles using RSS, but you can’t leave a comment, see others’ reactions, or do something that is only available on the blogger’s website, not in the RSS reader. This suggests that **RSS is static**.

You might say, are there really any problems with using RSS? If you want to leave a comment or see others’ reactions, you can follow the link of the article which is also provided by RSS. And at most times **people just want to read articles and do nothing else**.

And that is the problem.

Most of the bloggers want to see more people reading their blogs and especially visiting their websites. If people are reading their articles through their websites, it’s fine because they have put **analytics** tools such as Google Analytics and they can easily get the number of the visitors. 

However, what if people are reading their blog posts using RSS?

**RSS is static**. And most people just want to read. This causes that the blogger can’t really know the real number of his readers and the popularity of his article.

For example, a blogger’s articles were high-qualified, and he had many followers using RSS, but he didn’t know that because of the traits of RSS. Also, whenever he wrote a new article, people would receive it through the RSS reader. Only a few of his readers were reading his article through his website. He figured out that there were only 15 people reading his article and he thought that nobody wanted to read his articles, so he gave up. Isn’t this depressing?

All of these are caused by the disadvantages of RSS.

## What we can do
I’m not saying that you should uninstall your feedly or any other RSS reader. I mean that the RSS format now has many problems. 

Firstly, RSS only has one page for all posts. This is quite unreasonable. This will make the only RSS page huge and it will make the loading slow when there are too many posts. I believe that there should be a list which contains all the basic information of the posts, including its title, short description, date and its URL, etc. The posts will be stored in different locations. This is friendly for the readers to fetch the posts because they only need to load feeds that they need. Also, the total views of the posts can be better counted and analysed.

Secondly, there should be more interactive APIs about RSS. It should define a series of interactive APIs such as comments and likes that will encourage readers to be involved. It’s also easier for bloggers to see how people think about their articles because more people will leave reactions about their articles.

Thirdly, it should be able to be **easily classified**. Sometimes readers will subscribe a feed just for a few particular blog posts. Readers will not like **all** the articles of a blogger, but probably only one type of articles. RSS should allow readers to see the types (or tags) of articles and only subscribe to what they want to read. This will help readers filter articles.

## Then
I’m thinking about this because I often feel embarrassed and uncomfortable when using RSS, and I found many bloggers saying that RSS has caused that they can’t analyse their articles properly because they don’t know the real number of their articles.

I will think about the technical implementations of it later. Perhaps I will start a new project about it. Let me know if you are interested in participating in.

And BTW, if you have any other good ideas about it, just tell us. I hope I can see you in the comments.
