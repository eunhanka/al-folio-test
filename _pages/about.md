\---

layout: about

title: about

permalink: /

subtitle: Postdoctoral researcher, Lyles School of Civil and Construction Engineering, Purdue University

nav: true

nav\_order: 1

\---



{% include eh\_hero.liquid %}



<style>

\#eh-news { margin: 2.2rem 0 0; }

\#eh-news h2 { font-size: 1.5rem; font-weight: 600; margin: 0 0 1rem; color: var(--global-text-color); }

\#eh-news .eh-news-item { display: flex; gap: 1rem; padding: 0.7rem 0; border-bottom: 0.5px solid var(--global-divider-color); }

\#eh-news .eh-news-item:last-child { border-bottom: 0; }

\#eh-news .eh-news-date { flex-shrink: 0; width: 7.5rem; font-size: 0.9rem; font-weight: 500; color: var(--global-text-color-light); }

\#eh-news .eh-news-body { font-size: 1rem; line-height: 1.55; color: var(--global-text-color); }

\#eh-news .eh-news-body a { color: var(--global-theme-color); }

</style>



<div id="eh-news">

&#x20; <h2>News</h2>

&#x20; {%- assign sorted\_news = site.news | sort: "date" | reverse -%}

&#x20; {%- for item in sorted\_news limit: 6 -%}

&#x20; <div class="eh-news-item">

&#x20;   <div class="eh-news-date">{{ item.date | date: "%b %-d, %Y" }}</div>

&#x20;   <div class="eh-news-body">{{ item.content | markdownify | remove: '<p>' | remove: '</p>' }}</div>

&#x20; </div>

&#x20; {%- endfor -%}

</div>

