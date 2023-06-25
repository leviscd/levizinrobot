//ESSE SCRIPT FOI DISPONIBILIZADO OFICIALMENTE POR: @LEVISCD NO INSTAGRAM E GITHUB.

const connect = require('./connection')
const fs = require("fs")
const axios = require('axios');
async function start() {
const client = await connect() 
 client.ev.on('messages.upsert', async ({ messages }) => {
    const body = messages[0]
  const jid = body.key.remoteJid
  const owner = ["idaqui@s.whatsapp.net"]
  const messageId = body.key.id
  const fromMe = body.fromMe
  const isGroup = body.key.remoteJid.endsWith('@g.us') 
  const prefix = ['/']
  const nome = body.pushName || "Usuário (a)"
  
 console.log(body) //opcional
  
  if (isGroup) {
    return; // Não responder a mensagens de grupos
  }

  function reply(text) {
    // Enviar uma mensagem para o jid, usando o text e o id do body como quoted no caso isso seria p tipo que enviar de forma simples marcando a mensagem
    client.sendMessage(jid, {text: text}, {quoted: body})
  }
  // caso contrário, prosseguir com o tratamento do comando
  const command = body.message.conversation.split(prefix)[1]
  const textuser = body.message.conversation.toLowerCase();


if (/^(oi|ou|opa|olá|tudo bem\??|bom|boa|dia|noite|tarde)$/.test(textuser)) {
  async function sendMessages() {
    await client.sendMessage(jid, {
      react: {
        text: "💻",
        key: body.key
      }
    });
  }

  client.sendMessage(jid, {
    image: fs.readFileSync("menu.jpeg"), //opcional
    caption: `texto p resposta desses conteudos acima`
  }, { quoted: body });

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
              image: fs.readFileSync("menu.jpeg"), 
              caption: ` Olá, ${nome}!

╭━━━━━━━━━━━━⪩  MENU DE COMANDOS ⪨━━━━━━━━━━━━╮
│
│🌟 /ping - Checa o Ping.
│🍽️ /menu - Checa o Menu.
╰━━━━━━━━━━━━━╯`
          }, {quoted: body}
      )
      }
      
      sendMessages();
      break;
    
    
    
    // Adicionar mais cases para outros comandos
    default:
      break;
  }
    })
}

start();

