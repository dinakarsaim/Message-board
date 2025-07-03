const {Router} = require("express");
const messages = require("../messages");

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
    res.render("form");
});

messageRouter.post("/", (req, res) => {
    const UserName = req.body.UserName;
    const messageText = req.body.texts;
    messages.push({text: messageText, user: UserName, added: new Date()});
    res.redirect("/");
});

messageRouter.get("/:message", (req, res) => {
    const {message} = req.params;
    res.send(message);
});

module.exports = messageRouter;