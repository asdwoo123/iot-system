const low = require('lowdb')
const { range } = require('lodash')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ data: [] }).write()

if (db.get('data').value().length === 0) {

    console.log('working....')
    const d = range(365000).map(n => ({
        id: n + 1,
        ...range(20).map(nn => ({
            [`data${nn + 1}`]: Math.floor(Math.random() * 100)
        }))
    }))

    db.set('data', d).write()

    console.log('complete!')
}
