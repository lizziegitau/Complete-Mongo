const { MongoClient} = require('mongodb')

let dbConnection
let uri = 'mongodb+srv://Elizabeth:eliza0505MJ@cluster0.zl5ajkt.mongodb.net/firstdatabase?retryWrites=true&w=majority'

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then(client => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection
}