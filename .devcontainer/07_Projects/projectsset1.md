# Project related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

```javascript
console.log("firoz")

const buttons = document.querySelectorAll('.button');
//console.log(buttons);
const body = document.querySelector('body');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```
## project 2 solution

``` javascript


```

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2);
    //show the results
    results.innerHTML = `<span>${bmi}</span>`;
  }

  // results.innerHTML = `${height}`;
  // results.innerHTML = `${weight}`;
});





## project solution code 

```Javascript
const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleDateString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```