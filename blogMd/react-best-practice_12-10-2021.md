---
title: 7 React Best Practices You Need to Follow in 2021
description:
  If you’re a frontend developer engaged in building highly interactive user
  interfaces, you’ve most likely got React in your toolkit. While working on
  your React-powered creations, you should be careful to do things in tune with
  the React best practices. This will help to keep your code better organized.

blogImage: best.jpg
author: Mohit Sojitra
authorImage: MohitSojitra.jpeg
slug: react-best-practice_12-10-2021
date: 12-10-2021
---

## 6 React Best Practices You Need to Follow in 2021 ?

If you’re a frontend developer engaged in building highly interactive user
interfaces, you’ve most likely got React in your toolkit. While working on your
React-powered creations, you should be careful to do things in tune with the
React best practices. This will help to keep your code better organized.

As you know, React is a library created by Facebook and it allows for
integration with many interesting components. In fact, any developer can create
their own components and make them accessible to the community.

Today, we take the topic head on and show you the most fundamental of the

## 🐛 1. Keep components small and function-specific

As we all know, with React, it’s possible to have huge components that execute a
number of tasks. But a better way to design components is to keep them small, so
that one component corresponds to one function. Ideally, a single component
should render a specific bit of your page or modify a particular behavior. There
are many advantages to this:

- Function-specific components can be standalone, which makes testing and
  maintenance easier.
- Each small component can be reused across multiple projects.
- Components executing general functions can be made available to the community.
- With smaller components, it’s easier to implement performance optimizations.
- It’s easier to update smaller components.
- Bigger components have to perform harder and may be difficult to maintain.

The balance between creating one concise component and creating multiple
function-specific components can vary from organization to organization. After
all, you can have as many components as you want, and recombine them in any way
you want to achieve the same end result.

## 🔁 3. Consolidate duplicate code – DRY your code

A common rule for all code is to keep it as brief and concise as possible.

It’s no different here too, since React best practices also instruct you to keep
code brief and precise. One way to do this is to avoid duplication – Don’t
Repeat Yourself (DRY).

You can achieve this by scrutinizing the code for patterns and similarities. If
you find any, it’s possible you’re repeating code and there’s scope to eliminate
duplication. Most likely, a bit of rewriting can make it more concise.

This relies heavily on the reusability principle in React. Let’s say you want to
add multiple buttons that contain icons, instead of adding the markup for each
button, you can simply use the IconButton component that we shown above. You
could even go further by mapping everything into an array.

```jsx
const buttons = ['facebook', 'twitter', 'youtube']

return (
  <div>
    {buttons.map(button => {
      return <IconButton onClick={doStuff(button)} iconClass={button} />
    })}
  </div>
)
```

## 📖4. Comment only where necessary

Attach comments to code only where necessary. This is not only in keeping with
React best practices, it also serves two purposes at the same time:

- It’ll keep code visually clutter free.
- You’ll avoid a potential conflict between comment and code, if you happen to
  alter the code at some later point in time.

## 🐫5. Use capitals for component names

If, like most folks, you’re using JSX (a JavaScript extension), the names of the
components you create need to begin with uppercase letters. For instance, you’ll
name components as SelectButton instead of selectbutton, or Menu instead of
menu. We do this so that JSX can identify them differently from default HTML
tags.

Earlier React versions maintained a list of all built-in names to differentiate
them from custom names. But as the list needed constant updating, that was
scrapped and capitals became the norm.

In case JSX is not your language of choice, you can use lowercase letters.
However, this may reduce the reusability of components beyond your project.

## 📁6. All files related to any one component should be in a single folder

Keep all files relating to any one component in a single folder, including
styling files.

If there’s any small component used by a particular component only, it makes
sense to keep these smaller components all together within that component
folder. The hierarchy will then be easy to understand – large components have
their own folder and all their smaller parts are split into sub-folders. This
way, you can easily extract code to any other project or even modify the code
whenever you want.

For instance, for the Form component, all pieces such as CSS files, icons,
images, tests and any other sub-components relating to Form should all reside in
the same folder. If you name files sensibly, and keep related files together
logically, you’ll not have any difficulty finding them later.

## 🔗7. Follow linting rules, break up lines that are too long

Linting is a process wherein we run a program that analyses code for potential
errors.

Mostly, we use it for language-related issues. But it can also fix many other
issues automatically, particularly code style. Using a linter in your React code
helps to keep your code relatively error- and bug-free

#### Thanks for reading! Did I miss anything? Did you found any other best practices ? Have a question? Send me a direct message on Linkdin, and we'll figure it out :)
