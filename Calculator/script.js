var buttons = document.querySelectorAll(".btn");
var clr = document.querySelector(".clr");
var output = document.querySelector(".output");
var display = document.querySelector(".display");

buttons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    display.value += buttons.value;
  });
});

clr.addEventListener("click", () => {
  display.value = "";
});

output.addEventListener("click", () => {
  display.value = eval(display.value);
});
