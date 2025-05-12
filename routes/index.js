const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Home" });
});

router.get("/api/menu", (req, res, next) => {
  res.status(200).json({
    pies: [
      { flavor: "apple", cost: 12.95, available: true },
      { flavor: "brambleberry", cost: 14.95, available: true },
      { flavor: "pumpkin", cost: 13.95, available: false },
    ],
  });
});

router.post("/api/order", (req, res, next) => {
  res.status(201).json({
    success: true,
    order_id: 432,
    price: 23.43,
  });
});

module.exports = router;
