const key = document.querySelector('.key');
key.addEventListener('click', turn);

function turn() {
  // declare variables
  const door = document.querySelector('.prize-door');
  const opening = document.querySelector('.opening');
  const prize = document.querySelector('.prize');
  const dispenser = document.getElementById('dispenser');

  let name = "";
  let random = Math.ceil(Math.random() * 6);

  // Hide elements to be faded in
  $(prize).hide();
  $('.container').hide();
  $('#sarah').hide();
  $('#deaz').hide();
  $('#jess').hide();
  $('#tam').hide(); 
  $('#sensei').hide();
  $('#lee-ann').hide();

  // Key transition added
  key.classList.add('turned');

  // Show random color ball and quote
  switch(random) {
    case 1:
      console.log(random);
      prize.classList.add('red');
      prize.classList.remove('orange', 'yellow', 'green', 'blue', 'purple');
      name = "#sarah";
      console.log(name, random);
      break;
    case 2:
      console.log(random);
      prize.classList.add('orange');
      prize.classList.remove('red', 'yellow', 'green', 'blue', 'purple');
      name = "#deaz";
      console.log(name, random);
      break;
    case 3:
      console.log(random);
      prize.classList.add('yellow');
      prize.classList.remove('orange', 'red', 'green', 'blue', 'purple');
      name = "#jess";
      console.log(name, random);
      break;    
    case 4:
      console.log(random);
      prize.classList.add('green');
      prize.classList.remove('orange', 'yellow', 'red', 'blue', 'purple');
      name = "#tam";
      console.log(name, random);
      break;
    case 5:
      console.log(random);
      prize.classList.add('blue');
      prize.classList.remove('orange', 'yellow', 'green', 'red', 'purple');
      name = "#sensei";
      console.log(name, random);
      break;
    case 6:
      console.log(random);
      prize.classList.add('purple');
      prize.classList.remove('orange', 'yellow', 'green', 'blue', 'red');
      name = "#lee-ann";
      console.log(name, random);
      break;
  };

  // Timing functions are brittle - I wanted to avoid callback hell - recalculate durations if changing -
  setTimeout(function() {
    opening.classList.remove('hidden');
  }, 0)
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
    $('#quote').fadeIn(2000);
  }, 9600);
};

// Fade out the twitter quote and fade in the dispenser 
function again() {
  $('#quote').fadeOut(1000);
  setTimeout(function() {
    $(dispenser).fadeIn(500);
  }, 3250);
};