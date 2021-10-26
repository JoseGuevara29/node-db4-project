const router = require("express").Router();

router.use("*", (req, res, next) => {//eslint-disable-line
  res.json({ api: "up" });
});
router.use((err, req, res, next) => { //eslint-disable-line
  res.status(500).json({
    customMessage: "somthing went wrong insidet the recipe router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
