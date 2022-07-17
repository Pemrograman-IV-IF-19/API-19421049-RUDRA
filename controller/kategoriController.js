const { reject } = require('bcrypt/promises')
const { model } = require('mongoose')
const modelKategori = require('../model/kategori')
const monggoose = require ('mongoose')
const objectId = monggoose.Types.ObjectId

exports.inputKategori = (data) =>
    new Promise(async (resolve, reject) => {
        await modelKategori.create(data)
            .then(() => {
                resolve({
                    status: true,
                    msg: 'Berhasil membuat kategori'
                })
            }).catch(err => {
                reject ({
                    status: false,
                    msg: 'Terjadi kesalahan pada server'
                })
            })
    })

    exports.getAllKategori= () =>
        new Promise(async (resolve,reject) => {
            modelKategori.find({})
            .then(dataKategori => {
                if (dataKategori.length > 0) {
                    resolve({
                        status:true,
                        msg: 'Berhasil membuat data',
                        data: dataKategori
                    })
                } else {
                    reject({
                        status: false,
                        msg: 'Tidak data kategori'
                    })
                }
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi kesalahan pada server'
                })
            })
        })

        exports.getKategoriByName= (name) =>
        new Promise(async (resolve,reject) => {
            modelKategori.findOne({namaKategori: name })
            .then(dataKategori => {
                if (dataKategori) {
                    resolve({
                        status:true,
                        msg: 'Berhasil membuat data',
                        data: dataKategori
                    })
                } else {
                    reject({
                        status: false,
                        msg: 'Tidak data kategori' + name
                    })
                }
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi kesalahan pada server'
                })
            })
        })

        exports.updateKategori = (id,data) =>
            new Promise(async (resolve,reject) => {
                modelKategori.updateOne({ _id: objectId(id) }, data)
                .then(() => {
                    resolve({
                        status: true,
                        msg: 'Berhasil merubah data '
                    })
                }).catch(err => {
                    reject({
                        status: false,
                        msg: 'Terjadi kesalahan pada server'
                    })
                })
            })

exports.hapusKategori = (id) =>
    new Promise(async (resolve, reject) => {
        modelKategori.deleteOne({ _id: objectId(id) })
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