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
        case '+':
            return plus(a, b);
        case '-':
            return minus(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}