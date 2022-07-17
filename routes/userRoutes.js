const router = require('express').Router()
const userController = require('../controller/userController')

router.post("/registrasi", (req, res) => {
    userController.registrasiUser(req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})

router.post("/login", (req, res) => {
    userController.loginUser(req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})

module.exports = router