require('dotenv').config();
const express = require('express')
const massive = require('massive')

const app = express();
const nodemailerCtrl = require('./nodemailerController')

app.use(express.json());

//CONNECTION TO MY SERVER, DATABASE, AND USER SESSION
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

//ENDPOINTS FOR PROJECTS/LANGUAGES HERE

//ENPOINT FOR NODEMAILER
app.post('/api/mail', nodemailerCtrl.sendEmail);

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set("db", db)
    console.log("Database is connected master")
    app.listen(SERVER_PORT, () => console.log(`Server is listening on port ${SERVER_PORT}, cool beans Ben!`))
}).catch(error => console.log(error, 'Could not connect to server Ben. Uh-Oh!'))