---
title: My personal website almost done!
layout: "$layout/Post.astro"
pubDate: 2022/10/10
description: About how I made this website, what tech stacks or tools did I choose to build this website and what I am going to do next.
---

# My personal website almost done!

.heading-wrapper {
--icon-size-x: 2rem;
--icon-size-y: 1.5rem;
margin-inline-end: var(--icon-size-x);
}

.heading-wrapper:not(:first-child) {
margin-block: 0;
}

.heading-wrapper > \* {
display: inline;
margin-bottom: 0;
}

.heading-wrapper > .anchor-link {
position: relative;
display: inline-flex;
margin-inline-end: calc(-1 \* var(--icon-size-x));
width: var(--icon-size-x);
height: var(--icon-size-y);
color: var(--theme-text-light);
text-decoration: none;
justify-content: center;
vertical-align: baseline;
}

/_ Float anchor links to the left of headings on larger screens. _/
@media (min-width: 50em) {
.heading-wrapper {
display: flex;
flex-direction: row-reverse;
justify-content: flex-end;
align-items: baseline;
margin-inline-start: calc(-1 \* var(--icon-size-x));
}

    .heading-wrapper > .anchor-link {
    	margin-inline-end: 0;
    }

}

.heading-wrapper > .anchor-link {
opacity: 0.5;
}

@media (hover: hover) {
.heading-wrapper > .anchor-link {
opacity: 0;
}
}

.heading-wrapper:hover > .anchor-link,
.anchor-link:focus {
opacity: 1;
}.heading-wrapper {
--icon-size-x: 2rem;
--icon-size-y: 1.5rem;
margin-inline-end: var(--icon-size-x);
}

.heading-wrapper:not(:first-child) {
margin-block: 0;
}

.heading-wrapper > \* {
display: inline;
margin-bottom: 0;
}

.heading-wrapper > .anchor-link {
position: relative;
display: inline-flex;
margin-inline-end: calc(-1 \* var(--icon-size-x));
width: var(--icon-size-x);
height: var(--icon-size-y);
color: var(--theme-text-light);
text-decoration: none;
justify-content: center;
vertical-align: baseline;
}

/_ Float anchor links to the left of headings on larger screens. _/
@media (min-width: 50em) {
.heading-wrapper {
display: flex;
flex-direction: row-reverse;
justify-content: flex-end;
align-items: baseline;
margin-inline-start: calc(-1 \* var(--icon-size-x));
}

    .heading-wrapper > .anchor-link {
    	margin-inline-end: 0;
    }

}

.heading-wrapper > .anchor-link {
opacity: 0.5;
}

@media (hover: hover) {
.heading-wrapper > .anchor-link {
opacity: 0;
}
}

.heading-wrapper:hover > .anchor-link,
.anchor-link:focus {
opacity: 1;
}

# aaaasknkn
