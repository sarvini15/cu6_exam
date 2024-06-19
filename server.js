const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const URL = "https://localhost:5000";

app.use(express.json());

// instruction: setup cors
const corsHandler = cors({
  origin: "*",
  methods: "GET,PUT,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: true,
  optionsSuccessStatus: 200,
});

// instruction: setup MongoDB Connection
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

// instruction: setup routes
const eventRoute = require("./routes/event");
const organizerRoute = require("./routes/organizer");


app.use("/event", eventRoute );
app.use("organizer", organizerRoute);

app.get("/", (req, res) => {
  res.send("Good luck with the exam!");
});

// Server listening
app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});
