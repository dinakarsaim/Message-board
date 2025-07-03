const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const messageRouter = require("./routes/messageRouter");
const path = require("path");
const messages = require("./messages");

app.use(express.static(path.join(__dirname, "static")));

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use("/", indexRouter);
app.use("/new", messageRouter);

app.listen(3000, ()=> {
    console.log("Listening on port 3000");
});