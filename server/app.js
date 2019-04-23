const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.connect('mongodb://mongo/', {
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASS,
    dbName: process.env.MONGODB_DBNAME,
    useNewUrlParser: true
});

const MovieSchema = new mongoose.Schema({
    title: String,
    createdAt: Date,
    year: {
        type: Number,
        min: 1900
    },
    category: {
        type: String,
        enum: ['Horror', 'SF', 'Action', 'Drama']
    }
});

MovieSchema.methods.onScreen = function() {
    return Date.now() > new Date(`${this.year}-01-01`);
}

MovieSchema.pre('save', function(next) {
    console.log(`Saving ${this.title} ...`);
    next();
});

MovieSchema.post('save', function(movie) {
    console.log(`${movie.title} saved.`);
});

const Movie = mongoose.model('Movie', MovieSchema);


const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: String,
    dob: Date,
    termsAccepted: Boolean,
    termsAcceptedDate: Date
});

UserSchema.pre('save', function(next) {
    console.log(`Saving ${this.firstname} ...`);
    next();
});

UserSchema.post('save', function(user) {
    console.log(`${user.firstname} ${user.lastname} saved.`);
});

const User = mongoose.model('User', UserSchema);

const db = mongoose.connection;

db.once('open', () => {

    // const movie = new Movie({
    //     title: "Marry Poppins",
    //     year: 2018,
    //     createdAt: new Date(),
    //     category: "SF"
    // });

    // movie.save().then(() => console.log('done'));
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("simple-mdb", salt);

    // const user = new User({
    //     firstname: "Kaba",
    //     lastname: "CONDE",
    //     email: "kabaconde@gmail.com",
    //     password: hash,
    //     dob: new Date('1994-12-17T03:24:00'),
    //     termsAccepted: true,
    //     termsAcceptedDate: new Date()
    // });

    // user.save().then(() => console.log('user registered'));

    //User.find().then(data => console.log(data));


    User.findOne({'email': 'kabaconde@gmail.com'}).then(data => {
        console.log(data)
        console.log(`${data.password}`);
        console.log(bcrypt.compareSync("simple-mdb", `${data.password}`));
    });

    // let movie = new Movie({
    //     title: 'Avengers 4',
    //     createdAt: new Date(),
    //     year: 2019,
    //     category: "Action"
    // });

    // movie.save().then(data => console.log(data)).catch(error => console.log(error));

    // movie = new Movie({
    //     title: 'Helene de troie',
    //     createdAt: new Date(),
    //     year: 1054,
    //     category: "Drama"
    // });

    // movie.save().then(data => console.log(data)).catch(error => console.log(error));

    // Movie.find().then(data => console.log(data));
});

db.on('error', (error) => console.log(error));
