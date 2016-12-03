/*--- variables ---*/

var input, firstNum, Op, result;
var displayEl = document.getElementById('displayEl');


/*--- event listeners ---*/






/*--- functions ---*/

function initialize() {
  input = '';
  firstNum = oP = result = null;
  updateDisplay();
}

function updateDisplay() {
  var text = result || input || '0.';
  displayEl.textContent = text;

}

initialize();
