const mongoose    = require('mongoose')
const marker = require('@ajar/marker')

const { NODE_ENV, DB_LOCAL,DB_REMOTE } = process.env;

const uri = NODE_ENV === 'local-dev' ? DB_LOCAL : DB_REMOTE ;
// const uri = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

let instance;

const connect = async ()=> {
    if(!instance){
      marker.info('DB uri ✨ ',uri)
      instance = await mongoose.connect(uri, options)
      const db = NODE_ENV === 'local-dev' ? 'local MongoDB' : 'Atlas'
      marker.magenta(` ✨  ${db} Connection created ✨ `)
    }
}

module.exports = {connect};

