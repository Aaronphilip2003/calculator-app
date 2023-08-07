const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = '';
let prevInput = '';

function clear() {
  currentInput = '';
  operator = '';
  prevInput = '';
  updateDisplay();
}

function updateDisplay() {
  display.value = currentInput;
}

function calculate() {
  const num1 = parseFloat(prevInput);
  const num2 = parseFloat(currentInput);

  switch (operator) {
    case '+':
      currentInput = (num1 + num2).toString();
      break;
    case '-':
      currentInput = (num1 - num2).toString();
      break;
    case '*':
      currentInput = (num1 * num2).toString();
      break;
    case '/':
      currentInput = (num1 / num2).toString();
      break;
    default:
      break;
  }

  prevInput = '';
  operator = '';
  updateDisplay();
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.innerText;

    if (!isNaN(value) || value === '.') {
      currentInput += value;
    } else if (value === 'C') {
      clear();
    } else if (value === '=') {
      calculate();
    } else {
      operator = value;
      prevInput = currentInput;
      currentInput = '';
    }

    updateDisplay();
  });
});
