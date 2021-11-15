---
title: Html Interview Questions
description:
  As we know HTML is the base of any website so in a front-end interview, it is
  a very crucial topic to discuss. In the first view, we thought that it is very
  easy to crack this topic in the interview but it has many questions that make
  the interview very difficult. so in this blog, I'll share some questions and
  answers that will help you in an interview.

blogImage: htmlInterview.png
author: Mohit Sojitra
authorImage: MohitSojitra.jpeg
slug: html-interview-question_15-11-2021
date: 15-11-2021
---

# HTML5/HTML Interview question.

- **1. `<!DOCTYPE html>`**

  - This tells a browser that, this all code is html5 code.
  - What happens if we don't put in code?
  - If it's not defined then maybe new features of html5 is not supported
  - new Features: `<article>` , `<footer>`,`<header>`,`<nav>`,`<section>` etc.
  - [reference: What happen if we dont put in code?](https://stackoverflow.com/questions/23230798/what-happens-if-i-dont-put-a-doctype-html-in-my-code-will-it-make-any-major)
    <br />

- **2. What is the void element ?**
  - Html element which has no closing tag its called void element. `<br />`,
    `<hr />` etc. <br/>
- **3 What are HTML entities ?**

  - In HTML there is reserved keyword like < , > , & ,and many more. So if we
    want to display in a browser at that time we must be used to HTML entity to
    display that reserved element. EX: `&lt;` , `&gt;`, and many more you can
    find via searching. <br/>

- **4. types of list in HTML**

  - Order list `<ol>`
  - unorder list `<ul>`
  - description list `<dl>` <br/>

- **5 What is lazy loading ?**

  - In simple terms, Suppose a website has 10 pages like home, about, contact,
    etc.
  - Now you visit **home page** at that time what happens your browser download
    **whole website** and then after browser print your home page.
  - Here we only need the home page but the browser downloads the whole website
    so it takes time to see the home page, which means website load time is
    increased.
  - So what is the solution? Lazy loading that means we only download that
    things are critical at that particular time, here we only need the home page
    so only download the home page, when we click the about us link at that time
    download the about page.
  - Definition:- **Lazy loading** is a strategy to identify resources as
    non-blocking (non-critical) and load these only when needed. It's a way to
    shorten the length of the critical rendering path, which translates into
    reduced page load times. (Mozilla docs)
  - we can lazy load, images, videos, pages, and many more.
  - Example: - if you are a developer then must once visit a medium, in a medium
    when you visit the article at that time first load all the description and
    render it first, at that time all the images are a blur, at that time it
    downloads the image when download complete then images shows in browser.

  <br/>

- **6 What is the difference between inline, inline-block, and block ?**

  - **Ans:** <br/>

  - **inline** The element doesn’t start on a new line and only occupies just
    the width it requires. You can’t set the width or height. <br/>
  - **inline-block** It’s formatted just like the inline element, where it
    doesn’t start on a new line. BUT, you can set width and height values. <br/>
  - **block** The element will start on a new line and occupy the full width
    available. And you can set width and height values.
  - [best article i found about inline, inline-block, and block](https://www.samanthaming.com/pictorials/css-inline-vs-inlineblock-vs-block/)
    <br />

- **7. Where do we add script tag in HTML, in the head section, or the body
  section ?**

  - If the script contains any event listeners or script has code that does not
    render any content on screen at that time that script we place to `<head>`
    section.
  - if the script contains that code responsible for the rendering content on
    screen at that time we add that script at bottom of the body.
  - That means
    - 1.  Place library scripts or event scripts in the head section.
    - 2.  Place normal scripts that do not write anything on the page, in the
          head section.
    - 3.  Place scripts that render something on the web page at the bottom of
          the body section.

  <br/>

- **8. What are the advantages of html5 ?**

  - It has Multimedia Support.
  - It has the capabilities to store offline data using SQL databases and
    application cache.
  - Javascript runs in the background
  - Html5 also allows users to draw various shapes on screen like rectangles,
    circles, triangles, etc.
  - html5 includes new tags. which you can see in the Q1 answer.

- **9. New Type of Html5 form .**
  - Date - Only select date by using type = "date"
  - Week - Pick a week by using type = "week"
  - Month - Only select month by using type = "month"
  - Time - Only select time by using type = "time".
  - Datetime - Combination of date and time by using type = "datetime"
  - Datetime-local - Combination of date and time by using type =
    "datetime-local." but ignoring the timezone
  - Color - Accepts multiple colors using type = "color"
  - Email - Accepts one or more email addresses using type = "email"
  - Number - Accepts a numerical value with additional checks like min and max
    using type = "number"
  - Search - Allows searching queries by inputting text using type = "search"
  - Tel - Allows different phone numbers by using type = "tel"
  - Placeholder - To display a short hint in the input fields before entering a
    value using type = "placeholder"
  - Range - Accepts a numerical value within a specific range using type =
    "range"
  - Url - Accepts a web address using type = "url”

##### Refrence :- https://www.interviewbit.com/html-interview-questions/

#### Thanks for reading! Did I miss anything? And you want to add more question ? Make a pull request on [easycode repo](https://github.com/MohitSojitra/easy-code) , i love to merge it.

### Have a question? Send me a direct message on Linkdin, and we'll figure it out:)
