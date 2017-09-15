const express = require('express')
, bodyParser = require('body-parser')
, massive = require('massive')
, session = require('express-session')
, cors = require('cors')
, nodemailer = require("nodemailer")
, path = require('path')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
, config = require('./config')


//========================== Initialize App =============================//
var db = massive.connectSync({
  connectionString: config.massiveConnection
});
const app = module.exports = express();
app.set('db', db)

app.use(express.static('../build'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session(config.mySecret))
app.use(passport.initialize())
app.use(passport.session())
app.use(cors());

//========================== Auth0 =============================//
passport.use(new Auth0Strategy(config.authPass, function(accessToken, refreshToken, extraParams, profile, done) {
  // console.log('Profile', profile)
  // console.log('Login Type', profile.identities[0].connection)
    if(profile.identities[0].connection === 'facebook'){
      
      
    }
        db.getUsers([profile.emails[0].value], function(err, user) {
          console.log("user", user);
          if (!user[0]) {
            console.log('creating user');
            db.storeUser([profile.emails[0].value], function(err, user) {
              console.log('user created', user)
              return done(err, user)
            })
          }
          else {
            console.log('found user', user);
            return done(err, user);
          }
        })
}))

app.get('/auth', passport.authenticate('auth0')); //START

app.get('/auth/callback',
  passport.authenticate('auth0', {
    successRedirect: '/profile',
    failureRedirect: '/'
}))

passport.serializeUser(function(user, done) {
   done(null, user);
})

passport.deserializeUser(function(user, done) {
  done(null, user);
})

const userCtrl = require('./controllers/userCtrl')

app.get('/me', userCtrl.me)



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



app.get('*', function (request, response){
  response.sendFile(path.join(__dirname, '../build', 'index.html'))
})
     

const port = 5000

app.listen(port, () => {
  console.log("Started server on port", port)
});