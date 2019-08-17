module.exports = class DatabaseConnect {
  constructor (connectionString) {
    this.connectionString = connectionString;
    this.dbName = '';
  }

  connect () {
    console.log('ok.');
  }

  disconnect () {
    console.log('disconnected.');
  }
}