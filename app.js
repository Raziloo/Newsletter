const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const mailchimp = require("@mailchimp/mailchimp_marketing");
require('dotenv').config();

const app = express();

mailchimp.setConfig({
    apiKey: process.env.API_KEY,
    server: "us11"
  });


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
    const listId = "ab7e448ca6";
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;

    async function run() {

          const response = await mailchimp.lists.addListMember(listId, {
            email_address: email,
            status: "subscribed",
            merge_fields: {
              FNAME: firstName,
              LNAME: lastName
            }
          });

      }

      function successCallback(result) {
        res.sendFile(__dirname + '/success.html')
 
    }
    function failureCallback(error) {
        res.sendFile(__dirname + '/failure.html')
 
    }

    run().then(successCallback, failureCallback);

});


app.listen(3000, function () {
    console.log("Server is running on port 3000.");
});

// audience id - ab7e448ca6

