const path = require('path')
const { Client, Intents, Collection } = require('discord.js')
const { GetFiles } = require('./FileReader')
const { execPath } = require('process')
const { execute } = require('../events/ready')

class RobodJS extends Client{
    constructor(config, options = {intents: [Intents.FLAGS.GUILDS]}) {
        super(options)
        
        this.token = process.env.token || config.token

        this.prefix = config.prefix
        this.commands = new Collection()
        this.aliases = new Collection()

        this.ReadCommands(config.commands)
        this.ReadEvents(config.events)
    }

    ReadEvents(event_dir) {
        const events = GetFiles(event_dir)
        events.forEach(event => {
            if (event.once) this.once(event.name, (...args) => event.execute(...args))
            else this.on(event.name, (...args) => event.execute(...args))
        })
    }
    
    ReadCommands(command_dir) {
        const commands = GetFiles(command_dir)
        commands.forEach(command => {
            this.commands.set(command.data.name, command)
        })
    }

    Login() {
        this.login(this.token);
    }
}

module.exports = RobodJS
