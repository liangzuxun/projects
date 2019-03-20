const express = require ('express');
const router = express.Router ();
const Hero = require ('./hero');
router.get ('/hero', (req, res) => {
  Hero.find ({}).then (heros => {
    res.json(heros)
  });
});
router.get ('/hero/:id', (req, res) => {
  Hero.findById (req.params.id).then (hero => {
    res.send(hero)
  });
});
/* express4.0+中 body-parser 已经分离出来 如果不安装body-parser req.body会变成空白*/ 
router.post ('/hero', (req, res) => {
  Hero.create (req.body, (err, hero) => {
    if (err) {
      res.json (err);
    } else {
      res.json (hero);
    }
  });
});

module.exports = router;