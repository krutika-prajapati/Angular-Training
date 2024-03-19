const display = document.getElementById("calcDisplay");
const buttons = document.getElementsByClassName("btn");

let currentValue = "";
let lastOperation = "";

function evaluateResult() {
  const replaceMap = {
    "×": "*",
    "÷": "/",
    "%": "*0.01",
    sin: "Math.sin",
    cos: "Math.cos",
    "∛": "Math.cbrt",
    π: "Math.PI",
    log: "Math.log10",
    e: "Math.E",
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
    lastOperation = "=";
  } catch (error) {
    console.log(error);
    currentValue = "ERROR";
    display.value = currentValue;
  }
}

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener("click", function () {
    const value = button.innerText;
    try {
      if (value == "AC") {
        currentValue = "";
        display.value = currentValue;
        lastOperation = "";
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

// Tooltip initialization
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
