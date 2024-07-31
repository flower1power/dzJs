// Так как мы проверяем карту, то не берем во внимание  длину !== 16
const card = "4561-1213-4367-2612";
const card2 = "5062-8212-3456-7892";

const checkLuna = (card) => {
  const normalize = card.replaceAll("-", "");
  
  if (normalize.length !== 16) {
    return false;
  }
  
  let sum = 0;

  for (let i = 0; i < normalize.length; i++) {
    let item = Number(normalize[i]);

    if (isNaN(item) === true) {
      return false;
    }

    if (i % 2 === 0) {
      item = item * 2;

      if (item > 9) {
        item = item - 9;
      }
    }

    sum = sum + item;
  }

  return sum % 10 === 0;
};

console.log(checkLuna(card));
console.log(checkLuna(card2));
