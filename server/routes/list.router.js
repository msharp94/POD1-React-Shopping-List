const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

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


module.exports = router;