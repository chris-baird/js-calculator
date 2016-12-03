/*--- variables ---*/

var input, firstNum, op, result;
var displayEl = document.getElementById('display');

/*--- event listeners ---*/
document.getElementById('calc')
  .addEventListener('click', handleClick);






/*--- functions ---*/

function initialize () {
 input = '';
 firstNum = op = result = null;
 updateDisplay();
}

function updateDisplay(){
 var text = result || input || '0'
 text += input.includes('.') ? '' : '.';
 displayEl.textContent = text;
 if (result) {
 input = '';
 op = firstNum = result = null;
}
}



function handleClick(evt) {
  var clickedEl = evt.target
  if (clickedEl.id === 'display') return;
  switch (clickedEl.textContent) {
    case 'CA':
      initialize();
      break;
    case '+' :
      assignOp(add);
      break;
    case '←' :
      input = input.substr(0, input.length - 1);
      break;
    case '-' :
      assignOp(sub);
      break;
    case '÷' :
      assignOp(div);
      break;
    case '=' :
      if (!op || !input) return;
      result = op(parseFloat(firstNum), parseFloat(input));
      break;
    case '×' :
      assignOp(mult);
      break;
    case '.' :
      input += input.includes('.') ? '' : '.';
      break;
    default:
      input += clickedEl.textContent;
  }
  updateDisplay();
}

function assignOp(clickedOp) {
  if (!input) return;
  op = clickedOp;
  firstNum = input;
  input = '';
}






initialize();

/*-- operator */

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mult(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}


