const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

/**
 * POST route template
 */
router.post('/form', (req, res) => {
console.log('in router form POST with', req.body);
// const contact_first_name = req.body.contact_first_name;
// const contact_last_name  = req.body.contact_last_name;
// const contact_phone = req.body.contact_phone;
// const contact_email = req.body.contact_email;
// const company_name = req.body.company_name;
// const company_website = req.body.company_website;
// const company_street = req.body.company_street;
// const company_city = req.body.company_city;
// const company_state = req.body.company_state;
const queryText = `INSERT INTO "events" ("contact_first_name","contact_last_name","contact_phone","contact_email", "company_name", "company_website",
  "company_street","company_city", "company_state", "company_zip","event_name","event_website","event_date", "event_time","event_location_name","event_location_street",
  "event_location_city", "event_location_state", "event_location_zip", "event_type", "event_description", "event_first_time","funds", "contribution_amount",
   "contribution_submission", "promotion","comments", "image", "user_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20
    $21, $22, $23, $24, $25, $26, $27, $28, $29);`;
    const queryValue = req.body;
    pool.query (queryText,queryValue)
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});



module.exports = router;