const mysql = require('mysql2')


const dbConnection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'admin',
    database: 'testing',
    port: 'localhost:3306'
})

dbConnection.connect((err) => {
    if(err) {
      console.log('Database connection error: ' + err);
      return;
    }
    console.log('Database connected');
  })

module.exports = dbConnection;