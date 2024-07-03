const form = document.querySelector('form');
// this uncase will give you empty
// const  height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerText = `please give me a valid height `;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerText = `please give me a valid weight `;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //result
    let category = '';
    if (bmi < 18.6) {
      category = 'you are under weight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = 'your weight is normal';
    } else if (bmi > 24.9) {
      category = 'you weight is overweight';
    }
    results.innerHTML = ` your bmi is :<span> ${bmi} </span> <br><br> your bmi category is: <span> ${category} </span> `;
  }
});
