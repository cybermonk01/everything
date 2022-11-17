const auth = require("./middleware/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // mandate
    if (!(firstName && lastName && email && password)) {
      res.status(404).send(" All fields are required");
    }
    // check emailing

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      res.status(400).send(" User already exists");
    }

    //  password hashfunc

    const encryptedPassword = await bcrypt.hash(password, 10);
    //  create a new entry in db

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: encryptedPassword,
    });

    // create a token and send it to user
    const token = jwt.sign({ id: user._id, email }, "shhhh", {
      expiresIn: "2h",
    });
    user.token = token;
    user.password = null;
    res.status(201).json(user);

    // send token
  } catch (err) {
    console.log(err);
    console.log("error in resposne");
  }
});

app.post("login", async (req, res) => {
  try {
    // collect info from the frontend
    const { email, password } = req.body;

    // validate
    if (!(email && password)) {
      res.send(401).send("email and password is jaroori");
    }

    // check user in db

    const user = await User.findOne({ email });
    if (user && (await bcrypt(password, user.password))) {
      // if user exists with the email and passsword matches then create a token

      const token = jwt.sign({ id: user._id, email }, "shhhh", {
        expiresIn: "2h",
      });

      user.password = null; //we dont have to send the password so make it null
      user.token = token; //ek aur field banake hum token jo create hua hai usko hum user ke saath save kara denge

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user,
      });
    }

    res.sendStatus(400).send("email or password doesnt match");
  } catch (err) {
    console.log(err);
    console.log("error in response by login");
  }
});
app.get("/dashboard", (req, auth, res) => {
  //every tim ewhen we login the req is a new object as the token is added

  res.send("Welcome to dashboard!");
});

app.get("/profile", (req, auth, res) => {
  // access to req.user = {id,email}
  // base on id, query findOne according to id
  // send a json response with all data
});

exports.module = app;
