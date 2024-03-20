const display = document.getElementById("calculator-display");
const buttons = document.getElementsByClassName("btn");
const backspace = document.getElementById("backspace");
const historyButton = document.querySelector(".history");
const arithmeticOperators = ["+", "-", "%", "×", "÷", ".", ")"];
const advanceArithmetic = ["sin", "cos", "tan", "log", "√"];
let currentValue = "";
let lastOperation = "";
let history = [];
let result;

// Add Expression to History Array
const addToHistory = (currentValue) => {
  history.push(currentValue);
};

const evaluateResult = () => {
  const replaceMap = {
    "×": "*",
    "÷": "/",
    "%": "*0.01",
    sin: "Math.sin",
    cos: "Math.cos",
    π: "Math.PI",
    log: "Math.log10",
    tan: "Math.tan",
    "√": "Math.sqrt",
  };

  let expression = currentValue;
  let convertedValue = currentValue;
  Object.entries(replaceMap).forEach(([key, value]) => {
    const regex = new RegExp(key, "g");
    convertedValue = convertedValue.replace(regex, value);
  });

  try {
    result = eval(convertedValue);
    currentValue = expression + " = " + result.toString();
    display.value = currentValue;
    addToHistory(currentValue);
    lastOperation = "=";
  } catch (error) {
    currentValue = "ERROR";
    display.value = currentValue;
    lastOperation = "=";
  }
};

// Event listener for button click
for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener("click", () => {
    const value = button.innerText;
    try {
      //handle AC Button
      if (value === "AC") {
        currentValue = "";
        display.value = currentValue;
        lastOperation = "";
      } else if (
        //Handle Cases where display is cleared
        (currentValue === "" && arithmeticOperators.includes(value)) ||
        (currentValue === "ERROR" && arithmeticOperators.includes(value)) ||
        (currentValue === "" && value === "=")
      ) {
        display.value = "";
      } else if (
        //handle cases where consecutive arithmetic operators are entered
        (arithmeticOperators.includes(
          currentValue.charAt(currentValue.length - 1)
        ) &&
          currentValue.charAt(currentValue.length - 1) !== ")" &&
          arithmeticOperators.includes(value)) ||
        (currentValue.charAt(currentValue.length - 1) === "(" &&
          arithmeticOperators.includes(value))
      ) {
      } else if (value === "=") {
        //Evaluate the result when "=" button is clicked
        if (lastOperation === "=") {
          display.value = currentValue;
        } else {
          evaluateResult();
        }
      } else if (
        // Handle cases where the result is used in the next operation
        lastOperation === "=" &&
        arithmeticOperators.includes(value) &&
        value !== ")" &&
        result !== "ERROR"
      ) {
        currentValue = result + value;
        display.value = currentValue;
      } else if (
        // Handle cases where the result is used in the next operation and next operation starts with ")"
        lastOperation === "=" &&
        arithmeticOperators.includes(value) &&
        value === ")" &&
        result !== "ERROR"
      ) {
        currentValue = result;
        display.value = currentValue;
      } else if (
        //Handle cases where advance arithmetic functions are enterd
        advanceArithmetic.includes(value) &&
        currentValue !== "ERROR"
      ) {
        currentValue += value + "(";
        display.value = currentValue;
      } else {
        if (lastOperation === "=") {
          currentValue = "";
          lastOperation = "";
        }
        result = "";
        currentValue += value;
        display.value = currentValue;
      }
      lastOperation = value;
    } catch (error) {
      currentValue = "ERROR";
      display.value = currentValue;
    }
  });
}

// Event listener for backspace button
backspace.addEventListener("click", function () {
  if (currentValue !== "") {
    if (currentValue === "ERROR") {
      currentValue = "";
      display.value = currentValue;
    }
    currentValue = currentValue.slice(0, -1);
    display.value = currentValue;
  }
});

// Event listener for history button
historyButton.addEventListener("click", () => {
  let historyText = "";
  for (let i = 0; i < history.length; i++) {
    historyText += history[i] + "\n";
  }
  display.value = historyText;
});

// Tooltip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
