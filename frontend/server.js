import express from "express";
import ViteExpress from "vite-express";

const app = express();

//document.querySelector(".like").addEventListener("click", func);

//function func() {
//document.querySelector(".like").innerHTML = <FcLikePlaceholder />;
//}

app.get("/message", (_, res) => res.send("Hello from express!"));

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));
