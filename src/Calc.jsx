/////////////// Challenge 5 Create Simple Calculator App in React Js ////////////////

function add(a, b) {
  let add = a + b;
  return add;
}
function sub(a, b) {
  let sub = a - b;
  return sub;
}
function mult(a, b) {
  let mult = a * b;
  return mult;
}
function div(a, b) {
  let div = a / b;
  div = div.toFixed(2);
  return div;
}
export { add, sub, mult, div };