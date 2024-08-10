function getValue() {
  const firstInt = Number(document.querySelector(".firstNumber").value);
  const secondInt = Number(document.querySelector(".secondNumber").value);

  return { firstInt, secondInt };
}

function clearValue() {
  document.querySelector(".firstNumber").value = "";
  document.querySelector(".secondNumber").value = "";
}

function reset() {
  clearValue();
  document.querySelector(".result").classList.remove("alert");
  document.querySelector(".result").textContent = "Итого: ";
}

function plus() {
  const data = getValue();

  const result = data.firstInt + data.secondInt;

  document.querySelector(".int").textContent = result.toString();

  clearValue();
}

function minus() {
  const data = getValue();

  const result = data.firstInt - data.secondInt;

  document.querySelector(".int").textContent = result.toString();

  clearValue();
}

function times() {
  const data = getValue();

  const result = data.firstInt * data.secondInt;

  document.querySelector(".int").textContent = result.toString();

  clearValue();
}

function divided() {
  const data = getValue();

  if (data.secondInt === 0) {
    document.querySelector(".result").classList.add("alert");
    document.querySelector(".result").textContent = "На 0 делить нельзя :)";
  } else {
    if (data.firstInt % data.secondInt === 0) {
      const result = data.firstInt / data.secondInt;
      document.querySelector(".int").textContent = result.toString();
    } else {
      const result = data.firstInt / data.secondInt;
      document.querySelector(".int").textContent = result.toPrecision(2);
    }
  }

  clearValue();
}
