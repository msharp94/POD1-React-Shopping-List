const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...


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

    let queryText = 'UPDATE "tasks" SET "purchase_status"=true WHERE id=$1 RETURNING *;';

    pool.query(queryText, [listid]).then( (response) => {
        res.send(result.rows);
    }).catch( (error) => {
        console.log(`Error making query ${queryText}`, error);
        res.sendStatus(500);
    })
})


module.exports = router;