---
title: Complete Guide of Higher order function
description:
  step by step guide of higher order function um is simply dummy text of the
  printing and typesetting industry. Lorem Ipsum has been the industry's
  standard dummy text ever since the 1500s
blogImage: main.jpeg
author: Mohit Sojitra
authorImage: MohitSojitra.jpeg
slug: higher-order-function_11-10-2020
date: 11-10-2021
---

## What is Higher Order function and why we use ?

## Definition : A higher-order function is a function that takes one or more functions as arguments

Here you simply read a once this definition, at the and of the blog you return
here and one more time read this definition. I damn sure you definitely see
difference between before you read blog and after the reading of the whole blog.

## Q1. If i say please make an function which return 10 square then what you do ?

### May be your answer is

```js
function tenSquare() {
  return 10 * 10
}

console.log(tenSquare())
```

## Q2. Now what happen if i say i want to nine square function ?

### May be your answer is

```js
function tenSquare() {
  return 10 * 10
}

function nineSquare() {
  return 9 * 9
}
```

## Q3. Now if i say i want to get 125 square then?

### May be you do above function re write below the 9 square function. but this is right way to give answer? No. because it break the coding rules. can you guess which rule ?

#### Yes it break dry rule, which say that don't repeat your self. then what is the solution, I damn sure you already know what is solution

Yes we can pass the argument in the function and return square of the parameter
of the function just like below.

```js
function squareIt() {
  return n * n
}
```

## Q4. Now we go to one more step ahead, now i say you make one more function which take an array argument return square of those array

### May be your answer is

```js
function squareOfTheArray(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i])
  }
  return result
}

let ans = squareOfTheArray([1, 2, 3])
console.log(ans)
```

## Q5. Now make one more function which add 3 in every item of the array

### May be your answer is

```js
function squareOfTheArray(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i])
  }
  return result
}

function addThreeInEveryItem(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + 3)
  }
}

let ans = addThreeInEveryItem([1, 2, 3])
console.log(ans)
```

## Q6. Now if i say make one more function which multiplyEvery item with 10 then what you do ?

#### Are you Understand the Problem here ? You might notice that here we also do same thing multiple time which is

- we declare the function, pass the argument array,
- create a "result" array and iterate the parameter array "arr" and make some
  operation on that and put resultant value in "result" array and finlay we
  return the "result" array.

**_That means we here also break the rule of DRY (DO NOT REPEAT YOUR SELF)._**

- Then what is the solution ?

- The solution is higher order function.

- You do same thing like below.

```js
function doSomethingWithArray(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(fun(arr[i]))
  }
  return result
}

function squareOfTheArray(input) {
  return input * input
}

function addThreeInEveryItem(input) {
  return input + 3
}

let ans3 = doSomethingWithArray([1, 2, 3], squareOfTheArray)
let ans3 = doSomethingWithArray([1, 2, 3], addThreeInEveryItem)

let ans3 = addThreeInEveryItem([1, 2, 3], item => {
  return item * 10
})
console.log(ans)
```

In first situation we clearly see the the difference between theSquareOfTheArray
, addThreeInEveryItem and multiplyByTenWithEveryItem function.

The difference is in whole function only one line is change which is the
operational line, ex squareTheItem, add 3 and multiply 10. so we create a
another function which only do the operational instruction and pass that
function as a argument.

So What we do here we make a function which is doSomeThingWithArray and pass the
argument, one is array and another is function definition.

#### Now its time to re read the definition.
