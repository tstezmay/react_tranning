let login = function(username, password) {
  if(username === 'admin' && password === 'password') {
    console.log('pass');
  } else {
    console.log('fail');
  }
}
// login('addd','ddd');
module.exports = login;