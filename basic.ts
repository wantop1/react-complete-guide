let age: number;
age = 20;

type Person = {
  name: string;
  age: number;
};

let person: Person;
let people: Person[];

let userName: string | string[];
userName = "Myname";
userName = ["Myname"];

let isInstructor: boolean;
isInstructor = true;

let hobbies: string[];
hobbies = ["coding", "game"];

function add(a: number, b: number) {
  return a + b;
}

function printUserInput(value: any) {
  console.log(value);
}

function insertItemToBegin<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const numberArray = [1, 2, 3];
let updatedArray = insertItemToBegin(numberArray, 0);
const stringArray = insertItemToBegin(["b", "c", "d"], "a");
