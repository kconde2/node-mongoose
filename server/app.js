const mongoose = require('mongoose');
const User = require('./models/user.js');

mongoose.connect('mongodb://mongo/', {
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASS,
    dbName: process.env.MONGODB_DBNAME,
    useNewUrlParser: true
});

// avoid index key
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const db = mongoose.connection;


db.once('open', () => {
    /*user.login('kabaconde15@gmail.com', 'simple-db').then((data) => {
        console.log(data);
    });*/
    const user = new User({
        email: "kabaconde@gmail.com",
        password: "kaba",
    });

    //user.register().then(data => console.log(data));

    User.login(user.email, user.password).then(user => console.log(user)).catch(error => console.log(error));
});

db.on('error', (error) => console.log(error));
