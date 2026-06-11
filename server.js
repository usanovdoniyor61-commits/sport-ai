const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// HOME PAGE
app.get("/", (req, res) => {
  res.send("⚽ AI Sport Server ishlayapti!");
});

// SAMPLE MATCHES API
app.get("/matches", (req, res) => {
  res.json([
    { team1: "Barcelona", team2: "Real Madrid", time: "20:00" },
    { team1: "Man City", team2: "Arsenal", time: "22:00" }
  ]);
});

// SIMPLE PREDICTION (FAKE AI)
app.get("/predict", (req, res) => {
  const teams = ["Win 🟢", "Draw ⚪", "Lose 🔴"];
  const result = teams[Math.floor(Math.random() * teams.length)];

  res.json({
    prediction: result,
    message: "AI taxmin (demo)"
  });
});

// START SERVER
app.listen(PORT, () => {
  console.log("AI server ishladi:", PORT);
});
