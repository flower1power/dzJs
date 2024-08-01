//"search=Вася&take=10"
const param = { search: "Вася", take: 10 };
const param2 = { search: "Петя", take: 10, max: 10 };
const param3 = { search: "Маша", take: 10, max: 100, str: "1" };
const param4 = { search: "Маша" };

const query = (param) => {
  let res = "";

  for (const key in param) {
    res += `${key}=${param[key]}&`;
  }

  return res.slice(0, -1);
};

console.log(query(param));
console.log(query(param2));
console.log(query(param3));
console.log(query(param4));
