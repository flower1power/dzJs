const crypto = (password) => {
  if (!password || !password.length) {
    return NaN;
  }

  const itemArray = String(password).split("");
  const left = itemArray.slice(0, password.length / 2).reverse();
  const right = itemArray.slice(password.length / 2).reverse();
  const cryptoPass = left.join("") + right.join("");
  return cryptoPass;
};

const check = (pass, reference) => {
  if (!pass || !reference) {
    return false;
  }
  return crypto(pass) === reference;
};
