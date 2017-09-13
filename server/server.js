const express = require('express')
, bodyParser = require('body-parser')
, massive = require('massive')
, session = require('express-session')
, cors = require('cors')
, nodemailer = require("nodemailer")

const app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());


//========================== NodeMailer =============================//

app.post('/contactus', function(req, res){
    
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config_server.emailAuth.user,
            pass: config_server.emailAuth.pass
        }
    });
    
    // setup email
    let mailOptions = {
        from: '"Lien Tree" <lientree@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: 'Thank You For Subscribing To Our Newsletter', // Subject line
        text: "You're subscribed!", // plain text body
        html: '<b>Thank you!</b>' // html body
    };
    
    transporter.sendMail(mailOptions, (error) => {
        let date = new Date();
        if(error) {
          res.sendStatus(500);
        } else {
          console.log(`Newsletter confirmation email sent on ${date.getMonth()}/${date.getDate()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
          res.sendStatus(200);
        }
        })
    });





const port = 5000

app.listen(port, () => {
  console.log("Started server on port", port)
});