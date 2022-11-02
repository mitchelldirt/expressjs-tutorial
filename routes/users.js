const express = require('express')
const router = express.Router();

router.use(logger)

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send('User List')
})

router.get('/new', (req, res) => {
    res.render('../views/users/new.ejs', {firstName: "test"})
})

router.post('/', (req, res) => {
    const isValid = false;
    if (isValid) {
        users.push({
            firstName: req.body.firstName, 
            id: users.length 
        })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error!")
        res.render('../views/users/new.ejs', {firstName: req.body.firstName})
    }
})

router.route("/:id")
    .get((req, res) => {
        if (!req.user) {
            res.status(500).send('User not found')
            return
        }
        res.send(`User: ${req.user.firstName} ${req.user.id}`)
    })
    .put((req, res) => {
        res.send(`Update user with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete user with ID ${req.params.id}`)
    })

const users = [
    {
        firstName: 'Mitchell',
        id: 0
    }
]
router.param("id", (req, res, next, id) => {
    req.user = users.find(user => user.id === +id)
    console.log(users)
    console.log(req.user)
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl);
    next()
}

module.exports = router