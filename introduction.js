// Objetos
const user = {
  name: "Leonardo",
  age: 23,
  address: {
    street: "Test",
    number: 123,
  },
};

// metodo IN para verifica se existe uma chave ali dentro
const hasName = "name" in user;
console.log("hasName ===", hasName);
// result => hasName === true

// Object Keys
console.log(Object.keys(user));
// result => [ 'name', 'age', 'address' ]

// Object Values
console.log(JSON.stringify(Object.values(user)));
// result => ["Leonardo",27,{"street":"Test","number":123}]

// Object entries
console.log(JSON.stringify(Object.entries(user)));
// result => [["name","Leonardo"],["age",27],["address",{"street":"Test","number":123}]]

// Desestruturacao
const { address, age } = user;

console.log(JSON.stringify({ address, age }));

// Rest operator
const { name, ...rest } = user; // object

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second, ...restArray] = array;

console.log(first, second);

// Optional Chaining
const user2 = {
  name: "Leonardo",
  age: 23,
  address: {
    street: "Rua test",
    showFullName() {
      return "ok";
    },
  },
};

// Utilizar quando precisa lidar com objetos que podem ser nullos
console.log(user2.address?.street);
console.log(user2.address?.showFullName?.() ?? "Nao informado");

// map, filter, every, some, find, findeIndex, reduce

// every -> return true if every items of condition is true
const arrayTest = [1, 2, 3, 4, 5];

const everyItemsIsNumber = arrayTest.every((item) => typeof item === "number"); // true

// some -> equal every, but return the first item that passed in condition
arrayTest.push("leonardo");
const someItemIsNotNumber = arrayTest.some((item) => typeof item === "string");

// reduce
const sum = arrayTest.reduce((acc, item) => {
  return acc + item;
}, 0);

// Promises
const sumToNumbers = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(a + b);
    }, 2000);
  });
};

sumToNumbers(1, 5)
  .then((sum) => console.log(sum))
  .catch((err) => console.log(err));

// const testPromise = await sumToNumbers(5, 5);
// console.log("testPromise ===", testPromise);

// fetch API
fetch("https://api.github.com/users/leohb07")
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
