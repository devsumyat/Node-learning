
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE demo (id INT AUTO_INCREMENT PRIMARY KEY, address VARCHAR(255))";
 con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});