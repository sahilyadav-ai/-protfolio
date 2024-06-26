var express = require('express');
var router = express.Router();
const {Intro ,About,Exper,Friend}=require("../module/protfolioModel")

/* GET home page. */
router.get('/protfolio-data',async function(req, res, next) {
  const intros = await Intro.find()
  const abouts = await About.find()
  const exper = await Exper.find()
  const friend = await Friend.find()
  

  res.status(200).send({
    intro:intros[0],
    about:abouts[0],
    exper:exper[0],
    friend:friend[0]

  })


  // res.render('index', { title: 'Express' });
});

module.exports = router;
