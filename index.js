//ESSE SCRIPT FOI DISPONIBILIZADO OFICIALMENTE POR: @LEVISCD NO INSTAGRAM E GITHUB.

const connect = require('./connection')
const fs = require("fs")
const axios = require('axios');
async function start() {
const client = await connect() 
 client.ev.on('messages.upsert', async ({ messages }) => {
    const body = messages[0]
  const jid = body.key.remoteJid
  const owner = ["seunumero@s.whatsapp.net"]
  const messageId = body.key.id
  const fromMe = body.fromMe
  const isGroup = body.key.remoteJid.endsWith('@g.us') 
  const prefix = ['/']
  const nome = body.pushName || "Usuário (a)"
  const textmsg = body.message.conversation.toLowerCase();

  if (isGroup) {
    return; // Não responder a mensagens de grupos, para responder so tirar esse if.
  }
  // Criar uma closure que usa o body, o jid e o client do escopo externo
  function reply(text) {
    // Enviar uma mensagem para o jid, usando o text e o id do body como quoted
    client.sendMessage(jid, {text: text}, {quoted: body})
  }
  // caso contrário, prosseguir com o tratamento do comando
  const command = body.message.conversation.split(prefix)[1]
  const textuser = body.message.conversation.toLowerCase();
    

  if (
    textuser.includes("oi") ||
    textuser.includes("ou") ||
    textuser.includes("opa") ||
    textuser.includes("olá") ||
    textuser.includes("tudo bem") ||
    textuser.includes("tudo bem?") ||
    textuser.includes("bom") ||
    textuser.includes("boa") ||
    textuser.includes("dia") ||
    textuser.includes("noite") ||
    textuser.includes("tarde")
  ) {
    async function sendMessages() {
      await client.sendMessage(jid, {
        react: {
          text: "💻",
          key: body.key
        }
      });
    }
    client.sendMessage(jid, { 
          image: fs.readFileSync("menu.jpeg"), 
          caption: `colocar uma mensagem aqui`
sendMessages();
  }
  switch (command) {
   
    case "help":
      case "menu":
        case "comandos":
     // função asincrona pra nao dar erro ao enviar
  
      async function sendMessages() {
        await client.sendMessage(jid, {
          react: {
            text: "💻",
            key: body.key
          }
        });
        
        client.sendMessage(
          jid, 
          { 
              text: ` Olá, ${nome}!

 ╭━⪩ MENU DE COMANDOS ⪨━
 ▢ /ping - Checa o Ping.
 ▢ /menu - Checa o Menu.
 ╰━━─「🚀」─━━`
          }, {quoted: body}
      )
      }
      
      sendMessages();
      break;
   
   case "ping":
        reply("Pong")
    break

    // Adicionar mais cases para outros comandos
    default:
      break;
  }
 
    })
}

start();
