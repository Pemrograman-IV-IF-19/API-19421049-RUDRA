const controllerKategori = require('../controller/kategoriController')
const router = require('express').Router()


router.post('/input', (req, res) => {
    controllerKategori.inputKategori(req.body)
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})


router.get('/get-data', (req, res) => {
    controllerKategori.getAllKategori()
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})


router.get('/get-data/:namakategori', (req, res) => {
    controllerKategori.getKategoriByName(req.params.namakategori)
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})


router.put('/update-data/:id', (req, res) => {
    controllerKategori.updateKategori(req.params.id, req.body)
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})


router.delete('/hapus-data/:id', (req, res) => {
    controllerKategori.hapusKategori(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})


module.exports = router