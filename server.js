const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(express.json());

app.use("/", express.static(__dirname + "/build"));
app.get("/", (req, res) => res.sendFile(__dirname + "/build/index.html"));

// const MONGODB_URL = 'mongodb+srv://LyuboShv:LyuboShv123@cluster0.jg4jz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/brewed-drinks-info-db" , {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});


const Drink = mongoose.model(
  "drinks",
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    name: String,
    drink: String,
    img: String,
    caffeine: Number,
    calories: Number,
    size: String,
    info: String,
    intensity: String
  })
);

app.get("/api/drinks", async (req, res) => {
  const drinks = await Drink.find({});
  res.send(drinks);
});

app.post("/api/drinks", async (req, res) => {
  const newDrink = new Drink(req.body);
  const savedDrink = await newDrink.save();
  res.send(savedDrink);
});

app.delete("/api/drinks/:id", async (req, res) => {
  const deletedDrink = await Drink.findByIdAndDelete(req.params.id);
  res.send(deletedDrink);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));