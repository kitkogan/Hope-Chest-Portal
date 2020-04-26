const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

//Get route for admin page to display all event submissions
router.get("/", (req, res) => {
    console.log("in ADMIN /admin GET");
    const queryText = `select * from "form"`;
//   where "user_id" = $1 order by "event_date" desc limit 3;`;
    pool
      .query(queryText)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log("Error getting admin query", error);
        res.sendStatus(500);
      });
  });

// Get route to grab events by event id and display on Admin Review page
router.get("/get/:id", (req, res) => {
  console.log("in server/:id GET");
  const queryText = `select * from "form"
  where "user_id" = ${req.params.id};`;
  pool
  .query(queryText)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error) => {
    console.log("!!!!on ADMIN DETAILS PAGE Error getting admin query", error);
    res.sendStatus(500);
  });

  });

//PUT to update evetn approval status on the admin page
router.put('/update/:id', (req,res) => {
  console.log("in task PUT router with", req.body.approved);
  const formId = req.params.id;
  const approvalStatus = req.body.approved;
  const queryText = `Update "form" SET "approved" = $2 WHERE id=$1;`;
  pool
    .query(queryText, [formId, approvalStatus])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("ERROR UPDATING EVENT APPROVAL STATUS", error);
      res.sendStatus(500);
    });
})

// Edit route to allow admin edit of user event submissions on Admin Review page
  router.put("/:id", (req, res) => {
    console.log("in admin PUT router with",req.body.contact_first_name,"form id",req.params.id
    );
    //form1
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
    //form2
    const event_contact_first_name = req.body.event_contact_first_name;
    const event_contact_last_name = req.body.event_contact_last_name;
    const event_contact_phone = req.body.event_contact_phone;
    const event_contact_email = req.body.event_contact_email;
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
    //form3
    const fund_description = req.body.fund_description;
    const contribution_amount = req.body.contribution_amount;
    const contribution_submission = req.body.contribution_submission;
    const promotion = req.body.promotion;
    const other_comment = req.body.other_comment;
    const image = req.body.image;
    const user_id = req.body.user_id;
    const form_id = req.params.id;
    const queryText = `Update "form" SET ("contact_first_name","contact_last_name","contact_phone","contact_email", "company_name", "company_website",
  "company_street","company_city", "company_state", "company_zip","event_contact_first_name", "event_contact_last_name", "event_contact_phone", 
  "event_contact_email", "event_name", "event_website","event_date","event_time","event_location_name",
  "event_location_street", "event_location_city", "event_location_state", "event_location_zip", "event_type", "event_description", 
  "event_first_time","fund_description", "contribution_amount", "contribution_submission", "promotion","other_comment", "image", "user_id") = 
  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25,$26,$27,$28,$29,$30,$31,$32,$33)
   WHERE "form"."id"=($34);`;
    pool
      .query(queryText, [
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
        fund_description,
        contribution_amount,
        contribution_submission,
        promotion,
        other_comment,
        image,
        user_id,
        form_id,
      ])
      .then(() => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log("error updating event status", error);
        res.sendStatus(500);
      });
  });



module.exports = router;