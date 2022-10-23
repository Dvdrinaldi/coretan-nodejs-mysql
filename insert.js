const db = require("./db_config");

const sql = `INSERT INTO customers (name, address) 
            VALUES ('Starbucks', 'Lombok Epicentrum Mall')`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");
});