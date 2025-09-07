// buggy.js - intentionally buggy code to practice debugging
const btn = document.getElementById('incrementBtn');
let count = 0;

btn.addEventListener('click', function() {
  // BUG: tries to get element with id 'count' but HTML id is 'countDisplay'
  const display = document.getElementById('countDisplay');
  count++;
  display.innerText = count;
});
