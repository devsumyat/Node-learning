
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
   var sql = "SELECT * FROM customers";
 con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});