const nums = [3, 6, 9, 2];

const filterArray = (array, fn, item) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const res = fn(array[i], item);
    if (res === false) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

const removeMoreElement = (num, item) => {
  return num > item;
};

const removeLessElement = (num, item) => {
  return num < item;
};

const removeElement = (num, item) => {
  return num === item;
};

const res = filterArray(nums, removeMoreElement, 5);

const res2 = filterArray(nums, removeLessElement, 5);

const res3 = filterArray(nums, removeElement, 9);
