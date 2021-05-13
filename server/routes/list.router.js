const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// PUT reset

router.put('/reset', (req, res) => {
  let queryText = `UPDATE "list" SET "purchase_status"=false RETURNING *`;
  pool.query(queryText)
  .then(result => {
    res.send(result.rows);
  })
  .catch((err) => {
    console.log(`Error making query: ${queryText}`, err);
    
  })

})

module.exports = router;