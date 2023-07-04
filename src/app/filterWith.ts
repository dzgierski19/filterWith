import { data, dataInterface } from "../../data";

export const filterWith = (obj: dataInterface[], phrase: string | number) => {
  const phraseToString = phrase.toString();
  if (phraseToString.length <= 2) {
    return [];
  }
  return obj.filter((value) => filterObject(value, phraseToString));
};

const filterObject = (Obj: dataInterface, phrase: string): boolean => {
  const objectValues = Object.values(Obj);
  const phraseToRegExp = new RegExp(phrase);
  for (let i = 0; i < objectValues.length; i++) {
    if (phraseToRegExp.test(objectValues[i])) {
      return true;
    }
    if (
      typeof objectValues[i] === "object" &&
      filterObject(objectValues[i], phrase)
    ) {
      return true;
    }
  }
  return false;
};

const filterWith2 = (obj: dataInterface[], phrase: string | number) => {
  const phraseToString = phrase.toString();
  if (phraseToString.length <= 2) {
    return [];
  }
  return obj.filter((value) => someObject(value, phraseToString));
};

const someObject = (Obj: Object, phrase: string): boolean => {
  const objectValues = Object.values(Obj);
  const phraseToRegExp = new RegExp(phrase);
  return objectValues.some((element) => {
    if (typeof element !== "object") {
      return phraseToRegExp.test(element);
    }
    return someObject(element, phrase);
  });
};

console.log(filterWith2(data, "brown"));

const result1 = filterWith(data, "Sheppard");
console.log(result1);

const result2 = filterWith(data, "nisi");
console.log(result2);

const result3 = filterWith(data, "Delacruz Acevedo");
console.log(result3);
