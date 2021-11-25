---
title: Call, Bind and Apply in JavaScript
description:
  Call, Bind and Apply method is very usefull in javascript. And it is very
  favourite question of the interviewer. so now in this blog i'm try my best to
  explain all the concept in my point of view.

blogImage: call_bind_apply.jpg
author: Mohit Sojitra
authorImage: MohitSojitra.jpeg
slug: call-bind-apply-in-js_23-11-2021
date: 23-11-2021
---

# Call, Bind And Apply in javascript.

Call, Bind and Apply method is very usefull in javascript. And it is very
favourite question of the interviewer. so now in this blog i'm try my best to
explain all the concept in my point of view.

- **What you learn in this blog ?**
  - Clear understanding about call, bind and apply
  - How we use call, bind and apply
  - why we use call, bind and apply

### Here we explain whole concept with questioning and answering just like [Higher order function](https://blog.mohitsojitra.tech/blog/higher-order-function_11-10-2020).

## Lets Start

- Q1. What is out put of following code ?

  - ```js
    let x = {
    	fName : "Mohit",
    	lName : "Sojitra",
    	getFullName : function (){
    		console.log(`firstName : ${this.fName} , lastName : ${this.lName}`)
    	}
    }
    x.getFullName()

    - // might be your answer is firstName : Mohit, lastName: Sojitra
    ```

- Q2. Now think about below code.
  - ```js
    let x = {
      fName: 'Mohit',
      lName: 'Sojitra',
      getFullName: function () {
        console.log(`firstName : ${this.fName} , lastName : ${this.lName}`)
      },
    }
    x.getFullName()
    let y = {
      fName: 'John',
      lName: 'Doe',
    }
    ```
  - if i want to print full name of y object then what you do ? same as above
    code like this
  - ```js
    let y = {
      fName: 'John',
      lName: 'Doe',
      getFullName: function () {
        console.log(`firstName : ${this.fName} , lastName : ${this.lName}`)
      },
    }
    ```
  - now think above approch, if we do this, then it create a new copy of
    getFullName function in y object right ?
  - Yes, suppose we have to create 10000 object like this, at that time what
    happen we create 10000 copy function so it's not efficinent.
- **Q3. So what is the solution ?**
  - sol1
    - ```js
      const getFullName = function (obj) {
        console.log(`firstName : ${obj.fName} , lastName : ${obj.lName}`)
      }
      getFullName(x)
      getFullName(y)
      ```
  - sol2 (Function borrowing)
    - ```js
      x.getFullName.call(y) // output firstName : John , lastName : Doe
      ```
    - In here we borrow the function from the "x object" and use that function
      for "y object". this concept call function borrowing.
  - sol 3
    - ```js
      x.getFullName.apply(y) //output firstName : John , lastName : Doe
      ```
    - we can do same with apply also.
  - sol 4
    - ```js
      let getName = x.getFullName.bind(y)
      getName() // output firstName : John , lastName : Doe
      ```
- **So what is diffrence between call, bind , apply ?**
  - lets see below scenario
    - ```js
      let x = {
        fName: 'Mohit',
        lName: 'Sojitra',
        getFullName: function (city, state) {
          console.log(
            `firstName : ${this.fName} , lastName : ${this.lName} , city : ${city} , state : ${state}`,
          )
        },
      }
      ```
  - syntax of **"CALL"**
    - ```js
      anyFunction.call(context, comaSaperatedArguments)
      ```
    - call function accept first context argument and other are coma seperated
      inputs.
      - Example
        - ```js
          x.getFullName.call(y, 'Surat', 'Gujarat')
          ```
        - here first argument context, that means our goal is print "y object"
          data, so context is "y object"
        - after that coma saperated inputs, here we want two more input which is
          city and state, so we can pass like above example.
        - **NOTE :** When we use call method at that time, it instantly call
          that method.
  - Syntax of **"APPLY"**
    - ```js
      anyFunction.apply(context, arrayOfArguments)
      ```
    - APPLY function accept first context argument and other are Array of
      inputs.
      - Example
        - ```js
          x.getFullName.apply(y, ['Surat', 'Gujarat'])
          ```
        - here first argument is context, that means our goal is print “y
          object” data, so that context is “y object”
        - after that Array of inputs, here we want two more input which is city
          and state, so we can pass like above example.
        - **NOTE :** When we use APPLY method at that time, it instantly call
          that method.
        - **NOTE :** There is no diffrence between CALL and APPLY, only
          diffrence is in CALL we pass arguments as comaSeperated and In APPLY
          pass argument is ARRAY form.
  - Syntax of **"BIND"**
    - ```js
      let newFunction = x.getFullName.bind(y, comaSaperatedArgument)
      ```
    - Bind function accept first context argument and other are
      comaSeperatedInputs and its return the new function.
      - Example
        - ```js
          let getInfo = x.getFullName.bind(y, 'Surat', 'Gujarat')
          getInfo() // firstName : John , lastName : Doe , city : Surat , state : Gujarat
          ```
        - here first argument is context, that means our goal is print “y
          object” data, so that context is “y object”
        - after that coma saperated inputs, here we want two more input which is
          city and state, so we can pass like above example.
        - Now bind method return new method, which has that data which we pass
          in argument and context.
- **so when we use call,apply and bind ?**
  - Answer : answer is simple, if we want to get instant out put at that time we
    use call and apply, And if we want that in future we will use this function
    at that time we use bind method.

#### Thanks for reading! Did I miss anything? Have a question? Send me a direct message on Linkdin, and we'll figure it out :)
