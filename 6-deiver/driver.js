const hasLicence = true;
const age = 19;
const isDrunk = false;
console.log(
  `Могу вести машину: ${hasLicence && age > 18 && !isDrunk ? "Может" : "Не может"}`,
);
