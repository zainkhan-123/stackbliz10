const zain = document.querySelectorAll('.button');
const body = document.querySelector('body');

zain.forEach(function (yellow) {
  console.log(yellow);
  yellow.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id == 'yellow') {
      body.style.backgroundColor = 'red';
    } else {
      body.style.backgroundColor = 'green';
    }
    if (e.target.id == 'blu') {
      body.style.backgroundColor = 'black';
    } else {
      body.style.backgroundColor = 'pink';
    }
  });
});
// this is the code for the color changer
