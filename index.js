const connect = require('./connection')
const fs = require("fs")
const axios = require('axios');
async function start() {
const client = await connect() 
 client.ev.on('messages.upsert', async ({ messages }) => {
    const body = messages[0]
  const jid = body.key.remoteJid
  const owner = ["556299269098@s.whatsapp.net"]
  const messageId = body.key.id
  const fromMe = body.fromMe
  const isGroup = body.key.remoteJid.endsWith('@g.us') 
  const prefix = ['/']
  const nome = body.pushName || "Usuário (a)"
  const textmsg = body.message.conversation.toLowerCase();

  if (isGroup) {
    return; // Não responder a mensagens de grupos
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
          caption: `
📢💥💰 Aproveite o potencial explosivo da Gabi, a mais nova inteligência artificial no whatsapp para impulsionar seus negócios! 💼🚀

🌟🔥 Olá, caro empreendedor! Prepare-se para uma revolução no mundo dos negócios com a poderosa Gabi, a mais nova Inteligência Artificial do Whatsapp desenvolvida pela *Dev's Builders.* 💪🤖

💡💥 Já imaginou a explosão de lucratividade que você pode alcançar com o sistema da Gabi? 💰💥 Deixe-me te contar o segredo: com sua inteligência avançada, ela administra grupos como ninguém e realiza divulgações estratégicas em horários de pico em grupos locais e de várias cidades! 🌍📈

🎯🔥 Mas vamos falar de negócios reais aqui! Que tal fazer rifas onlines e divulgar com a Gabi? Contrate a Gabi a um preço acessível e veja a mágica acontecer! 🎉 Ela irá divulgar suas rifas nos grupos três vezes ao dia segundo sua contratação: cedo, tarde e noite. Imagine o boom de vendas que você terá ao alcançar uma audiência por suas rifas! 🎟️🔥

🎁🔮 E não para por aí! A Gabi é perfeita para realizar divulgações de por exemplos sorteios online que vão deixar todo mundo de queixo caído! Sua capacidade de se conectar a diversos grupos garante a visibilidade estelar que você precisa para atrair participantes e criar um verdadeiro furacão de expectativas em torno dos seus sorteios! 🌪️🌐

- Mas espera, isso é só o começo! 💼💥 Com a Gabi, você pode desbravar um universo de oportunidades para alavancar seu negócio! Seja inovador, criativo e deixe a Gabi ser sua aliada explosiva no caminho para o sucesso empresarial! 💥🚀

📣🚀 Chegou a hora de detonar seus resultados financeiros! Entre em contato conosco agora mesmo e descubra como a Gabi pode explodir seus lucros e colocar seu empreendimento em um patamar estelar! 💼🔥`}, {quoted: body});

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

 ╭━⪩ MENU DE COMANDOS ⪨━
 ▢ /ping - Checa o Ping.
 ▢ /menu - Checa o Menu.
 ▢ /valores - Checa os valores e planos de contratação.
 ▢ /duvidas - Aqui você verifica as dúvidas, o que é a Gabi, o que é uma inteligência artificial, como funciona nossos sistemas quem é nossa desenvolvedora.
 ╰━━─「🚀」─━━`
          }, {quoted: body}
      )
      }
      
      sendMessages();
      break;
      case 'planos':
        case 'valores':
          case 'valor':
            async function sendMensagem() {
              await client.sendMessage(jid, {
                react: {
                  text: "🚀",
                  key: body.key
                }
              });
              
              client.sendMessage(
                jid, 
                { 
                    text: ` 💥🚀 ${nome}, Descubra os planos explosivos da Gabi para impulsionar seu negócio! 💼💰

Com a Gabi, você tem a oportunidade de escolher entre quatro planos incríveis, cada um com estratégias de marketing exclusivas e valores acessíveis, para alcançar o sucesso que você merece. Confira:

🔥 Plano Diário: por apenas R$30 mensais, a Gabi vai se dedicar diariamente à divulgação dos seus produtos ou serviços nos grupos mais estratégicos, garantindo visibilidade constante para o seu negócio. Alcance potenciais clientes todos os dias e veja suas vendas decolarem!

💥 Plano Semanal: com um investimento mensal de R$60, você terá a Gabi trabalhando incansavelmente durante toda a semana para promover seu empreendimento. Aproveite a potência das divulgações nos grupos certos e aproveite o impulso semanal para conquistar um público engajado.

✨ Plano Quinzenal: para um marketing mais consistente, o Plano Quinzenal é ideal. Com um investimento de R$100 mensais, a Gabi estará em ação nos grupos estratégicos por duas semanas consecutivas, aumentando sua visibilidade e atraindo novos clientes de forma consistente.

🌟 Plano Mensal: o plano mais completo e vantajoso! Por apenas R$150 mensais, a Gabi será sua aliada durante todo o mês, trabalhando arduamente para divulgar seus produtos e serviços nos momentos de maior impacto. Alcance um público vasto e diversificado e colha os frutos do seu sucesso mensalmente.

🚀💼 Com qualquer um desses planos, você terá a expertise da Gabi, uma Inteligência Artificial altamente capacitada, a seu serviço, proporcionando estratégias de marketing eficazes e resultados surpreendentes. Aproveite essa oportunidade única de alavancar seu negócio a um custo acessível!

💥📈 Não espere mais! Entre em contato conosco agora mesmo e escolha o plano explosivo que melhor se adequa às suas necessidades. A Gabi está pronta para ser sua parceira de sucesso e fazer seu negócio decolar! 💥🚀`
   }, {quoted: body}
            )
            }
            
            sendMensagem();
            break
   case "teste":
        reply("nao vai")
    break

    // Adicionar mais cases para outros comandos
    default:
      break;
  }
 
    })
}

start();
