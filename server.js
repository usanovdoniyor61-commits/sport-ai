const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🧠 AI PROGNOZ (oddiy real logic)
function predict(match) {
    const rand = Math.random();

    if (rand > 0.6) return `${match.home} yutadi ⚽`;
    if (rand > 0.3) return `Durang 🤝`;
    return `${match.away} yutadi ⚽`;
}

// 📡 LIVE MATCH API (demo)
app.get("/matches", (req, res) => {
    res.json([
        {home:"Barcelona", away:"Real Madrid", score:"2-1"},
        {home:"Man City", away:"Arsenal", score:"1-1"}
    ]);
});

// 🤖 AI PREDICTION API
app.post("/predict", (req, res) => {
    const match = req.body;
    const result = predict(match);
    res.json({prediction: result});
});

app.listen(3000, () => {
    console.log("AI server ishladi http://localhost:3000");
});
