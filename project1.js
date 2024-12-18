const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const heading = document.querySelector('.h2_heading');


buttons.forEach((button) => {
//   console.log(button);
  button.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
      heading.style.color = 'white';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
      heading.style.color = 'black';

    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
        heading.style.color = 'yellow';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
      heading.style.color = 'purple';
    }
  });
});