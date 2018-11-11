const bodyParser = require('body-parser');
const mongoose   = require("mongoose");
const passport   = require("passport");
const express    = require('express');
const User       = require("./models/user.model");

const port = 3000;

// mongoose localhost connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/EOSpace', { useNewUrlParser: true });

// Routes
const owner = require('./routes/owner.routes');
const user = require('./routes/user.routes');

// initialize our express api
const app = express();

// directs app to use bodyParser, moved immediately below app declaration so
// that bodyParser works universally.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/user", user);
app.use("/owner", owner);

// app.get('/test', (req, res) => res.send('Hello World!'));

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
