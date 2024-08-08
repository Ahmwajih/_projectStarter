const router = require("express").Router();

router.post("/login", (req, res) => {
  res.send({
    message: "Login",
  });
});


router.all('logout', (req, res) => {
    res.send({
        message: 'Logout'
    })
    })

module.exports = router;