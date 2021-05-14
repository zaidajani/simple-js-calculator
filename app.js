const numberOne = document.getElementById('initial');
const numberTwo = document.getElementById('second');
let result = document.getElementById('results');
const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
  const first = Number(numberOne.value);
  const second = Number(numberTwo.value);
  const results = first + second;
  result.innerText = results;
});