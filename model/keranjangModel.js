const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const keranjangModel = mongoose.Schema({
    idUser: {
        type: ObjectId
    },
    idBarang: {
        type: ObjectId
    },
    jumlahBeli: {
        type: Number
    }
})

module.exports = mongoose.model('keranjang', keranjangModel)