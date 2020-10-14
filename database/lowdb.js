const low = require('lowdb')
const {clone} = require('lodash')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

const config = {
    password: null,
    maxTemperature: null,
    userInfoUrl: 'localhost'
}



const userInfo = []

const data = []

db.defaults({config, userInfo, data}).write()

exports.setDB = (name, value) => {
    db.set(name, value).write()
}

exports.getDB = name => clone(db.get(name).value())

exports.addDB = (name, value) => {
    db.get(name).unshift(value).write()
}
