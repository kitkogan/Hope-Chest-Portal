const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    console.log("in server--/admin/:id GET", req.params.id);
    const queryText =
    `SELECT diaper.id, diaper.child_id, diaper.type, 
    diaper.time, diaper.date, diaper.notes, child.user_id
    FROM "diaper" 
    JOIN "child" ON "diaper"."child_id"= "child"."id"
    WHERE "child"."user_id"=${req.params.id} ORDER BY diaper.id DESC;`
    pool.query(queryText)
    .then(result => {
            res.send(result.rows);
    })
    .catch(error => {
        console.log('Error getting query', error);
        res.sendStatus(500);
     });
});

// /**
//  * POST route template
//  */
// router.post('/form', (req, res) => {
// console.log('in router form POST with', req.body);
// //form1
// const contact_first_name = req.body.form.contact_first_name;
// const contact_last_name  = req.body.form.contact_last_name;
// const contact_phone = req.body.form.contact_phone;
// const contact_email = req.body.form.contact_email;
// const company_name = req.body.form.company_name;
// const company_website = req.body.form.company_website;
// const company_street = req.body.form.company_street;
// const company_city = req.body.form.company_city;
// const company_state = req.body.form.company_state;
// const company_zip = req.body.form.company_zip;
// //form2
// const event_contact_first_name = req.body.form2.event_contact_first_name;
// const event_contact_last_name = req.body.form2.event_contact_last_name ;
// const event_contact_phone = req.body.form2.event_contact_phone;
// const event_contact_email = req.body.form2.event_contact_email;
// const event_name = req.body.form2.event_name;
// const event_website = req.body.form2.event_website;
// const event_date = req.body.form2.event_date;
// const event_time = req.body.form2.event_time;
// const event_location_name = req.body.form2.event_location_name;
// const event_location_street = req.body.form2.event_location_street;
// const event_location_city = req.body.form2.event_location_city;
// const event_location_state = req.body.form2.event_location_state;
// const event_location_zip = req.body.form2.event_location_zip;
// const event_type = req.body.form2.event_type;
// const event_description = req.body.form2.event_description;
// const event_first_time = req.body.form2.event_first_time;
// //form3
// const fund_description = req.body.form3.fund_description;
// const contribution_amount = req.body.form3.contribution_amount;
// const contribution_submission = req.body.form3.contribution_submission;
// const promotion = req.body.form3.promotion;
// const other_comment = req.body.form3.other_comment;
// const image = req.body.form3.image;
// const user_id = req.body.form.user_id;
// const queryText = `INSERT INTO "form" ("contact_first_name","contact_last_name","contact_phone","contact_email", "company_name", "company_website",
//   "company_street","company_city", "company_state", "company_zip","event_contact_first_name", "event_contact_last_name", "event_contact_phone", "event_contact_email", "event_name", "event_website","event_date","event_time","event_location_name",
//   "event_location_street", "event_location_city", "event_location_state", "event_location_zip", "event_type", "event_description", 
//   "event_first_time","fund_description", "contribution_amount", "contribution_submission", "promotion","other_comment", "image", "user_id") 
//    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25,$26,$27,$28,$29,$30,$31,$32,$33);`;
//     pool.query (queryText, [contact_first_name, contact_last_name, contact_phone, contact_email, company_name, company_website, company_street, 
//       company_city, company_state, company_zip, event_contact_first_name, event_contact_last_name,event_contact_phone,event_contact_email,
//       event_name, event_website, event_date, event_time, event_location_name, event_location_street,
//       event_location_city, event_location_state, event_location_zip, event_type, event_description, event_first_time, fund_description, contribution_amount, 
//       contribution_submission, promotion, other_comment, image, user_id])
//     .then(() => res.sendStatus(201))
//     .catch((err) => {
//       console.log('Error POSTING Form page query into Database', err);
//       res.sendStatus(500);
//        });
// });


module.exports = router;