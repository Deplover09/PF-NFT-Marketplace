const { Router } = require("express");
const { Product } = require("../db");

const {
  allData,
  getProductById,
  createProduct,
} = require("../controllers/sneakers.controller");

const router = Router();

router.get("/sneakers", allData);

router.get("/sneakers/:productId", getProductById);

router.get("/filters/:filter", async (req, res) => {
  const filter = req.params.filter;
  try {
    const attributeFromDb = await Product.findAll({
      attributes: [`${filter}`],
      raw: true,
    });

    let results;
    if (filter === "colors" || filter === "sizes") {
      results = new Set(
        attributeFromDb.map((size) => {
          if (!size[filter].length) return "40";
          return size[filter][0];
        })
      );
      res.status(200).json(Array.from(results));
    } else {
      results = attributeFromDb.map((attr) => attr[filter]);
      res.status(200).json(Array.from(new Set(results)));
    }
  } catch (e) {
    res.status(400).json({ Error: e.message });
  }
});

router.post("/sneakersCreate", createProduct);

module.exports = router;
