const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

router.post('/', (req, res) => {
  console.log(req.body);
  
  const listItem = req.body;
  const queryText = `
    INSERT INTO list ("name", "quantity", "unit", "purchase_status")
    VALUES ($1, $2, $3, $4)`;

  pool
    .query(queryText, [
      listItem.name,
      listItem.quantity,
      listItem.unit,
      listItem.purchase_status
    ])
    .then(function () {
      console.log(`Added to the list`, listItem);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${queryText}`, error);
    });
});

  module.exports = router;
