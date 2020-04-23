const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */

 //Get route to get event info by user id and display on user page
 router.get("/:id", (req, res) => {
   console.log("in server/form/:id GET");
   const queryText = `select * from "form"
where "user_id" = $1;`;
   pool
     .query(queryText, [req.params.id])
     .then((result) => {
       res.send(result.rows);
     })
     .catch((error) => {
       console.log("Error getting query", error);
       res.sendStatus(500);
     });
 });

/**
 * POST route template
 */
module.exports = router;