'use strict';
// const db = require('./db/mongoose.connection')
const marker = require('@ajar/marker')
const app = require('./server/api');

const { API_LOCAL_PORT,API_LOCAL_HOST } = process.env;

//start the express api server
(async ()=> {
    //connect to mongo db
    // await db.connect();  
    await app.listen(API_LOCAL_PORT,API_LOCAL_HOST);
    marker.magenta(`api is live on`,`  ✨ ⚡  http://${API_LOCAL_HOST}:${API_LOCAL_PORT} ✨ ⚡`);  
  })().catch(error=> marker.error(error))
  
  
  
  
  