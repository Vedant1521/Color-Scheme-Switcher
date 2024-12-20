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

//(Same working :-)
// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     // Use 'button' to refer to the current button
//     if (button.id === 'grey') {
//       body.style.backgroundColor = button.id; // this is just body.style.backgroundColor ='grey';
//     }
//     if (button.id === 'white') {
//       body.style.backgroundColor = button.id; // this is just body.style.backgroundColor ='white';
//       heading.style.color = 'black'; 
//     }
//     if (button.id === 'blue') {
//       body.style.backgroundColor = button.id; // this is just body.style.backgroundColor ='blue';
//       heading.style.color = 'yellow';
//     }
//     if (button.id === 'yellow') {
//       body.style.backgroundColor = button.id; // this is just body.style.backgroundColor ='yellow';
//       heading.style.color = 'purple';
//     }
//   });
// });
