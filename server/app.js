const db = require('./lib/db');
const User = require('./models/user.js');

db.once('open', () => {

    const user = new User({
        email: "kabaconde@gmail.com",
        password: "kaba",
    });

    // user.register().then(data => console.log(data));

    User.login(user.email, user.password).then(user => console.log(user)).catch(error => console.log(error));
});

db.on('error', (error) => console.log(error));
