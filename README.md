# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments]


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![](images/screenshot.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com](https://github.com/adebimpecole/ping-coming-soon-page-master.git)
- Live Site URL: [Add live site URL here](https://snazzy-torrone-beb5b8.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

I learned how to ramove the default validation on my form and how to put my own custom validation. I also learnt how to make use of icons in my document and how to give color to placeholders.

```html
 <form id="realdeal" novalidate>
    ...
</form>
```
```css
::-webkit-input-placeholder { 
  ...
}
:-moz-placeholder { 
  ...
}
::-moz-placeholder { 
  ...
}
:-ms-input-placeholder {
  ...
}
```


### Continued development

I want to focus more on custom form validation.

### Useful resources

- [Example resource 1](https://stackoverflow.com/questions/3090369/disable-validation-of-html5-form-elements) - This helped me to disable the default validation on my form
- [Example resource 2](https://stackoverflow.com/questions/36206691/display-error-message-below-input-field) - This is showed me how to put an error message below my input field.


## Author

- Website - [Cole Mary](https://snazzy-torrone-beb5b8.netlify.app/)
- Frontend Mentor - [@adebimpecole](https://www.frontendmentor.io/profile/adebimpecole)
- Twitter - [@adecole02](https://twitter.com/adecole02)
