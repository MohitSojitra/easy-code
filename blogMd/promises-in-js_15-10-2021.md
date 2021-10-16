---
title: Promises in JavaScript
description:
  A promise in JavaScript is an object that may produce a single value upon
  completion (or failure) of an asynchronous operation. It works as a proxy for
  a value not necessarily known at the time when the promise was created.
  Promises allow you to attach callback handlers to handle the future
  asynchronous success value or failure reason.
blogImage: promise.jpg
author: Mohit Sojitra
authorImage: MohitSojitra.jpeg
slug: promises-in-js_15-10-2021
date: 15-10-2021
---

## 🚀 Introduction to Promises in JavaScript

A promise in JavaScript is an object that may produce a single value upon
completion (or failure) of an asynchronous operation. It works as a proxy for a
value not necessarily known at the time when the promise was created. Promises
allow you to attach callback handlers to handle the future asynchronous success
value or failure reason.

## 📲What is a Callback?

Since JavaScript is a single-threaded asynchronous programming language,
callback functions are used to make it work as an asynchronous programming
language. Here is an example of setTimeout() function callback:

```js
setTimeout(() => {
  console.log('Hey M😄hit!,I waited 2 seconds.')
}, 2000)
```

In the example above, setTimeout() waits for two seconds and then calls the
function we pass into it. This function is referred to as the callback function.
So callbacks are basically just the name of a convention for using JavaScript
functions.

Callbacks are good from a performance perspective. Unlike most of the functions
which immediately return some value, functions with callbacks take some time to
produce a result. Generally, callbacks are used for time-consuming tasks such as
downloading files, reading files, sending emails, fetching data from a database,
etc.

## 🤙 Callback Hell

Now let's imagine a scenario where you want to wait another two seconds after
the first callback has finished, and do something. Your code will look like the
following:

```js
setTimeout(() => {
  console.log('Hey M😄hit!, I waited 2 seconds.')
  setTimeout(() => {
    console.log('Hey M😄hit!, I waited another 2 seconds.')
  }, 2000)
}, 2000)
```

And now if you want to do something after the second callback has finished, you
will get another nested callback:

Nested callbacks (functions within functions) make it different to maintain and
scale the code. In the code above, we have three levels of nested functions, one
for each setTimeout() call. Having an application with tens of nested callbacks
will make the developers live hell to update or even understand the code. Such a
situation is referred to as callback hell.

That's where the JavaScript promises are helpful.

## 🎭 JavaScript Promises

Promises in JavaScript are very similar to the promises you make in your daily
life, a kind of assurance that something will be done in the future. A
JavaScript promise is an object which can be returned synchronously from an
asynchronous function.

Promises are not meant to replace the callbacks. Instead, they simplify the
chaining of functions, making it easier to read and maintain the code. A promise
can be in one of the following states:

- fulfilled - The action associated with the promise completed successfully.
- rejected - The action related to the promise failed.
- pending - Initial state, neither fulfilled nor rejected.
- settled - The promise is not pending (either fulfilled or rejected). A pending
  promise can either be resolved (fulfilled) with a value or rejected with a
  reason. Once settled, a promise can not be resettled.

## 👨‍🍳 Creation of Promises

Let us look at the syntax of creating a new promise:

```js
new Promise( /_ executor _/ (resolve, reject) => {});
```

The Promise API constructor accepts a function called executor. The executor
function accepts two arguments: resolve and reject, which are also functions.
The executor function is invoked immediately by the Promise creator, passing
resolve and reject functions. If the asynchronous operations are completed
successfully, the expected value is returned by calling the resolve function. If
an error is thrown in the executor function, the reason is passed on by calling
the reject function.

Enough talk, let us create a simple promise from setTimeout() and then use it to
log the message:

```js
const wait = ms => new Promise((resolve, reject) => setTimeout(resolve, ms))
wait(2000).then(() => console.log('Hey M😄hit!, I waited 2 seconds.'))
// Hey M😄hit!, I waited 2 seconds.
```

Once the promise is created, we can add callback handlers for when the callback
is completed, using then() and catch() methods of the promise. Now let us create
another promise which is randomly resolved or rejected:

```js
const wait = ms =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (Math.random() >= 0.5) {
        resolve('Hey M😄hit!, Promise is completed.')
      } else {
        reject('Hey M😄hit!, Promise is rejected.')
      }
    }, ms),
  )

wait(2000)
  .then(value => console.log(value))
  .catch(err => console.error(err))
```

## Promise.all()

Promise.all() method is useful to execute multiple promises in parallel, and
waits until all of them are ready. It takes an array of promises as an input and
returns a single promise, that resolves when all of the promises get resolved or
any one of them gets rejected.

```js
// sum of two numbers
const sum = (a, b) => new Promise(resolve => resolve(a + b))

// absolute number
const abs = num => new Promise(resolve => resolve(Math.abs(num)))

// Promise.all
Promise.all([sum(2, 6), abs(-15)]).then(result => console.log(result))
// [8, 15]
```

## Error Handling

Any exception thrown in the promise executor function will cause the
Promise.prototype.then() function to be invoked, with a reason as the argument.
We can pass a callback handler to this method to handle the error:

```js
const promise = new Promise((resolve, reject) => {
  throw new Error('Promise is rejected.')
})

promise.then(() => console.log('Success!')).catch(err => console.error(err))
```

## Conclusion

JavaScript promises simplify the nesting of callbacks, thus making it easier to
write a code that is easier to maintain and understand. They provide a clear and
consistent way to handle callbacks. Multiple promises can be chained together to
consume the results of one promise by another.

If you want to learn more, check out the guide on async/await which is the
latest standard (introduced in ES8) to write asynchronous functions in
JavaScript.

#### Thanks for reading! Did I miss anything? Did you found any other best practices ? Have a question? Send me a direct message on Linkdin, and we'll figure it out :)
