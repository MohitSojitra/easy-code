---
title: Css Interview Questions
description:
  As we know Css is the base of any website so in a front-end interview, it is a
  very crucial topic to discuss. In the first view, we thought that it is very
  easy to crack this topic in the interview but it has many questions that make
  the interview very difficult. so in this blog, I'll share some questions and
  answers that will help you in an interview.

blogImage: css-interview-questions.png
author: Mohit Sojitra
authorImage: MohitSojitra.jpeg
slug: css-interview-question_17-11-2021
date: 15-11-2021
---

# Css Interview Questions

As we know Css is the base of any website so in a front-end interview, it is a
very crucial topic to discuss. In the first view, we thought that it is very
easy to crack this topic in the interview but it has many questions that make
the interview very difficult. so in this blog, I'll share some questions and
answers that will help you in an interview.

- **1. Box model in css, it's very important in frontend interview css
  question.**
  - example :

```html
<pre>
	<h1 styles="background-color: lightgrey;
        width: 300px;
        border: 15px solid green;
        padding: 50px;
        margin: 20px;"> 
        Hey, Mohit Sojitra 
	</h1>
</pre>
```

- In any html element, there is four part

  - 1. first layer content : hey, Mohit sojitra is content
  - 2. 2nd layer padding : Space around the content
  - 3. 3rd layer is border : A border that goes around the padding and content
  - 4. 4th layer is margin : Clears an area outside the border.
  - Example [w3school](https://www.w3schools.com/css/css_boxmodel.asp) <br />

- 2. **Type of selector in class**

  - ref : =
    [interview bit](https://www.interviewbit.com/css-interview-questions/)
  - **universal selector**

    - ```css
      * {
        color: 'green';
        font-size: 20px;
        line-height: 25px;
      }
      ```

  - **Element Type Selector**
    - ```css
      h1 {
        color: 'green';
        font-size: 20px;
        line-height: 25px;
      }
      ```
  - **ID Selector**
    - ```css
      h1 {
        color: 'green';
        font-size: 20px;
        line-height: 25px;
      }
      ```
  - **class Selector**
    - ```css
      .box {
        padding: 10px;
        margin: 10px;
        width: 240px;
      }
      ```

- **3. what is a CSS preprocessor ?**
  - A CSS Preprocessor is a tool used to extend the basic functionality of
    default vanilla CSS through its own scripting language. It helps us to use
    complex logical syntax like – variables, functions, mixins, code nesting,
    and inheritance to name a few, supercharging your vanilla CSS.( from
    interview bit. )
- **4. What is the difference between inline, inline-block, and block?**

  - Answer : cover in HTML interview question
    [find here](https://blog.mohitsojitra.tech/blog/html-interview-question_15-11-2021)

- **5. What are Pseudo elements and Pseudo classes?**

  - Ans :
    [best link i found about pseudo element and classes](https://www.smashingmagazine.com/2016/05/an-ultimate-guide-to-css-pseudo-classes-and-pseudo-elements/#table-of-contents-in-alphabetical-order)

- **6. Margin top and margin bottom have an effect on inline element ?**

  - No, it doesn’t affect the inline elements. Inline elements flow with the
    contents of the page.

- **7. margin left and margin-right have an effect on inline element ?**

  - Yes, it's effect and also padding effect the inline element.
  - There is no effect of width and height in inline element.

- **I highly recomnded to read article html interview question to know more**

- **8. how are css selector matches ?**

  - `css p span{ color: black; }`
  - The selector matching pattern is **RIGHT to LEFT**.
  - That means **first it finds all the span tag** in Dom when it found then it
    goes one step back then it found **p tag**, So in previous out it filter all
    the span tag which parent element is **p tag**.
  - after that, as result apply all the styles over that.
  - Here **Time complexity is proposed to the selector**

- **9. In box-sizing, diffrence between content-box and border-box .**

  - Default behaviour of box in **content-box**
  - **content-box** : - In Box model, Box-sizing is **content-box** then,

    - ```css
      div {
        width: 300px;
        height: 200px;
        padding: 15px;
        border: 5px solid grey;
        margin: 30px;
        box-sizing: content-box;
      }
      ```
    - **content-box** : - In box model
      - div width is 300px ,height 200px, padding 15px, border 5px.

  - **border-box** :- In Box model, Box-sizing is **border-box** then,

    - ```css
      div {
        width: 300px;
        height: 200px;
        padding: 15px;
        border: 5px solid grey;
        margin: 30px;
        box-sizing: border-box;
      }
      ```
    - **border-box** :- in box model

      - whole box width is 300px **including paddingLeft, paddingRight ,
        borderLeft and borderRight.**.

        - That means

          - ```js
             actualWidth = totalWidth
            				- (paddingLeft + paddingRight)
            				- (BorderLeft + BorderRight)

            actualWidth = 300 - (15 + 15) - (5 + 5) = 260 (px)
            ```

    - whole box Height is 200 **including paddingTop, paddingBottom, borderTop
      and paddingBottom.**. - That means

      - ```js
        	actualHeight = totalHeight
        				  - (paddingTop + paddingBottom)
        				  - (BorderTop + BorderBottom)

        	actualWidth = 200 - (15 + 15) - (5 + 5) = 160 (px)

        ```

- **10.What do you min by below selector ?**

  - `div, p {background-color:red}`
    - Select all the **DIV and P** tag and apply background color red property.
  - `div p {background-color:red}`
    - Select all the p tag and then filter out tag which have parent div and
      then apply background style.
  - `div ~ p {background-color:red}`

    - Select all p tag which is after the `</div> ` tag and apply background
      color red.
    - ```css
      <div>
      	<p>this is 1</p>
      	<p>this is 2</p>
      </div>
      <span>x</span>
      <p>this is 3</p>
      <p>this is 4</p>
      <div>
      	<p>this is 5</p>
      </div>

      # output: "This is 3" and "this is 4" have background color red.

      ```

  - `div + p {background-color:red}`

    - Select element P which is directly after the div tag. and aplly background
      color property
    - ```css
      <div>
      	<p>this is 1</p>
      	<p>this is 2</p>
      </div>
      <p>this is 3</p>
      <p>this is 4</p>
      <div>
      	<p>this is 5</p>
      </div>

      # output: "This is 3" have background color red.
      ```

  - `div > p {background-color:red}`

    - Select all p tag which is under the div tag.
    - ```css
      <div>
      	<p>this is 1</p>
      	<p>this is 2</p>
      </div>
      <p>this is 3</p>
      <p>this is 4</p>
      <div>
      	<p>this is 5</p>
      </div>

      # output: "This is 1","This is 2" and "This is 5" have background color red.
      ```

- **11. What is flex box**

  - [best article by css tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- **12. What is priorty in CSS?**

  - Important > Inline >id nesting > id > class nesting > class > tag nesting >
    tag.
  - [source](https://www.c-sharpcorner.com/UploadFile/0d183d/priority-of-css-values-for-an-html-document/)

- **13. css position property**
  - absolute
  - relative
  - static
  - fixed
  - sticky
- **14. Box sizing property**

  - **Content-box:** The default width and height values apply to the element's
    content only. The padding and border are added to the outside of the box.
  - **Padding-box:** Width and height values apply to the element's content and
    its padding. The border is added to the outside of the box. Currently, only
    Firefox supports the padding-box value.
  - **Border-box:** Width and height values apply to the content, padding, and
    border.

- **15. Can you name the four types of @media properties?**

  - 1.  All → It’s the default property. Used for all media-type devices.
  - 2.  Screen → Used for computer screen, mobile screen.
  - 3.  Print → Used for printers.
  - 4.  Speech → Used for screen readers.

- **16. How do I restore the default value of a property?**

  - The keyword initial can be used to reset it to its default value.

- **17. ### Difference between CSS grid vs flexbox**
  - CSS Grid Layout is a two-dimensional system, meaning it can handle both
    columns and rows. Grid layout is intended for larger-scale layouts which
    aren’t linear in design.
  - Flexbox is largely a one-dimensional system (either in a column or a row).
    Flexbox layout is most appropriate to the components of an application.

##### Refrence :- https://www.interviewbit.com/css-interview-questions/

#### Thanks for reading! Did I miss anything? And you want to add more question ? Make a pull request on [easycode repo](https://github.com/MohitSojitra/easy-code) , i love to merge it.

### Have a question? Send me a direct message on Linkdin, and we'll figure it out:)
