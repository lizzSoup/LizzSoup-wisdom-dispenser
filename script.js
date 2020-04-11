// global variable and event listener
const plate = document.querySelector('.plate');
plate.addEventListener('click', turn);


  // turn() begins -----------------
function turn() {
  // declare scoped variables
  const key = document.querySelector('.key');
  const door = document.querySelector('.prize-door');
  const prize = document.querySelector('.prize');
  const dispenser = document.getElementById('dispenser');
  const cite = document.getElementById('cite');
  let name = "";
  let random = Math.ceil(Math.random() * 6);

  // Hide elements to be faded in
  $(prize).hide();
  $('#sarah').hide();
  $('#deaz').hide();
  $('#jess').hide();
  $('#tam').hide(); 
  $('#sensei').hide();
  $('#lee-ann').hide();

  // Key transition added
  key.classList.add('turned');

  // Select random color ball and twitter quote to be displayed
  switch(random) {
    case 1:
      prize.classList.add('red');
      prize.classList.remove('orange', 'yellow', 'green', 'blue', 'purple');
      name = "#sarah";
      break;
    case 2:
      prize.classList.add('orange');
      prize.classList.remove('red', 'yellow', 'green', 'blue', 'purple');
      name = "#deaz";
      break;
    case 3:
      prize.classList.add('yellow');
      prize.classList.remove('orange', 'red', 'green', 'blue', 'purple');
      name = "#jess";
      break;    
    case 4:
      prize.classList.add('green');
      prize.classList.remove('orange', 'yellow', 'red', 'blue', 'purple');
      name = "#tam";
      break;
    case 5:
      prize.classList.add('blue');
      prize.classList.remove('orange', 'yellow', 'green', 'red', 'purple');
      name = "#sensei";
      break;
    case 6:
      prize.classList.add('purple');
      prize.classList.remove('orange', 'yellow', 'green', 'blue', 'red');
      name = "#lee-ann";
      break;
  };
  // turn() ends -----------------

  // Timing functions are brittle - These timeouts are not nested to avoid callback hell - recalculate durations if changing
  setTimeout(function(){
    $('.one, .two, .three, .four, .five, .seven, .eight, .nine, .ten, .eleven, .twelve, .thirteen, .fifteen, .sixteen, .seventeen, .eighteen, twenty, .twenty1, twenty2, .twenty3, twenty4, .twenty5').effect('shake', 700);}, 2500);
  setTimeout(function() {
    key.classList.remove('turned');
  }, 1500);
  setTimeout(function() {
    door.classList.add('prize-door-open');
  }, 3500);
  setTimeout(function() {
    $(prize).fadeIn(1600);
  }, 4000);
  setTimeout(function() {
    door.classList.remove('prize-door-open');
  }, 7000);
  setTimeout(function() {
    $(dispenser).fadeOut(200);
  }, 8500);
  setTimeout(function() {
    $(name).fadeIn(100);
    $(cite).fadeIn(5000);
    $('#quote').fadeIn(5000);
  }, 9600);
};

// Fade out the twitter quote and fade in the dispenser 
function again() {
  $(cite).fadeOut(1000);
  $('#quote').fadeOut(1000);
  setTimeout(function() {
    $(dispenser).fadeIn(1500);
  }, 3250);
};