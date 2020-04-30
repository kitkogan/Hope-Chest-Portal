# Hope Chest

Duration: 3 Week Sprint

## Description

Hope Chest is a foundation that works with individuals and organizations on hosting fundraising events that support breast cancer patients and their families with their financial needs. This application allows automation and efficiencies for both the user and the Hope Chest team in the process for third-party event submissions and approval. This portal enables users to submit third-party events for the Hope Chest team to review and approve, provides both the user and admin to view and edit events from their account. The application provides a collection of submitted events and their approval status for the Hope Chest admin to track and manage.

To see the fully functional site, please visit: DEPLOYED VERSION OF APP

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Development Setup Instructions

Create a database named hopechest.The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.

Open up your editor of choice and run an npm install

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`
- You will see the application load on the webpage

## How to Use Application (User)

- On page load, the user will land on the welcome page. Both new and existing users can click on the Login/Register bar at the top of the page to either log in to their account or register for an account. After registering or logging in, the user will advance to their user home page.

- The user home page will display upcoming user events and a navigation bar at the top that will take the user to other pages of the application. From the user page, the user can click “Start a Fundraiser” to advance to the event submission form to fill out and submit to Hope Chest for review and approval.

- The event submission form is broken out into 3 pages, collecting contact information, event details, event promotion and funding. Once all 3 pages of the form have been filled out, the user can review entries by clicking the “Review” button on form page 3. From the review page, the user can edit any of their entries and save before submitting their form. Once the form is complete, the user can select “Submit” to submit the form to Hope Chest. Following the event form submission, the user can go back to their user page and the upcoming event will display on their user home page.

## How to Use Application (Admin)

- On page load, the admin will land on the welcome page. The admin can click on the Login/Register bar at the top of the page to log in to their account. After logging in, the user will advance to their admin home page.

- On the admin home page, the admin user can click “Admin” in the navigation bar at the top of the page to advance to the table of submitted event forms to review and approve. When a user submits an event, it will automatically be added to the list of events awaiting approval. The admin user can view event details by clicking the Details button on each event row, as well as approve or unapproved events in each row. Clicking the Details button will advance the user to the Admin Details page where they can view all form field entries. Entries can be edited by the admin user by clicking the Update button at the bottom of the details page. Once edits are complete, the admin user can click “Update” to save their changes. The changes will also be saved on the Admin page where all events are listed.

- To change the date and time, replace the information in the first parenthesis after "moment"
- Start is the first day of the event and the time it will begin
- End is when the last day of the event and the time it will stop

- To add an event, copy and paste an event from openening bracket { to closing bracket } after the last event and include a comma after the closing bracket, then replace with dates, title, description, and location

- To remove an event, delete from opening bracket { to closing bracket }, along with the following comma
  time is formatted as following: year, month, day, hour(24 hour military time), minute, seconds

#### Things to note:
    - Calendar view is available to logged in users only
    - There is not currently a 'remove event' feature
    - There will be an error in the console when you click to see the details of an event from the admin view. This should not affect the use of the application.
    
## Built With

- React.js
- React-big-calendar
- Moment.js
- Node.js
- Express
- PostgreSQL
- Bootstrap
- Sweet Alert 2
- Heroku
