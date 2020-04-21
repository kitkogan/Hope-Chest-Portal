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
// router.post('/form', (req, res) => {
// console.log('in router form POST with', req.body);
// const contact_first_name = req.body.contact_first_name;
// const contact_last_name  = req.body.contact_last_name;
// const contact_phone = req.body.contact_phone;
// const contact_email = req.body.contact_email;
// const company_name = req.body.company_name;
// const company_website = req.body.company_website;
// const company_street = req.body.company_street;
// const company_city = req.body.company_city;
// const company_state = req.body.company_state;
// const company_zip = req.body.company_zip;
// const event_name = req.body.event_name;
// const event_website = req.body.event_website;
// const event_date = req.body.event_date;
// const event_time = req.body.event_time;
// const event_location_name = req.body.event_location_name;
// const event_location_street = req.body.event_location_street;
// const event_location_city = req.body.event_location_city;
// const event_location_state = req.body.event_location_state;
// const event_location_zip = req.body.event_location_zip;
// const event_type = req.body.event_type;
// const event_description = req.body.event_description;
// const event_first_time = req.body.event_first_time;
// const fund_description = req.body.fund_description;
// const contribution_amount = req.body.contribution_amount;
// const contribution_submission = req.body.contribution_submission;
// const promotion = req.body.promotion;
// const comments = req.body.comments;
// const image = req.body.image;
// const user_id = req.body.user_id;
// const queryText = `INSERT INTO "events" ("contact_first_name","contact_last_name","contact_phone","contact_email", "company_name", "company_website",
//   "company_street","company_city", "company_state", "company_zip","event_name","event_website","event_date", "event_time","event_location_name","event_location_street",
//   "event_location_city", "event_location_state", "event_location_zip", "event_type", "event_description", "event_first_time","fund_description", "contribution_amount",
//    "contribution_submission", "promotion","comments", "image", "user_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20
//     $21, $22, $23, $24, $25, $26, $27, $28, $29);`;
//     pool.query (queryText, [contact_first_name, contact_last_name, contact_phone, contact_email, company_name, company_website, company_street, company_city, company_state, company_zip, event_name, event_website, event_date, event_time, event_location_name, event_location_street ,event_location_city, event_location_state, event_location_zip, event_type, event_description, event_first_time, funds, contribution_amount, contribution_submission, promotion, comments, image, user_id])
//     .then(() => res.sendStatus(201))
//     .catch(() => res.sendStatus(500));
// });

router.post("/userForm", (req, res) => {
  console.log("in router form POST with", req.body);
  const contact_first_name = req.body.contact_first_name;
  const contact_last_name = req.body.contact_last_name;
  const contact_phone = req.body.contact_phone;
  const contact_email = req.body.contact_email;
  const company_name = req.body.company_name;
  const company_website = req.body.company_website;
  const company_street = req.body.company_street;
  const company_city = req.body.company_city;
  const company_state = req.body.company_state;
  const company_zip = req.body.company_zip;
  const event_contact_first_name = req.bodyevent_contact_first_name;
  const event_contact_last_name = req.body.event_contact_last_name ;
  const event_contact_phone = req.body.event_contact_phone;
  const event_contact_email = req.body.event_contact_email;
  const user_id = req.body.user_id;
  const queryText = `INSERT INTO "contact" ("contact_first_name","contact_last_name","contact_phone","contact_email", "company_name", "company_website",
  "company_street","company_city", "company_state", "company_zip","event_contact_first_name", "event_contact_last_name","event_contact_phone","event_contact_email", "user_id") 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15);`;
  pool.query(queryText, [
      contact_first_name,
      contact_last_name,
      contact_phone,
      contact_email,
      company_name,
      company_website,
      company_street,
      company_city,
      company_state,
      company_zip,
      event_contact_first_name,
      event_contact_last_name,
      event_contact_phone,
      event_contact_email,
      user_id,
    ])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Error POSTING Form page 1 query into Database', err);
      res.sendStatus(500);
    });
});

router.post('/eventForm', (req, res) => {
  console.log('in POST events route:', req.body);
  const event_name = req.body.event_name;
  const event_website = req.body.event_website;
  const event_date = req.body.event_date;
  const event_time = req.body.event_time;
  const event_location_name = req.body.event_location_name;
  const event_location_street = req.body.event_location_street;
  const event_location_city = req.body.event_location_city;
  const event_location_state = req.body.event_location_state;
  const event_location_zip = req.body.event_location_zip;
  const event_type = req.body.event_type;
  const event_description = req.body.event_description;
  const event_first_time = req.body.event_first_time;
  const user_id = req.body.user_id;
  const queryText = `INSERT INTO "event"("event_name","event_website","event_date", "event_time","event_location_name","event_location_street",
  "event_location_city", "event_location_state", "event_location_zip", "event_type", "event_description", "event_first_time", "user_id") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13);`;
  pool.query(queryText, [
      event_name,
      event_website, 
      event_date,   
      event_time, 
      event_location_name,
      event_location_street,
      event_location_city,
      event_location_state,
      event_location_zip,
      event_type,
      event_description,
      event_first_time,
      user_id
  ]).then(() => res.sendStatus(201))
  .catch((err) => {
    console.log('Error POSTING Form page 2 query into Database', err);
    res.sendStatus(500);
  });
});

router.post("/fundForm", (req, res) => {
  console.log("in router form POST with", req.body);
  const fund_description = req.body.fund_description;
  const contribution_amount = req.body.contribution_amount;
  const contribution_submission = req.body.contribution_submission;
  const promotion = req.body.promotion;
  const other_comment = req.body.other_comment;
  const image = req.body.image;
  const user_id = req.body.user_id;
  const queryText = `INSERT INTO "funds" ("fund_description", "contribution_amount", "contribution_submission", "promotion", "other_comment", "image", "user_id") VALUES ($1,$2,$3,$4,$5,$6,$7);`;
  pool.query(queryText, [
      fund_description,
      contribution_amount, 
      contribution_submission,
      promotion,
      other_comment,
      image, 
      user_id
  ]).then(() => res.sendStatus(201))
  .catch((err) => {
    console.log('Error POSTING Form page 3 query into Database', err);
    res.sendStatus(500);
  });
});

module.exports = router;
