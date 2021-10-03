const path = require('path');

module.exports = {
    prefix: '/', //Δεν ξέρω γιατί είναι αυτό εδώ
    clientId: '889989628772376617',
    guildId: '',
    token: '',
    
    home: __dirname,
    commands: path.join(__dirname, '/commands'),
    events: path.join(__dirname, '/events')
}

