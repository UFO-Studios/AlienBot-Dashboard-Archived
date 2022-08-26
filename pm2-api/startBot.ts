const pm2 = require('pm2')
import * as path from 'config.json';
//const path2 = "/home/AlienBot-2.0/index.js"

pm2.start({
    script    : path,
    name      : 'bot'
})

export{}