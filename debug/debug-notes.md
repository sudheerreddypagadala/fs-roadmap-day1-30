# Debug Notes — Day 3

## 1) Steps to reproduce (exact)
1. Open `debug/index.html` in browser (or use Live Server).
2. Open DevTools → Console.
3. Click the "Increment" button.
4. Observe the error message in the Console.

## 2) Error observed (paste console output)
buggy.js:9 Uncaught TypeError: Cannot set properties of null (setting 'innerText')
    at HTMLButtonElement.<anonymous> (buggy.js:9:21)
(anonymous)	@	buggy.js:9

﻿

## 3) DevTools evidence (attach screenshots)
- `images\Screenshot 2025-09-07 162927.png` — screenshot showing console error.
- `images\Screenshot 2025-09-07 163402.png` — screenshot showing a breakpoint / call stack.
- `images\Screenshot 2025-09-07 163456.png` — screenshot showing the DOM where the element id exists.

## 4) Root cause
- in the buggy.js file the dom is trying the get element with id "count" but the actual id is "countDisplay"

## 5) Fix applied (show before and after)
- Before (buggy snippet):
```js
const display = document.getElementById('count');
- After 
const display = document.getElementById('countDisplay');
