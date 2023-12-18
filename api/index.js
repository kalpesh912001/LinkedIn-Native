const express = require('express');
const mongoose = require('mongoose');
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const cors = require('cors');

const app = express();

const port = 8000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://kalpesh:kalpesh2001@cluster0.xdqntge.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to mongo DB");
}).catch((error) => {
    console.log("Error connecting to mongo DB", error);
});

app.listen(port, () => {
    console.log(`Server is running on port ` + port);
});
