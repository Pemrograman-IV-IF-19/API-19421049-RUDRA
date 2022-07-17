const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    namaKategori: {
        type: String
    },
    keterangan: {
        type: String
    }
})

module.exports = mongoose.model('kategori', userModel)