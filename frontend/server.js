import dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

import express from "express";
import bcrypt from "bcrypt";
import passport from "passport";
import flash from "express-flash";
import session from "express-session";
import initializePassport from "./passport-config.js";
import ViteExpress from "vite-express";
const app = express();
const users = [];

initializePassport(passport, (email) =>
  users.find((user) => user.email === email)
);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//app.get("/", (req, res) => {
// res.render("index.ejs", { name: "test" });
//});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.redirect("/login");
  } catch {
    res.redirect("/register");
  }
  console.log(users);
}) /
  //document.querySelector(".like").addEventListener("click", func);

  //function func() {
  //document.querySelector(".like").innerHTML = <FcLikePlaceholder />;
  //}
  function red() {
    res.redirect("/login");
  };

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));

//module.exports = red;
