const bottomLeftText = document.getElementById('bottom-left-text');
const centerText = document.getElementById('center-text');
const cvc = document.getElementById('cvc');
const leftside = document.getElementById('leftside');
const rytside = document.getElementById('rytside');

//selecting input boxes
const nameInput = document.getElementById('name');
const cardNo = document.getElementById('number');
const month = document.getElementById('month');
const year = document.getElementById('year');
const backNo = document.getElementById('backNo');
const date = document.querySelector('.date');
const button = document.getElementById('button');

//selecting form and error
const form = document.getElementById('form');
const error = document.querySelector('.error');


// now, the event listeners.
nameInput.addEventListener('keydown', runEvent);
cardNo.addEventListener('keydown', runEvent4);
month.addEventListener('keydown', runEvent1);
year.addEventListener('keydown', runEvent2);


backNo.addEventListener('keydown', runEvent5);

//now the functions.
function runEvent(e){   
    bottomLeftText.innerHTML = e.target.value;    
}

function runEvent1(e){
    leftside.innerHTML = e.target.value + '/';
}

function runEvent2(e){   
    rytside.innerHTML = e.target.value;   
}

function runEvent4(e){    
    centerText.innerHTML = e.target.value;
}

function runEvent5(e){    
    cvc.innerHTML = e.target.value;
}

function runEvent(e){    
    bottomLeftText.innerHTML = e.target.value;
}
