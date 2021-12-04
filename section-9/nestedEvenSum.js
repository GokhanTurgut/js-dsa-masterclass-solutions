function nestedEvenSum(object) {
  let sum = 0;

  function helper(obj) {
    for (let property in obj) {
      if (typeof obj[property] === "number" && obj[property] % 2 === 0)
        sum += obj[property];
      else if (typeof obj[property] === "object") helper(obj[property]);
    }
  }

  helper(object);

  return sum;
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

console.log(nestedEvenSum(obj1));
