const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: 5432,
});

async function initDB() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS students(
      id SERIAL PRIMARY KEY,
      name TEXT,
      age INT
    )
  `);
}

initDB();

app.post("/students", async (req, res) => {
  const { name, age } = req.body;

  const result = await pool.query(
    "INSERT INTO students(name, age) VALUES($1,$2) RETURNING *",
    [name, age]
  );

  res.json(result.rows[0]);
});

app.get("/students", async (req, res) => {
  const result = await pool.query("SELECT * FROM students");
  res.json(result.rows);
});

app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});