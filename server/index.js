const express = require("express");
const app = express();

//app.use(cors())
app.use(express.json());
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Monalisamishra:MDYlL3MKtGxQa59a@cluster0.7zrfpkj.mongodb.net/monalisaMishra_db"
);

//.....................for connect frontend with backend............//
const cors = require("cors");
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
//..................................................................//

//.............................REGISTER........................//
const User = require("./models/User");
app.post("/register", async (req, res) => {
  //   res.json('okkk')
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});

//.............................lOGIN........................//
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const salt = bcrypt.genSaltSync(10);
const secretKey = "mona@lisa";

app.post("/login", async (req, res) => {
  //   res.json('okkk')
  const { username, password } = req.body;
  try {
    const userDoc = await User.findOne({
      username,
    });
    const passwordOk = bcrypt.compareSync(password, userDoc.password);
    if (passwordOk) {
      jwt.sign({ username, id: userDoc._id }, secretKey, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json("ok");
      });
    } else {
      res.status(400), json("wrong credential");
    }

    //res.json(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});

//..................................Profile........................//
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secretKey, {}, (err, info) => {
    res.json(info);
  });
  //res.json(req.cookies);
});
//.......................Logout.........................//
app.post("/logout", (res, req) => {
  res.cookie("token"," ").json("ok");
});

//mongodb+srv://Monalisamishra:MDYlL3MKtGxQa59a@cluster0.7zrfpkj.mongodb.net/monalisaMishra_db//

app.get("/test", (req, res) => {
  res.json("test ok");
});
app.listen(4000);
