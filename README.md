# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [Add solution URL here](https://github.com/xiaoyoufung/Tip-calculator-app)
- Live Site URL: [Add live site URL here](https://xiaoyoufung.github.io/Tip-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

How to use DOM js in the real project and it's very challenging on the css part.

To see how you can add code snippets, see below:

```html
<div id="btn-container">
          <button class="tips" value="5">5%</button>
          <button class="tips" value="10">10%</button>
          <button class="tips" value="15">15%</button>
          <button class="tips" value="25">25%</button>
          <button class="tips" value="50">50%</button>
          <input type="text" placeholder="Custom" id="custom-tip">
</div>
```
```css
.proud-of-this-css {
  outline: 2.5px solid var(--Strongcyan);
}
```
```js
custTip.addEventListener("blur", e => {
    if(e.target.value != "") {
        tipAmount = (parseInt(e.target.value))/100;
        changeTotal();
    }
})
```

### Continued development

Would like to come back and applied some frame work like REACT with this project after i have learn it.

### Useful resources

- [Example resource 1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) - This helped me for check the input from the user.
- [Example resource 2](https://www.w3schools.com/jsref/jsref_parseint.asp) - This is an amazing article which helped me finally understand how to change user's input from string to int.


## Author

- GitHUb - [@xiaoyoufung](https://github.com/xiaoyoufung)
- Frontend Mentor - [@UnknownFS](https://www.frontendmentor.io/profile/UnknownFS)

## Acknowledgments

I would like to recommend you to never give up on every project you're on whether it is small or big project never give up on it. If you're burn out just take a break and then comeback whenever you want just don't give up on it and don't give up on yourself.
