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

let a = 0;
let b = 0;
let chosenOperator = "";
let result = 0;

const screenTop = document.querySelector(".screen--top");
const screenBottom = document.querySelector(".screen--bottom");

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
        if (button.innerHTML == "0" && chosenOperator == "/") {
          alert("You can't divide by 0");
        } else if (a == 0 && b == 0 && chosenOperator == "") {
          a = button.innerHTML;
          displayBottom(a);
        } else if (a != 0 && b == 0 && chosenOperator == "") {
          a = a + button.innerHTML;
          displayBottom(a);
        } else if (a != 0 && chosenOperator != "" && result == 0) {
          if (b == 0) {
            b = button.innerHTML;
            displayBottom(b);
          } else {
            b += button.innerHTML;
            displayBottom(b);
          }
        } else if (a != 0 && b != 0 && chosenOperator != "" && result != 0) {
          a = result + button.innerHTML;
          displayBottom(a);
          result = 0;
        } else if (a != 0 && b == 0 && chosenOperator != "" && result != 0) {
          result = 0;
          b = button.innerHTML;
          displayBottom(b);
        }

        console.table({ a, b, chosenOperator, result });

        break;

      case ".":
        numberToAddDecimal = screenBottom.innerHTML;
        if (numberToAddDecimal.includes(".")) {
          break;
        }

        switch (numberToAddDecimal) {
          case a:
            a = a + ".";
            displayBottom(a);
            break;

          case b:
            b = b + ".";
            displayBottom(b);
            break;
          default:
            result = String(result) + ".";
            displayBottom(result);
            break;
        }

        break;

      case "CLEAR":
        clear();
        break;

      case "DELETE":
        numberToBeDelete = screenBottom.innerHTML;
        console.log(numberToBeDelete + "is the number to be deleted");

        if (numberToBeDelete == 0) {
          clear();
        } else {
          switch (numberToBeDelete) {
            case a:
              a = a.slice(0, -1);
              displayBottom(a);
              break;

            case b:
              b = b.slice(0, -1);
              displayBottom(b);
              break;
            default:
              result = String(result).slice(0, -1);
              displayBottom(result);
              break;
          }
        }
        break;

      case "+":
      case "-":
      case "*":
      case "/":
        if (a != 0 && b == 0) {
          a = Number(a);
          chosenOperator = button.innerHTML;
          displayTop(a + chosenOperator);
        } else if (a != 0 && b != 0 && result == 0) {
          result = operate(Number(a), Number(b), chosenOperator);
          a = result;
          b = 0;
          result = 0;

          displayTop(a + button.innerHTML);
          displayBottom(a);
          chosenOperator = button.innerHTML;
          console.table({ a, b, chosenOperator, result });
        } else if (a != 0 && b != 0 && result != 0) {
          a = Number(result);
          b = 0;
          chosenOperator = button.innerHTML;
          displayTop(a + chosenOperator);
        }
        console.table({ a, b, chosenOperator, result });
        break;

      case "=":
        if (a != 0 && b != 0) {
          displayTop(a + chosenOperator + b + " =");
          result = operate(a, b, chosenOperator);

          Number.isInteger(result) ? result : result.toFixed(2);
          displayBottom(result);
        }

        console.table({ a, b, chosenOperator, result });
      default:
        break;
    }
  });
});

function displayTop(number) {
  screenTop.innerHTML = number;
}

function displayBottom(result) {
  screenBottom.innerHTML = result;
}

function clear() {
  a = 0;
  b = 0;
  chosenOperator = "";
  result = 0;

  displayTop("0");
  displayBottom(result);
}
