const express = require('express');
const cacauTrybe = require('./cacauTrybe');
const app = express();

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/search', async (req, res) => {
  try {
    const { name } = req.query;
    const chocolates = await cacauTrybe.getAllChocolates();
    const filteredChocolates = chocolates.filter((choco) => choco.name.includes(name));
    const statusCode = filteredChocolates.length === 0 ? 404 : 200;
    return res.status(statusCode).json(filteredChocolates);
  } catch (error) {
    console.error(error);
    return res.status(505).json({ message: 'Internal error' });
  }

});

app.get('/chocolates/total', async (req, res) => {
  try {
    const quantity = await cacauTrybe.getChocolatesQuantity();
    return res.status(200).json(quantity);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'internal error' });
  }
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});



module.exports = app;