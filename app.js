const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose')
const dbConfig = require('./config/DbConfig')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect(dbConfig.mongoUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Connect mongodb")
}).catch(err => {
    console.log(err)
})

app.get("/", (req, res) => {
    res.json({
        msg: "Selamat Datang di API"
    })
})

app.use('/users', require('./routes/userRoutes'))
app.use('/kategori', require('./routes/kategoriRoutes'))
app.use('/barang', require('./routes/barangRoutes'))
app.use('/keranjang', require('./routes/keranjangRoutes'))

// app.get("/data/:npm/:nama", (req, res) => {
//     res.json({
//         npm : req.params.npm,
//         nama : req.params.nama
//     })
//     })

// app.get("/data-mhs/dengan-query", (req, res) => {
//     res.json({
//         npm: req.query.npm,
//         nama: req.query.npm
//     })
// })

// app.post("/data-mhs/dengan-body", (req, res) => {
//             res.json({
//                 npm: req.body.npm,
//                 nama: req.body.nama
//             })
//         })

// app.post("/data/biodata/:npm", (req, res) => {
//             res.json({
//                 npm: req.params.npm,
//                 nama: req.query.nama,
//                 alamat: req.body.alamat
//             })
//         })

app.listen(port, () => {
    console.log("Server Berjalan di port " + port)
})