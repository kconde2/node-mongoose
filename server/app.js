const db = require('./lib/db');
const User = require('./models/user.js');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const MovieRouter = require('./routes/movie');
const UserRouter = require('./routes/user');

app.use(bodyparser.json())

app.get('/hello', (req, res) => {
    res.send("Hello you !");
});

app.post('/hello', (req, res) => {
    res.send("I got you!");
});

app.use('/movies', MovieRouter);
app.use('/users', UserRouter);

app.listen(3000, () => console.log("Listening"));

// db.once('open', () => {

//     const user = new User({
//         email: "kabaconde@gmail.com",
//         password: "kaba",
//     });

//     // user.register().then(data => console.log(data));

//     User.login(user.email, user.password).then(user => console.log(user)).catch(error => console.log(error));
// });

// db.on('error', (error) => console.log(error));
