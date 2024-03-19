const display = document.getElementById("calculator-display");
const buttons = document.getElementsByClassName("btn");
const backspace = document.getElementById("backspace");
const historyButton = document.querySelector(".history");
const arithmeticOperators = ["+", "-", "%", "×", "÷", "."];
const numberPattern = /[0-9(]$/;

let currentValue = "";
let lastOperation = "";
let history = [];

const addToHistory = (currentValue) => {
  history.push(currentValue);
  console.log(history);
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
    const result = eval(convertedValue);
    currentValue = expression + " = " + result.toString();
    display.value = currentValue;
    addToHistory(currentValue);
    lastOperation = "=";
  } catch (error) {
    console.log(error);
    currentValue = "ERROR";
    display.value = currentValue;
    lastOperation = "=";
  }
};

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener("click", function () {
    const value = button.innerText;
    try {
      if (value == "AC") {
        currentValue = "";
        display.value = currentValue;
        lastOperation = "";
      } else if (
        (currentValue === "" && arithmeticOperators.includes(value)) ||
        (currentValue === "ERROR" && arithmeticOperators.includes(value))
      ) {
        display.value = "";
      } else if (
        (arithmeticOperators.includes(
          currentValue.charAt(currentValue.length - 1)
        ) &&
          arithmeticOperators.includes(value)) ||
        (currentValue.charAt(currentValue.length - 1) == "(" &&
          arithmeticOperators.includes(value))
      ) {
      } else if (value == "=") {
        evaluateResult();
      } else {
        if (lastOperation === "=") {
          currentValue = "";
          lastOperation = "";
        }
        currentValue += value;
        display.value = currentValue;
      }
    } catch (error) {
      console.log(error);
      currentValue = "ERROR";
      display.value = currentValue;
    }
  });
}

backspace.addEventListener("click", function () {
  currentValue = currentValue.slice(0, -1);
  display.value = currentValue;
});

historyButton.addEventListener("click", () => {
  let historyText = "";

  for (let i = 0; i < history.length; i++) {
    historyText += history[i] + "\n";
  }

  display.value = historyText;
});

// Tooltip initialization
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
