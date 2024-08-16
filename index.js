const TelegramApi = require("node-telegram-bot-api")

const token = "7269495465:AAFYlwwjh1KWy6bYLnqfzsz8y_0ZkyUWwK4"

const bot = new TelegramApi(token, {polling: true})

bot.on("message", msg => {
   console.log(msg)
   const text = msg.text
   const chatId = msg.chat.id

   bot.sendMessage(chatId, `you innput me ${text}`)
})
