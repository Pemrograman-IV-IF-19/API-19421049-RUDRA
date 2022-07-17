const modelKeranjang = require('../model/keranjangModel')
const monggoose = require('mongoose')
const ObjectId = monggoose.Types.ObjectId

exports.inputKeranjang = (data) =>
    new Promise(async (resolve, reject) => {
        modelKeranjang.create(data)
            .then(() => {
                console.log(data)
                resolve({
                    status: true,
                    msg: 'Berhasil Menambah Keranjang'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: ' Terjadi kesalahan pada server'
                })
            })
    })

exports.getAllKeranjang = (idUser) =>
    new Promise(async (resolve, reject) => {
        modelKeranjang.aggregate([
            {$match: {idUser: ObjectId(idUser)}},
            {
                $lookup:
                {
                    from: "users",
                    localField: "idUser",
                    foreignField: "_id",
                    as: "user"
                },
                
            },
            {
                $lookup:{
                    from: "barangs",
                    localField: "idBarang",
                    foreignField: "_id",
                    as: "barang"
                }
            },
             { $unwind: "$user" },
             { $unwind: "$barang" }
            ])
            .then(dataKeranjang => {
                if (dataKeranjang.length > 0) {
                    resolve({
                        status: true,
                        msg: 'Berhasil memuat data',
                        data: dataKeranjang
                    })
                } else {
                    reject({
                        status: false,
                        msg: 'keranjang anda kosong'
                    })
                }
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi kesalahan pada server'
                })
            })
    })
    exports.getKeranjangById = (id) =>
    new Promise(async (resolve, reject) => {
        modelKeranjang.aggregate([
            {$match: {_id: ObjectId(id)}},
            {
                $lookup:
                {
                    from: "users",
                    localField: "idUser",
                    foreignField: "_id",
                    as: "user"
                },
                
            },
            {
                $lookup:{
                    from: "barangs",
                    localField: "idBarang",
                    foreignField: "_id",
                    as: "barang"
                }
            },
             { $unwind: "$user" },
             { $unwind: "$barang" }
            ])
            .then(dataKeranjang => {
                if (dataKeranjang) {
                    resolve({
                        status: true,
                        msg: 'Berhasil memuat data',
                        data: dataKeranjang
                    })
                } else {
                    reject({
                        status: false,
                        msg: 'keranjang anda kosong'
                    })
                }
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi kesalahan pada server'
                })
            })
    })

    exports.updateKeranjang = (id, data) =>
    new Promise(async (resolve, reject) => {
        modelKeranjang.updateOne({ _id: ObjectId(id) }, data)
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
    exports.deleteKeranjang = (id) =>
    new Promise(async (resolve, reject) => {
        modelKeranjang.deleteOne({ _id: ObjectId(id) })
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