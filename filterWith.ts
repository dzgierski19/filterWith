import { data, dataInterface } from "./data";

const filterWith = <T>(obj: dataInterface[], phrase: T) => {
  if (String(phrase).length <= 2) {
    return [];
  }
  return obj.filter((value) => filterObject(value, phrase));
};

const filterObject = <T>(Obj: dataInterface, phrase: T): boolean => {
  const phraseToString = String(phrase);
  const phraseToRegExp = new RegExp(phraseToString);
  const objectValues = Object.values(Obj);
  for (let i = 0; i < objectValues.length; i++) {
    if (phraseToRegExp.test(objectValues[i])) {
      return true;
    }
    if (typeof objectValues[i] === "object") {
      if (filterObject(objectValues[i], phrase)) {
        return true;
      }
    }
  }
  return false;
};

const result1 = filterWith(data, "Jensen");
console.log(result1);

// const result2 = filterWith(data, "nisi");
// console.log(result2);

// const result3 = filterWith(data, "Delacruz Acevedo");
// console.log(result3);
