const modelBarang = require('../model/barang')
const monggoose = require('mongoose')
const ObjectId = monggoose.Types.ObjectId

exports.inputBarang = (data) =>
    new Promise(async (resolve, reject) => {
        console.log(data)
        await modelBarang.create(data)
            .then(() => {
                resolve({
                    status: true,
                    msg: 'Berhasil membuat Barang'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: ' Terjadi kesalahan pada server'
                })
            })
    })

exports.getAllBarang = () =>
    new Promise(async (resolve, reject) => {
        modelBarang.aggregate([
            {
                $lookup:
                {
                    from: "kategoris",
                    localField: "idKategori",
                    foreignField: "_id",
                    as: "kategoriBarang"
                }
            }, { $unwind: "$kategoriBarang" }])
            .then(dataBarang => {
                if (dataBarang.length > 0) {
                    resolve({
                        status: true,
                        msg: 'Berhasil memuat data',
                        data: dataBarang
                    })
                } else {
                    reject({
                        status: false,
                        msg: 'Tidak ada data kategori'
                    })
                }
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi kesalahan pada server'
                })
            })
    })
exports.getBarangById = (id) =>
    new Promise(async (resolve, reject) => {
        modelBarang.findOne({ _id: ObjectId(id) })
            .then(dataBarang => {
                if (dataBarang) {
                    resolve({
                        status: true,
                        msg: 'Berhasil memuat data',
                        data: dataBarang
                    })
                } else {
                    reject({
                        status: false,
                        msg: 'Tidak ada data kategori' + name
                    })
                }
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi kesalahan pada server'
                })
            })
    })

exports.updateBarang = (id, data) =>
    new Promise(async (resolve, reject) => {
        modelBarang.updateOne({ _id: ObjectId(id) }, data)
            .then(() => {
                resolve({
                    status: true,
                    msg: 'Berhasil merubah data'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi kesalahan pada server'
                })
            })
    })
exports.updateGambar = (id, gambar) =>
    new Promise(async (resolve, reject) => {
        modelBarang.updateOne({ _id: ObjectId(id) }, { $set: { gambar: gambar } })
            .then(() => {
                resolve({
                    status: true,
                    msg: 'Berhasil merubah data'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi kesalahan pada server'
                })
            })
    })
exports.DeleteBarang = (id) =>
    new Promise(async (resolve, reject) => {
        modelBarang.deleteOne({ _id: ObjectId(id) })
            .then(() => {
                resolve({
                    status: true,
                    msg: 'Berhasil menghapus data'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Server tidak meresponse'
                })
            })
    })