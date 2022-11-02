const express = require('express')
const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"))

// Allows you to parse 
app.use(express.urlencoded({extended: true}))

// Allows you to parse JSON requests through express
app.use(express.json())

const userRouter = require('./routes/users')

app.use('/users', userRouter)

/* Even though the logger is defined in users.js it isn't defined here. Therefore it isn't usable
function logger(req, res, next) {
    console.log(req.originalUrl);
    next()
}
*/

app.listen(3000);