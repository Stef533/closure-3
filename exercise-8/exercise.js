function multiplyByTwo(value) {
  let number = 2;
  return function inner(param) {
    return param * number;
};
}

const result = multiplyByTwo()(4);

console.log(result);



