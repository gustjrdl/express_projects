// app.js
import express from "express";
import mysql from "mysql2/promise";

const app = express();
const port = 3000;

const pool = mysql.createPool({
  hst: "localhost",
  user: "sbsst",
  password: "sbs123414",
  database: "a9",
  waitForconnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get("/todos", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM todo ORDER BY id DESC");
  console.log("rows", rows);
  res.json(rows);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
