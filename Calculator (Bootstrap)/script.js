const display = document.getElementById("calcDisplay");
const buttons = document.getElementsByClassName("btn");

let currentValue = "";

function evaluateResult() {
  const convertedValue = currentValue
    .replace("×", "*")
    .replace("÷", "/")
    .replace("%", "*0.01")
    .replace("sin", "Math.sin")
    .replace("cos", "Math.cos")
    .replace("∛", "Math.cbrt")
    .replace("π", "Math.PI")
    .replace("log", "Math.log10")
    .replace("e", "Math.E")
    .replace("tan", "Math.tan")
    .replace("√", "Math.sqrt");

  try {
    const result = eval(convertedValue);
    currentValue = result.toString();
    display.value = currentValue;
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
      } else if (value == "=") {
        evaluateResult();
      } else {
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
