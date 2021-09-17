require('./util/config')
const { Intents, Options } = require('discord.js')
const Bot = require('./bot')
const errorPrint = require('./util/errorPrint')

const bot = new Bot({
    shards: 'auto',
    restGlobalRateLimit: 50,
    makeCache: Options.cacheWithLimits({
        MessageManager: 1,
    }),
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

//
// If unhandled promise rejection is
// not handled node v16 will crash the process
//
process.on('unhandledRejection', (error) => {
    errorPrint(error, { description: 'Unhandled error' })
})

bot.build().then()
