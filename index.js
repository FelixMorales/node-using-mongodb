import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const PORT = 4000;

mongoose
  .connect("mongodb://winhost:27017/productsdb", {useNewUrlParser: true, useUnifiedTopology: true})
  .then((conn) => {
    console.log('success');
    console.log(conn)
  })
  .catch((e) => {
    console.log("error");
    console.log(e)
  });

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send(`Store server running on port ${PORT}`));

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
