const { Person } = require('./person');

require("./modules/fs");

const person = new Person('ChagasFernando');

console.log(person.sayMyName())