const db = require('../db/mongoose.connection')
const raw = fn =>
      (req, res, next) => {
        db.connect()
        .then(()=>{
          Promise.resolve(fn(req, res, next))
          .catch(next);
        })
        .catch(next);
      };
module.exports = raw;