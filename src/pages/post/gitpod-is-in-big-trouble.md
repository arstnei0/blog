---
title: Gitpod is in big trouble
layout: "$layout/Post.astro"
pubDate: 2022/11/12
description: About the new free plan of Github Codespaces and how Gitpod got into big trouble.
tags:
    - Gitpod
    - Github Codespaces
---

Yesterday, November 11th, I suddenly found that Github Codespaces has a free plan now.

<img src="https://i.imgur.com/OA4PRC7.jpg" width="100%">

This must be great news. I immediately remembered Gitpod because I used to spend a lot of time working in it.Github Codespaces is now 60-hours-per-month free, and Gitpod is only 50-hours-per-month free. Perhaps, I don't need Gitpod any more and Gitpod must have been in big trouble.

## What are Gitpod and Github Codespaces
The official definitions of Gitpod and Github Codespaces are a little bit confusing.

Gitpod: Gitpod is an open-source Kubernetes application for ready-to-code developer environments that spins up fresh, automated dev environments for each task, in the cloud, in seconds. It enables you to describe your dev environment as code and start instant, remote, and cloud-based developer environments directly from your browser or your Desktop IDE. From [Gitpod Github repo README](https://github.com/gitpod-io/gitpod).

Github Codespaces: Create a codespace to start developing in a secure, configurable, and dedicated development environment that works how and where you want it to. From [Github Codespaces Documentation Home Page](https://docs.github.com/en/codespaces).

What do these tools do? Basically, in my opinion, they are just providing easy-to-configure spaces or environments for coding, that are highly collaborative and secure and allow programmers to start coding in 1 minute or even less than that. Programmers also don't have to run things on their own machine, but on the cloud.

For example, imagine that you were on your friend's laptop and you wanted to code then. What do you need to do?

Assume it's a Next.js project.
1. Install Node.js
2. Install Git
3. Install VSCode or other code editors
3. Login Github(both in the browser and VSCode, because you need to synchronize your extensions)
4. Clone repo to local environment
5. Run `npm i`
6. Run `npm run dev`
7. Open `localhost:<port>` 
8. Then start coding

And after you finished, you need to:
1. Delete your project locally
2. Logout Github
3. If your friend doesn't want to see Node.js, Git or VSCode in his laptop, you need to uninstall them all.

But what if you're using Gitpod or Github Codespaces? Assume that we are using Github Codespaces on your friend's machine, you need to:
1. Login Github in the browser
2. Click the button `create a codespace on main` and Github automatically redirect you to VSCode.
<img src="https://i.imgur.com/SPr6xU6.jpg" width="100%">

And after you finished, there is only one thing left to do:
1. Logout Github

Wow! It's qiute convenient to use Github Codespaces. This shows only one advantage of Github Codespaces, coding everywhere easily. If you want to know more about how Gitpod and Github Codespaces can impact the way you code, experience it yourself or read their docs.

## Differences
Gitpod and Github Codespaces are quite different. The most obvious difference is that Gitpod is opensource while Github Codespaces is not. Yes, I know, Microsoft doesn't like opensource a lot(Github is a part of Microsoft) and everything in Github is not open(Though Github is encouraging opensourcers a lot).

Gitpod is opensource on [Github](https://github.com/gitpod-io/gitpod)(Not funny), which also means that Gitpod can be self-hosted. Github has an enterprise version which is similar to self-hosted things, but Github itself is not open or can't be self-hosted.

Gitpod has a free plan, that allows users to use it for 50 hours per month. There are also some other limitations. These are all the plans' summaries:

<img src="https://i.imgur.com/ppzUqwg.jpg" width="100%">

Github Codespaces' plan is quite different. It provides 120 core hours per month for free personal accounts. It doesn't mean that you can use it for 120 hours per month. Instead, it means the cores' running time. For example, if you are using a 2-core machine in Github Codespaces, after you have been coding for 1 hour, you have used 2 hours of the free plan because 2 cores are running. Generally, you can use a 2-core machine for 60 hours per month.

This is how it counts: 

<img src="https://i.imgur.com/l1G3EOC.jpg" width="100%">

You can see more at [About billing for Github Codespaces](https://docs.github.com/en/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

Github Codespaces is actually easier to configure than Gitpod because it's natively supported by Github. You can use templates or create environment configuration file yourself to generate a new codespace. You don't even need to leave Github to do your work.

Gitpod doesn't allow you to configure the machine type, while Github Codespaces does. Github Codespaces allows you to choose the best machine type for your project, including the number of cores.

Both Gitpod and Github Codespaces have good IDE support. 

## Gitpod is in trouble
As you can see, Github Codespaces allows ten hours more than Gitpod does. I guess Github Codespaces is directly competing with Gitpod. Also, Github Codespaces has a more flexible plan, which is counted by usage.

I tested both Github Codespaces and Gitpod, and I figured out that Github Codespaces' starting time is much shorter than Gitpod. I often need to wait for about a minute to boot the codespace in Gitpod, but in Github Codespaces, it took me only about 5 seconds. 

I think more people will migrate from Gitpod to Github Codespaces, not only due to its better free plan, but also because of its convenience and flexibility. 

## Conclusion
Gitpod will never die, because it's opensource. Gitpod is still a nice choice for enterprises. But still, Gitpod must have been in big trouble. I don't believe Gitpod has the money to change their free plan(Even if they did, Github Codespaces can also do that). I believe that the right future of Gitpod is no more for individual developers, but for enterprises.

Good luck, Gitpod.
