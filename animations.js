// Select the element you want to animate
const element = document.querySelector('.my-element');

// Create the animation
anime({
  targets: element,
  translateX: 250,
  duration: 1000,
  easing: 'easeInOutQuad'
});
