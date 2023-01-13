# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshots

![](./screenshot.jpg)
![Finished desktop view of challenge](./images/finished_desktop.png)
![Finished mobile view of challenge](./images/finished_mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- TailwindCSS

### What I learned

My first thought looking through this challenge was this was a no-brainer flexbox problem... which it can be, but it felt like a really good
excuse to practice grid, which I have less experience with (as a Flexbox evangelist... it's a problem). While the desktop view was a simple 1fr grid,
I found the mobile view slightly more tricky, as the design spec clearly indicated that the header image would be significantly smaller than the body of the product card. For this part of the exercise I imagined how this would look on a production site, on which there would likely be several repeating cards - which made me realize that there was no way we could do a fr resize on this guy, so fixed pixel width it is! In a production environment I think I'd like to see an option to cut off text for the card, but this is a level one exercise, after all!

Final thoughts: The grid loves you, and you should love the grid.

### Continued development

I estimated this challenge would take me under an hour to complete, but it took a bit longer (around two hours!). Tailwind converts frequently cite upating the tailwind config file as a necessity for speedy development. While it did take me an unusually long time to actually get rolling on the project, I found it came together very quickly once the tailwind.config.js file was completed. I think it's a method I'd like to spend more time on, so next time I intend to implement layers (which I tend to avoid). My quest to enjoy Tailwind... continues?

### Useful resources

- [CSS-Tricks Almanac: grid-template-columns](https://css-tricks.com/almanac/properties/g/grid-template-columns/) - Even moreso than Flexbox, Grid has a really high barrier of entry. Aside from the usual Grid guide from css-tricks, this was a helpful reference for fixed sizing as well.

## Author

- Website - [My Github](https://github.com/melissafelch)
- Frontend Mentor - [@melissafelch](https://www.frontendmentor.io/profile/melissafelch)
