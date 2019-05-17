const db = require('./lib/db');
const User = require('./models/user');
const express = require('express');
const bodyparser = require('body-parser');
const SecurityRouter = require('./routes/security');
const verifyToken = require('./middlewares/security');
const app = express();
const MovieRouter = require('./routes/movie');
const UserRouter = require('./routes/user');

app.use(bodyparser.json())

app.use('/', SecurityRouter);

app.use(verifyToken);
app.use('/movies', MovieRouter);
app.use('/users', UserRouter);
app.listen(3000, () => console.log("Listening"));
