import { data, dataInterface } from "./data";

const filterWith = (obj: any[], phrase: string | number) => {
  if (String(phrase).length <= 2) {
    return [];
  }
  return obj.filter((value) => filterObject(value, phrase));
};

const filterObject = <T>(Obj: any, phrase: T): boolean => {
  const phraseToString = String(phrase);
  const phraseToRegExp = new RegExp(phraseToString);
  const objectKeys = Object.keys(Obj);
  const objectValues = Object.values(Obj);
  for (let i = 0; i < objectValues.length; i++) {
    if (phraseToRegExp.test(Obj[objectKeys[i]])) {
      return true;
    }

    if (typeof Obj[objectKeys[i]] === "object") {
      if (filterObject(Obj[objectKeys[i]], phrase)) {
        return true;
      }
    }
  }

  return false;
};

const result1 = filterWith(data, "Sheppard");
console.log(result1);

const result2 = filterWith(data, "nisi");
console.log(result2);

const result3 = filterWith(data, "Delacruz Acevedo");
console.log(result3);
