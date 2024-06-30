const adressLat = 3;
const adressLong = 4;

const positionLat = 7;
const positionLong = 1;

const Lat2 = Math.pow(adressLat - positionLat, 2);
const Long2 = Math.pow(adressLong - positionLong, 2);

const result = Math.sqrt(Lat2 + Long2);
