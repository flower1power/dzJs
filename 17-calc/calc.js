function getValue() {
  const firstInt = document.querySelector(".firstNumber");
  const secondInt = document.querySelector(".secondNumber");

  // Проверяем, заполнены ли поля
  if (firstInt.value === "") {
    firstInt.classList.add("error");
  } else {
    firstInt.classList.remove("error");
  }

  if (secondInt.value === "") {
    secondInt.classList.add("error");
  } else {
    secondInt.classList.remove("error");
  }

  return {
    firstInt: Number(firstInt.value),
    secondInt: Number(secondInt.value),
    valid: firstInt.value !== "" && secondInt.value !== "",
  };
}

function clearValue() {
  document.querySelector(".firstNumber").value = "";
  document.querySelector(".secondNumber").value = "";
}

function reset() {
  clearValue();
  document.querySelector(".result").classList.remove("alert");
  document.querySelector(".result").textContent = "Итого: ";
  document.querySelector(".firstNumber").classList.remove("error");
  document.querySelector(".secondNumber").classList.remove("error");
}

function plus() {
  const data = getValue();

  if (data.valid) {
    const result = data.firstInt + data.secondInt;
    document.querySelector(".int").textContent = result.toString();
    clearValue();
  }
}

function minus() {
  const data = getValue();

  if (data.valid) {
    const result = data.firstInt - data.secondInt;
    document.querySelector(".int").textContent = result.toString();
    clearValue();
  }
}

function times() {
  const data = getValue();

  if (data.valid) {
    const result = data.firstInt * data.secondInt;
    document.querySelector(".int").textContent = result.toString();
    clearValue();
  }
}

function divided() {
  const data = getValue();

  if (data.valid) {
    if (data.secondInt === 0) {
      document.querySelector(".result").classList.add("alert");
      document.querySelector(".result").textContent = "На 0 делить нельзя :)";
    } else {
      const result = data.firstInt / data.secondInt;
      document.querySelector(".int").textContent =
        data.firstInt % data.secondInt === 0
          ? result.toString()
          : result.toPrecision(2);
    }
    clearValue();
  }
}
