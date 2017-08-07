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
  }
  User.find({where:{ id: sessionId }}).then(result => {
    if (result.loggedIn === true) {
      return res.redirect(`/profile/${sessionId}`);
    }
    res.render('loginPage');
  }).catch(e => res.status(500).send(e.stack)););
});



router.post("/loginPage", (req,res)=>{
  //TODO: make username unique in DB
  //and give index
  let loggedUser = req.body.username;
  User.find({where:{username: loggedUser}}).then(result => {
      if(result.id){ return res.redirect(`/profile/${result.id}`);
          User.update({loggedIn = true},{where:{id: result.id },limit: 1});
        }
      else{req.flash('error',"Sorry that username doesnt exist, blame Loki");
          res.redirect("/");}
                                                            }
                                                          ).catch(e => res.status(500).send(e.stack)););;


})
router.post("/register", (req,res)=>{
  let userParams = {"username": req.body.username};
  sequelize.transaction(
    t => {return User.findOrCreate({defaults: userParams, where: {username: userParams.username },transaction:t})
    .spread((result,created) => {
        if(!created){  req.flash('error',"Sorry that username DOES exist, blame Loki");
        res.redirect("/");  }
        else{//TODO: log user in because we just created them then redirect to profile  }
           })


})
