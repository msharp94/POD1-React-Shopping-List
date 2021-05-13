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

router.delete('/:id', (req, res) => {
    console.log(req.params);
    const resetId = req.params.id;

    let queryText = `DELETE from "list" WHERE id=$1`;
    pool.query(queryText, [resetId])
        .then(() => {
            res.sendStatus(202);
        }).catch((err) => {
            console.log(`Error making query ${queryText}`)
            res.sendStatus(500);
        });
});

router.delete('/', (req, res) => {
    console.log(req.params);
    const clearId = req.params.id;

    let queryText = `DELETE from "list"`;
    pool.query(queryText)
        .then(() => {
            res.sendStatus(202);
        }).catch((err) => {
            console.log(`Error making query ${queryText}`)
            res.sendStatus(500);
        });
});


// GET Route
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "list";';

    pool.query(queryText).then( (response) => {
        res.send(result.rows);
    }).catch( (error) => {
        console.log(`Error making query ${queryText}`, error);
        res.sendStatus(500);
    })
})


// Individual PUT Route
router.put('/:listid', (req, res) => {
    let listid = req.params.listid;

    let queryText = 'UPDATE "list" SET "purchase_status"=true WHERE id=$1 RETURNING *;';

    pool.query(queryText, [listid]).then( (response) => {
        res.send(result.rows);
    }).catch( (error) => {
        console.log(`Error making query ${queryText}`, error);
        res.sendStatus(500);
    })
})



module.exports = router;