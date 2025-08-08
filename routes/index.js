const express = require("express");
const router = express.Router();

const piesRaw = [
  {
    flavor: "Apple",
    description:
      "A classic pie with a flaky crust, filled with juicy apples and a touch of cinnamon.",
    cost: 12.95,
    available: true,
  },
  {
    flavor: "Huckleberry",
    description:
      "A sweet and tart pie bursting with fresh huckleberries, wrapped in a buttery crust.",
    cost: 12.95,
    available: true,
  },
  {
    flavor: "Brambleberry",
    description:
      "A delightful mix of blackberries, raspberries, and blueberries in a golden crust.",
    cost: 14.95,
    available: true,
  },
  {
    flavor: "Pumpkin",
    description:
      "A creamy and spiced pumpkin filling in a perfectly baked pastry shell.",
    cost: 13.95,
    available: false,
  },
  {
    flavor: "Lemon Tart",
    description:
      "A tangy lemon curd filling in a buttery tart shell, topped with a dusting of powdered sugar.",
    cost: 13.95,
    available: true,
  },
  {
    flavor: "Cherry",
    description:
      "A tart and sweet cherry filling encased in a flaky, buttery crust.",
    cost: 13.5,
    available: true,
  },
  {
    flavor: "Pecan",
    description:
      "A rich and nutty pie with a caramelized pecan topping over a sweet filling.",
    cost: 15.95,
    available: true,
  },
  {
    flavor: "Lemon Meringue",
    description:
      "A tangy lemon custard topped with fluffy meringue in a crisp crust.",
    cost: 14.5,
    available: true,
  },
  {
    flavor: "Chocolate Silk",
    description:
      "A decadent chocolate filling with a smooth, silky texture in a crisp crust.",
    cost: 16.95,
    available: true,
  },

  {
    flavor: "Key Lime",
    description:
      "A refreshing and zesty key lime filling in a buttery graham cracker crust.",
    cost: 14.95,
    available: true,
  },
  {
    flavor: "Chocolate Tart",
    description:
      "A rich and velvety chocolate filling in a crisp pastry shell, perfect for chocolate lovers.",
    cost: 17.5,
    available: true,
  },
  {
    flavor: "Banana Cream",
    description:
      "A creamy banana filling topped with whipped cream, nestled in a flaky crust.",
    cost: 14.25,
    available: true,
  },
];

const pies = [...piesRaw];

const colors = [
  "#5752a2",
  "#dc8349",
  "#93d5d6",
  "#f399bc",
  "#dd4f29",
  "#f8db37",
  "#93d4d8",
];
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Owlbert's Pies", pies, colors });
});

router.get("/api/menu", (req, res, next) => {
  res.status(200).json({
    pies: piesRaw,
  });
});

router.get("/api/pizza", (req, res, next) => {
  res.status(500).json({
    error: "internal_error",
    message: "We don't sell pizza pies!",
  });
});

router.post("/api/order", (req, res, next) => {
  res.status(201).json({
    pies: piesRaw,
  });
});

module.exports = router;
