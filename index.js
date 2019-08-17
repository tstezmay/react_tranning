const User = require('./models/user');
const Login = require('./service/authen');
const calculator = require('./service/calculator');
const DatabeseConnect = require('./databeseConnect');

// let username = 'bas';
// console.log(username);
// console.log(User);
// Login('admin','password');
console.log(calculator.plus(2,4));
console.log(calculator.subtract(5,4));

let resultPlus = require('./service/calculator').plus(40,3);
console.log(resultPlus);

let addResult = calculator.addOne(44);
console.log(addResult);
let db = new DatabeseConnect();
db.connect();
db.disconnect();