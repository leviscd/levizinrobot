const{ default: makeWASocket, DisconnectReason, BufferJSON, useMultiFileAuthState, MessageType, MessageOptions, Mimetype} = require("@whiskeysockets/baileys")
const fs = require("fs")

async function connect() {
    const { state, saveCreds } = await useMultiFileAuthState('./sessao/session')
    const client = makeWASocket({
        printQRInTerminal: true,
        auth: state,
        defaultQueryTimeoutMs: undefined //Após um período é para gerar uma nova sessão?
    })
    client.ev.on('connection.update', (update) => {
  const { connection, lastDisconnect } = update
  if (connection == 'close') {
  const shouldReconnect = lastDisconnect.error?.output.statusCode == DisconnectReason.loggedOut

  if (shouldReconnect){
    connect();
  }
}
    })
    client.ev.on('creds.update', saveCreds)
    return client
}
module.exports = connect;