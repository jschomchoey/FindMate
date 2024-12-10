require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "findmate",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
  console.log("Connected to database.");
});

// Start the server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

// Register
app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [username, email, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).send({ message: "User already exists or failed" });
      }
  
      const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.status(201).send({ message: "User registered successfully!", token });
    });
  });
  

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).send({ message: "Database error", error: err });

    if (results.length === 0) {
      return res.status(401).send({ message: "Invalid email or password." });
    }

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid email or password." });
    }

    try {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.status(200).send({ message: "Login successful", token });
    } catch (error) {
      res.status(500).send({ message: "Error generating token", error });
    }
  });
});
