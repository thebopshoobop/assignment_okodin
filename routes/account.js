const router = require("express").Router();
const models = require("../models");
const { User } = models;
const sequelize = models.sequelize;
const helpers = require("../helpers");

router.get("/", (req, res) => {
  //TODO: set log in on server for user
  let sessionId = req.session.id;
  if (sessionId === undefined) {
    return res.render(`loginPage`);
  } else {
    User.find({ where: { id: sessionId } })
      .then(result => {
        if (result.loggedIn) res.redirect(helpers.userPath(sessionId));
        else res.render("loginPage");
      })
      .catch(e => {
        res.status(500).send(e.stack);
      });
  }
});

router.post("/login", (req, res) => {
  let userParams = { username: req.body.username };
  User.findOrCreate({
    defaults: userParams,
    where: { username: userParams.username }
  })
    .spread((result, created) => {
      if (!created) req.flash("notice", "Logged in successfully!");
      else req.flash("notice", "Created account successfully!");

      User.update(
        { loggedIn: true },
        { where: { id: result.id }, limit: 1 }
      ).then(() => {
        req.session.id = result.id;
        res.redirect(helpers.userPath(result.id));
      });
    })
    .catch(e => res.status(500).send(e.stack));
});

router.get("/logout", (res, req) => {
  let sessionId = req.session.id;
  if (sessionId) {
    User.update(
      { loggedIn: false },
      { where: { id: sessionId }, limit: 1 }
    ).then(() => {
      res.redirect("/");
    });
  }
});
