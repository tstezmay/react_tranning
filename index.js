const User = require('./models/user');
const Login = require('./services/authen');
const calculator = require('./services/calculator');
const DatabeseConnect = require('./databeseConnect');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ name: 'bas' });
});
app.get('/users', (req, res) => {
  res.json([{ name: 'bas' },{name: 'bas2'}]);
});

app.listen(3000, () => { console.log('running at 3000') });

// let username = 'bas';
// console.log(username);
// console.log(User);
// Login('admin','password');
// console.log(calculator.plus(2,4));
// console.log(calculator.subtract(5,4));

// let resultPlus = require('./services/calculator').plus(40,3);
// console.log(resultPlus);

// let addResult = calculator.addOne(44);
// console.log(addResult);
// let db = new DatabeseConnect();
// db.connect();
// db.disconnect();