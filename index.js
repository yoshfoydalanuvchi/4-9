// 1.
function ikkagaKopaytir(arr) {
  arr.forEach((num) => {
    console.log(num * 2);
  });
}

// 2.
function kattaHarf(arr) {
  arr.forEach((word) => {
    console.log(word.toUpperCase());
  });
}

// 3.
function beshQosh(arr) {
  const yangiArr = [];
  arr.forEach((num) => {
    yangiArr.push(num + 5);
  });
  console.log(yangiArr);
}

const sonlar2 = [10, 20, 30, 40];
beshQosh(sonlar2);

// 4.
function talabaMalumot(talabalar) {
  talabalar.forEach((talaba) => {
    console.log(`${talaba.name}: ${talaba.grade}`);
  });
}

const talabalar = [
  { name: "Ali", grade: 85 },
  { name: "dali", grade: 92 },
  { name: "Husan", grade: 78 },
];
talabaMalumot(talabalar);

// map metodiga oid masalalar

// 1.
function ikkaGaKopaytiMap(arr) {
  return arr.map((num) => num * 2);
}

console.log(ikkaGaKopaytiMap([1, 2, 3, 4]));

// 2.
function kattaHarfMap(arr) {
  return arr.map((word) => word.toUpperCase());
}

console.log(kattaHarfMap(["salom", "dunyo"]));

// 3.
function beshQoshMap(arr) {
  return arr.map((num) => num + 5);
}

console.log(beshQoshMap(sonlar2));

// 4.
function bahoOshir(talabalar) {
  return talabalar.map((talaba) => ({
    name: talaba.name,
    grade: talaba.grade + 10,
  }));
}

console.log(bahoOshir(talabalar));

// filter metodiga oid masalalar

// 1.
function juftSonlar(arr) {
  return arr.filter((num) => num % 2 === 0);
}

const sonlar3 = [1, 2, 3, 4, 5, 6];
console.log(juftSonlar(sonlar3));

// 2.
function uzunSozlar(arr) {
  return arr.filter((word) => word.length > 5);
}

const sozlar2 = ["apple", "banana", "goldenApple"];
console.log(uzunSozlar(sozlar2));

// 3.
function kattaYosh(arr) {
  return arr.filter((age) => age > 18);
}

const yoshlar = [12, 17, 18, 19, 21];
console.log(kattaYosh(yoshlar));

// 4.
function yuqoriBaho(talabalar) {
  return talabalar.filter((talaba) => talaba.grade > 80);
}

const talabalar2 = [
  { name: "Ali", grade: 85 },
  { name: "Vali", grade: 72 },
  { name: "Hasan", grade: 90 },
  { name: "Olim", grade: 77 },
];
console.log(yuqoriBaho(talabalar2));

// find metodiga oid masalalar

// 1.
function onKatta(arr) {
  return arr.find((num) => num > 10);
}

const sonlar4 = [4, 9, 11, 2, 18];
console.log(onKatta(sonlar4));

// 2.
function yuqoriBahoTalaba(talabalar) {
  return talabalar.find((talaba) => talaba.grade > 85);
}

const talabalar3 = [
  { name: "Ali", grade: 80 },
  { name: "Vali", grade: 90 },
  { name: "Hasan", grade: 78 },
  { name: "Olim", grade: 85 },
];
console.log(yuqoriBahoTalaba(talabalar3));

// some/every metodiga oid masalalar

// 1.
function musbatSon(arr) {
  return arr.some((num) => num > 0);
}

const sonlar5 = [-1, -2, 3, -4];
console.log(musbatSon(sonlar5));

// 2.
function uzunSoz(arr) {
  return arr.some((word) => word.length > 5);
}

const sozlar3 = ["cat", "dog", "elephant"];
console.log(uzunSoz(sozlar3));

// 3.
function hammaMuabat(arr) {
  return arr.every((num) => num > 0);
}

const sonlar6 = [1, 2, 3, 4];
console.log(hammaMuabat(sonlar6));

// 4.
function hammaBahoYuqori(talabalar) {
  return talabalar.every((talaba) => talaba.grade > 50);
}

const talabalar4 = [
  { name: "Ali", grade: 60 },
  { name: "dali", grade: 70 },
  { name: "Husan", grade: 80 },
];
console.log(hammaBahoYuqori(talabalar4));
