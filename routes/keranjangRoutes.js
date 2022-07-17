const controllerKeranjang = require('../controller/keranjangController')
const router = require('express').Router()


router.post('/input-keranjang', (req, res) => {
    controllerKeranjang.inputKeranjang(req.body)
        .then((result) => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})
router.get('/getAll-keranjang/:idUser', (req, res) => {
    controllerKeranjang.getAllKeranjang(req.params.idUser)
        .then((result) => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})
router.get('/getKeranjangById/:id', (req, res) => {
    controllerKeranjang.getKeranjangById(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})
router.put('/update-keranjang/:id', (req, res) => {
    controllerKeranjang.updateKeranjang(req.params.id, req.body)
        .then((result) => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})

router.delete('/delete-keranjang/:id', (req, res) => {
    controllerKeranjang.deleteKeranjang(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})


module.exports = router