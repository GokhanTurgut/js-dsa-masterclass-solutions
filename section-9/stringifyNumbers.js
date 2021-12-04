function stringifyNumbers(object) {
  const obj = JSON.parse(JSON.stringify(object)); // For deep copy

  for (let prop in obj) {
    if (typeof obj[prop] === "number") {
      obj[prop] = obj[prop].toString();
    } else if (typeof obj[prop] === "object") {
      obj[prop] = stringifyNumbers(obj[prop]);
    }
  }
  return obj;
}

const obj1 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj1));
