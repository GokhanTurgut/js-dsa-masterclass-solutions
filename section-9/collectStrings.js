function collectStrings(object) {
  const objectCopy = JSON.parse(JSON.stringify(object));
  const stringArray = [];
  function helper(obj) {
    for (let prop in obj) {
      if (typeof obj[prop] === "string") {
        stringArray.push(obj[prop]);
      } else if (typeof obj[prop] === "object") {
        helper(obj[prop]);
      }
    }
  }
  helper(objectCopy);
  return stringArray;
}
