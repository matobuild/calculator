function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return plus(a, b);
    case "-":
      return minus(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}


let displayValue = "0";
let a = 0;
let b = 0;
let chosenOperator = "";

const screenInput = document.querySelector(".screen--input");
const button = document.querySelectorAll("button");

button.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.innerHTML);
    switch (button.innerHTML) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (displayValue == "0") {
          displayValue = button.innerHTML;
        } else {
          displayValue += button.innerHTML;
        }
        display(displayValue);
        break;

      case ".":
        // fix later
        break;      

      case "CLEAR":
        clear();
        break;

      case "DELETE":
        //delete last number
        displayValue = displayValue.slice(0, -1);
        display(displayValue);
        break;

        case "+":
        case "-":
        case "*":
        case "/":
        a = displayValue;
        displayValue = a + button.innerHTML;
        display(displayValue);
            
                
        
            //perform operation
        break;
        case "=":

      default:
        break;
    }
  });
});

function display(number) {
  screenInput.innerHTML = number;
}

function clear() {
  displayValue = 0;
  display(displayValue);
}
