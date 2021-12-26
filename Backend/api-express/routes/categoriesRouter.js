const express = require('express');

const router = express.Router();

router.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  res.json({
    id: categoryId,
    name: `Category ${categoryId}`,
    products: [
      {
        name: 'Product 1',
        price: 100,
      },
      {
        name: 'Product 2',
        price: 200,
      }
    ]
  });
})

/*
router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
})
*/


module.exports = router;
