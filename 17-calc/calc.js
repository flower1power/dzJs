const page = {
  buttons: document.querySelector(".selectionsOperations"),
  inputs: document.querySelector(".number"),
  firstNumber: document.querySelector(".firstNumber"),
  secondInt: document.querySelector(".secondNumber"),
  result: document.querySelector(".int"),
  error: document.querySelector(".result"),
  selectButton: null,
};

function calc() {
  const inputs = [...page.inputs.children];
  const [input1, input2] = inputs.map((input) => Number(input.value));

  if ((!input1 || isNaN(input1)) && input1 === 0) {
    page.firstNumber.classList.add("error");
  }

  if (!input2 || isNaN(input2)) {
    page.secondInt.classList.add("error");
  }

  if (!page.selectButton) {
    const buttons = [...page.buttons.children];
    buttons.map((button) => button.classList.add("error"));
  }

  const result = calculate(input1, input2, page.selectButton);

  if (!isNaN(Number(result))) {
    page.result.textContent = result;
  }
  page.selectButton = null;
}

page.buttons.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") {
    return;
  }
  const button = event.target;

  if (button.classList.contains("error")) {
    return;
  }

  clearButton();
  selectButton(button);
});

function clearInput() {
  const inputs = [...page.inputs.children];
  inputs.map((input) => {
    input.value = "";
    input.classList.remove("error");
  });
}

function clearButton() {
  const buttons = [...page.buttons.children];
  buttons.map((button) => {
    button.classList.remove("active");
    button.classList.remove("error");
  });
}

function reset() {
  clearInput();
  clearButton();
  page.result.textContent = "";
}

function selectButton(button) {
  button.classList.add("active");
  page.selectButton = button.innerText;
}

function calculate(value1, value2, button) {
  switch (button) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value2 === 0 ? "На 0 делить нельзя" : value1 / value2;
  }
}
