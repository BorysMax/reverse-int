module.exports = function reverse (n) {
  if (n < 0) n *= -1;
  let res = (""+n).split("").map(Number).reverse().join("");
  return res;
}
