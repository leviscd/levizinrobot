//ESSE SCRIPT FOI DISPONIBILIZADO OFICIALMENTE POR: @LEVISCD NO INSTAGRAM E GITHUB.

const connect = require('./connection')
const fs = require("fs")
const axios = require('axios');
const { exec } = require('child_process')
const path = require('path')
function evalAsync(code) {
  return new Promise((resolve, reject) => {
    try {
      const result = eval(code);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

async function start() {
const client = await connect()


  client.ev.on('messages.upsert', async ({ messages }) => {
  const body = messages[0];


  
  const jid = body.key.remoteJid
  const Owner = ["seudono@s.whatsapp.net"]
  const messageId = body.key.id
  const fromMe = body.key.fromMe
  const isGroup = body.key.remoteJid.endsWith('@g.us') 
  const prefix = '/'
  const nome = body.pushName || "Usuário(a)"
 console.log(body) //opcional

  function reply(text) {
    // Enviar uma mensagem para o jid, usando o text e o id do body como quoted no caso isso seria p tipo que enviar de forma simples marcando a mensagem
    client.sendMessage(jid, {text: text}, {quoted: body})
  }
 
  
  // caso contrário, prosseguir com o tratamento do comando
  const messageText = body.message && body.message.conversation || '';
const extendedText = body.message?.extendedTextMessage?.text || '';
const buttonsResponse = body.message?.buttonsResponseMessage?.selectedDisplayText || '';
const imageCaption = body.message?.imageMessage?.caption || '';
const documentCaption = body.message?.documentMessage?.caption || '';
const videoCaption = body.message?.videoMessage?.caption || '';

const messageOptions = {
  messageText,
  extendedText,
  buttonsResponse,
  imageCaption,
  documentCaption,
  videoCaption
};

const textuser = messageOptions.messageText || messageOptions.extendedText || messageOptions.buttonsResponse || messageOptions.imageCaption || messageOptions.documentCaption || messageOptions.videoCaption;

  const command = textuser.split(prefix)[1];
  const args = textuser.split(' ').slice(1);
  // ...


if (/^(oi|ou|opa|olá|tudo bem\??|bom|boa|dia|noite|tarde)$/.test(textuser)) {
  async function sendMessages() {
    await client.sendMessage(jid, {
      react: {
        
 text: `👋🏻`,
 key: body.key
      }
    });
  }
 await client.sendMessage(jid, {
    text: `😊 *Olá, ${nome}, eu sou um bot desenvolvido para testes.`,
  }, { quoted: body });
  sendMessages();
}
// ...


switch (command) { 
case 'restart':
case 'r':
case 'reiniciar':
  exec('node index.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao reiniciar o bot: ${error}`);
    } else {
      console.log('Bot reiniciado com sucesso.');
    }
  });
  
break
default:
  break;
  }
    })

}
start();
