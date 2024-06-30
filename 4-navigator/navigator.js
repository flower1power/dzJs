const adressLat = 3;
const adressLong = 4;

const positionLat = 7;
const positionLong = 1;

const Lat2 = (adressLat - positionLat) ** 2;
const Long2 = (adressLong - positionLong) ** 2;

const result = (Lat2 + Long2) ** (1 / 2);
console.log(result);
