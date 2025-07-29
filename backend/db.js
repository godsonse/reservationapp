const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "reservation_app"
});

db.connect(err => {
  if (err) throw err;
  console.log("✅ MySQL connected...");
});

module.exports = db;