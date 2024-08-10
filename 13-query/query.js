//"search=Вася&take=10"
const param = { search: "Вася", take: 10 };
const param2 = { search: "Петя", take: 10, max: 10 };
const param3 = { search: "Маша", take: 10, max: 100, str: "1" };
const param4 = { search: "Маша" };

const query = (params) =>
  Object.entries(params)
    .map((p) => p.join("="))
    .join("&");

console.log(query(param));
console.log(query(param2));
console.log(query(param3));
console.log(query(param4));
