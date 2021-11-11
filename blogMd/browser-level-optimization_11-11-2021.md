---
title: Browser Level Optimization
description:
  As we know any user take maximum 10 sec to visit website and found intresting
  or not. But Think if your site takes too much time to load then any user move
  to the other site he/she doesn't wait to load site. So How we optimised our
  site to load fast?, Here i share some tips which i found in internet and
  represent in my way.

blogImage: optimised.png
author: Mohit Sojitra
authorImage: MohitSojitra.jpeg
slug: browser-level-optimization_11-11-2021
date: 12-10-2021
---

# Browser Level Optimization.

**As we know any user take maximum 10 sec to visit website and found intresting
or not. But Think if your site takes too much time to load then any user move to
the other site he/she doesn't wait to load site. So How we optimised our site to
load fast?, Here i share some tips which i found in internet and represent in my
way.**

- **1. Compress The Files**
  - Every website build with html, css and js. So more complex page is
    responsible for more loading time.
  - To improve the site responsiveness or perfomance, this large code file
    should be compress to original size.
  - So Minify CSS and JavaScript <br/>
- **2. Used image in website**
  - More than 50% of website size contain images. so if your site has lots of
    images then make sure that image dont have jpeg or png formate. it is great
    if its in webp format.
  - why webp ? Because webp format images almost 20-30% small of jpeg and png
    images. so its better to use webp formated images to improve perfomance.
    <br/>
- **3. Enable prefetching**
  - Prefetch enable browser to store the information that a user might access in
    near future. <br/>
- **4. Removed unused css and js**

  - CSS is used for how html document displayed in DOM. When websites load
    user's browser, first download and parse all the external css file before
    rendering things in DOM. So more css contain in site so user must wait for
    above things done and then user see the screen.
  - And same for js - If the JavaScript is render-blocking, the browser must
    download, parse, compile, and evaluate the script before it can proceed with
    all of the other work that's needed for rendering the page.
  - So its benifcial for remove the unused css and js for improve site
    perfomance.
  - **removing unnecessary characters** from your HTML, JavaScript, and CSS that
    are not required to load, such as:

    - White space characters
    - New line characters
    - Comments
    - Block delimiters

    This speeds up your load times as it reduces the amount of code that has to
    be requested from the server.

   <br />

- **5. Reduce HTTP requests**

  - When your browser fetches data from a server it does so using HTTP
    (Hypertext Transfer Protocol). It is a request/response between a client and
    a host. In general **the more HTTP requests your web page makes the slower
    it will load**.
  - There are many ways you can reduce the number of requests such as:

    - Inline your JavaScript (only if it is very small)
    - Using CSS Sprites
    - Reducing assets such as third party plugins that make a large number of
      external requests
    - Don't use third party frameworks unless they are absolutely needed
    - Use less code!
    - Combining your CSS and JS files (with HTTP/2 concatenation is no longer as
      important)

#### Thanks for reading! Did I miss anything? Did you found any other best optimization techniques ? Have a question? Send me a direct message on Linkdin, and we'll figure it out :)
