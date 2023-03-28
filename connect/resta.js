process.on("uncaughtException", console.error)
require('./settings')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const { parseMention, smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, getRandom, generateProfilePicture, reSize} = require('../lib/myfunc')
const axios = require('axios')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { fromBuffer } = require('file-type')
const fs = require('fs')
const moment = require('moment-timezone')
const util = require('util')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const path = require('path')
const PhoneNumber = require('awesome-phonenumber')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const qrcode = require('qrcode')
const { createHash } = require('crypto')
const similarity = require('similarity')
const acrcloud = require('acrcloud')
const acr = new acrcloud({ host: "identify-ap-southeast-1.acrcloud.com", access_key: "b1cc283b4fb72483ebb6ea9c53512331", access_secret: "xyqJGTZRTrUotaraHEjji00WBClx7RpWozywdANq"})
const yts = require('yt-search')
const {  tiktokdl, tiktokdlv3, tiktokdlv2, instagramdl, instagramdlv2, instagramdlv3, instagramdlv4, facebookdl, facebookdlv2} = require('@bochilteam/scraper')
const simple = require('../lib/myfunc')
const { mediafireDl } = require('../lib/mediafire')
const textpro = require('../lib/textpro')
const { pinterest, hentai, wallpaper, wikimedia, quotesAnime } = require('../lib/scraper')
const {slot, allmenu, bahasa, sewa, readme, channel, snk}= require('./help')
const {listdm1, listdm2, listdm3, listdm4, listdm5, listdm6, listdm7}= require('./help')
const noapi = require('../lib/api') 
const api2 = require('../lib/api2') 
const { toAudio, toPTT} = require('../lib/converter')
const { yta, ytv } = require('../lib/y2mate')


module.exports = Resta = async(Resta, m, chatUpdate, store) => {
           try {
           const { type, quotedMsg, mentioned, now, fromMe } = m
           var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowI || m.text) : ''
           var budy = (typeof m.text == 'string' ? m.text : '')
           const prefix = /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~zZ+Ã—_*!#$%^&./\\Â©^]/.test(body) ? body.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~zZ+Ã—_*!#$,|`Ã·?;:%abcdefghijklmnopqrstuvwxyz%^&./\\Â©^]/gi) : '#'
           const isCmd = body.startsWith(prefix)
           const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
           const args = body.trim().split(/ +/).slice(1)
           const pushname = m.pushName || "No Name"
           const botNumber = await Resta.decodeJid(Resta.user.id)
           const isOwner = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
           const itsMe = m.sender == botNumber ? true : false
           const text = args.join(" ")
           const q = args.join(" ")
           const quoted = m.quoted ? m.quoted : m
           const mime = (quoted.msg || quoted).mimetype || ''
           const qmsg = (quoted.msg || quoted)
           const isMedia = /image|video|sticker|audio/.test(mime)
           const from = mek.key.remoteJid
           const isGroup = m.key.remoteJid.endsWith('@g.us')
           const groupMetadata = m.isGroup ? await Resta.groupMetadata(m.chat).catch(e => {}) : ''
           const groupName = m.isGroup ? groupMetadata.subject : ''
           const participants = m.isGroup ? await groupMetadata.participants : ''
           const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
           const groupOwner = m.isGroup ? groupMetadata.owner : ''
           const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
           const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
           const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
           const isNumber = x => typeof x === 'number' && !isNaN(x)
           const time = moment().tz('asia/jakarta').format("hh:mm:ss")
           const wib = moment.tz('asia/jakarta').format('hh:mm:ss')
           const wita = moment.tz('asia/makassar').format("hh:mm:ss")
           const wit = moment.tz('asia/jayapura').format("hh:mm:ss")
           const hour_now = moment().format('hh:mm:ss') 
           let user = db.data.users[m.sender]
            try {
            m = simple.smsg(Resta, m) || m
            if (!m) return
            m.exp = 0  
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
            if (!isNumber(user.afkTime)) user.afkTime = -1
            if (!('afkReason' in user))
            user.afkReason = ''
            if (!('pasangan' in user))
            user.pasangan = ''
            if (!('registered' in user))
            user.registered = false
            if (!user.registered) {
            if (!('name' in user)) 
            user.name = Resta.getName(m.sender)
            if (!isNumber(user.age))
            user.age = -1
            if (!isNumber(user.regTime))
            user.regTime = -1
            }
            if (!isNumber(user.level)) user.level = 0
            if (!('autolevelup' in user)) user.autolevelup = true
            if (!isNumber(user.exp)) user.exp = 0
            } else global.db.data.users[m.sender] = {
            afkTime: -1,
            afkReason: '',
            pasangan: '',
            registered: false,
            name: Resta.getName(m.sender),
            age: -1,
            regTime: -1,
            exp: 0,
            }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
            if (!('antilink' in chats)) chats.antilink = false
            if (!('welcome' in chats)) chats.welcome = false
            if (!('maintenance' in chats)) chats.maintenance = false
            if (!('antivionce' in chats)) chats.antivionce = false
            } else global.db.data.chats[m.chat] = {
            antivionce: false,
            antilink: false,
            maintenance: false,
            }
            } catch (err) {
            console.error(err) 
            }
            function clockString(ms) {
            let h = Math.floor(ms / 3600000)
            let m = Math.floor(ms / 60000) % 60
            let s = Math.floor(ms / 1000) % 60
            console.log({ms,h,m,s})
            return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
            }
            function msToTime(duration) {
            var milliseconds = parseInt((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24)    
            hours = (hours < 10) ? "0" + hours : hours
            minutes = (minutes < 10) ? "0" + minutes : minutes
            seconds = (seconds < 10) ? "0" + seconds : seconds
            return hours + " jam " + minutes + " menit " + seconds + " detik"
            }
            const pickRandom = (arr) => {
	        return arr[Math.floor(Math.random() * arr.length)]
		    }
     
            if (global.db.data.chats[m.chat].antivionce) {
            if (m.mtype == 'viewOnceMessage') {
            teks = `「 *Anti ViewOnce Message* 」\n➯ Name : ${m.pushName}\n➯ User : @${m.sender.split("@")[0]}\n➯ Clock : ${moment.tz('Asia/Kolkata').format('HH:mm:ss')} \n➯ Date : ${moment.tz('Asia/Kolkata').format('DD/MM/YYYY')}\n➯ MessageType : ${m.mtype}`
            Resta.sendTextWithMentions(m.chat, teks, m)
            await sleep(5000)
            m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => m.reply(`Maybe it's been opened by a bot`))
            }
            }
            if (global.db.data.chats[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
            if (!isBotAdmins) return m.reply(mess.botAdmin)
            var gclink = (`https://chat.whatsapp.com/`+await Resta.groupInviteCode(m.chat))
            var isLinkThisGc = new RegExp(gclink, 'i')
            var isgclink = isLinkThisGc.test(m.text)
            if (isAdmins && isOwner) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
            if (isgclink) return m.reply(`Link Grup Lain Terdeteksi, Link Group Ini Ternyata 😆`)
            m.reply(`Link Grup Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
            sleep(5000)
            Resta.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
            }
            for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`Jangan tag dia!Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`.trim())
            }
            if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            Resta.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''} Selama ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
            }
            if (m.message) { // push cmd, read, dan presence
            Resta.readMessages([m.key])
            Resta.sendPresenceUpdate('recording', m.chat)
            console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.green(command), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
            } 
	if (m.message) { // auto set bio
		let times = speed()
    let late = speed() - times
		Resta.updateProfileStatus(`Speed: ${late.toFixed(4)} Ms | Runtime: ${runtime(process.uptime())} | RESELLER DENOM🤙`)
	}
            const qtod = m.quoted? "true":"false"
            

switch(command) {
case 'qc': {
async function generateQuote(text, avatar, username) {
    const data = {
      "format": "png",
      "backgroundColor": "#ffffff",
      /*
      TODO
      "media": [{}],
      "mediaType": "sticker",
      */
      "messages": [
      {
          "avatar": avatar ? true : false,
          "from": {
            "name": username,
            "photo": {
              "url": avatar
          }
      },
      "text": text,
      "replyMessage": {} //TODO
  }
  ]
  };
  let res = await fetch('https://bot.lyo.su/quote/generate', { method: 'post', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'} })
  if (!res.ok) throw `${res.status} ${res.statusText}`
  const json = await res.json()
  return Buffer.from(json.result.image, 'base64')
}
const quotedMessage = m.hasQuotedMsg ? await m.getQuotedMessage() : m
    const teks = m.quoted ? m.quoted.text : text
    if (teks === "") return m.reply(`Input message:\n${command} hello world`);
    const avatar = await Resta.profilePictureUrl(m.quoted ? m.quoted.sender : m.sender, 'image')
    const username = await Resta.getName(m.quoted ? m.quoted.sender : m.sender)
    const quote = await generateQuote(teks, avatar, username)
    await Resta.sendImageAsSticker(m.chat, quote, m, { packname: global.packname, author: global.author })
}
break
case 'telestick':
case 'sticktele':
case 'telesticker': {
async function telegramStic(url) {
    let packName = url.replace("https://t.me/addstickers/", "")
    let resOne = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
    if (!resOne.ok) throw `${resOne.status} ${resOne.statusText}`
    let jsonOne = await resOne.json()
    let sticArr = []
    for (let i of jsonOne.result.stickers) {
        let fileId = i.thumb.file_id
        let resTwo = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
        let jsonTwo = await resTwo.json()
        sticArr.push("https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jsonTwo.result.file_path)
    }
    return {
        name: jsonOne.result.name,
        title: jsonOne.result.title,
        result: sticArr
    }
    }
if (!args || !args[0]) return m.reply(`Input URL:\n${command} https://t.me/addstickers/shironacry`);
    if (!args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) return m.reply(`Input URL:\n${usedPrefix + command} https://t.me/addstickers/twohundredthree`);
    let stik = await telegramStic(args[0])
    for (let sticker of stik.result) {
        const res = await fetch(sticker)
        let buff = Buffer.from(await res.arrayBuffer())
        //await m.reply( new MessageMedia((await fileTypeFromBuffer(buff)).mime, buff.toString("base64")), false, { sendMediaAsSticker: true, stickerName: `jamsut · alok`, stickerAuthor: 'efef', stickerCategories: ['😅'] } )
        await Resta.sendImageAsSticker(m.chat, buff, m, { packname: global.packname, author: global.author })
    }
    }
break
case 'c':
case 'getcase':
if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("./connect/resta.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
m.reply(`${getCase(q)}`)
break
case 'setppbot': {
            if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
            if (!quoted) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            if (!/image/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            if (/webp/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            var media = await Resta.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
            var { img } = await generateProfilePicture(media)
            await Resta.query({
            tag: 'iq',
            attrs: {
            to: botNumber,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            fs.unlinkSync(media)
            m.reply(`Sukses`)
            }
                break
case 'getpic': {
if (qtod === "true") {
try {
pporg = await Resta.profilePictureUrl(m.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
Resta.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await Resta.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
Resta.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
break
case 'npmjs': {
            if (!q) return m.reply(`Kirim perintah ${prefix}npmjs *query*\nContoh: ${prefix}npmjs axios`)
            axios.get(`https://www.npmjs.com/search/suggestions?q=${q}`).then(x => {
                let listnpm = "*「 NPMJS-SEARCH 」*\n\n"
                for (let y = 0; y < x.data.length; y++) {
                    listnpm += `• *Name:* ${x.data[y].name}\n• *Scope:* ${x.data[y].scope}\n• *Publisher:* ${x.data[y].publisher.username}\n• *Link:* ${x.data[y].links.npm}\n• *Date:* ${x.data[y].date}\n• *Description:* ${x.data[y].description}\n\n`
                }
			Resta.sendMessage(from, {image: { url: "https://static.npmjs.com/5f6e93af5bf0f5dcdd1eecdac99f51ee.png"}, caption: listnpm.trim()}, {quoted:m})
            })
            }
            break
case 'sfile':
case 'sfilemobi':{
if (args.length < 0) return m.reply('linknya?')
axios.get(`${lann}/api/download/sfilemobi?url=${args[0]}&apikey=${lannkey}`).then(({ data }) => {
					var capt= `Filename: ${data.result.filename}
Size: ${data.result.filesizeH}
Type: ${data.result.type}
Mimetype: ${data.result.mimetype}
					
Sebentar, Masih diproses!!!`
					Resta.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/87fc93afbc44e33cd7b88.jpg'}, caption: capt }).then(() => {
						Resta.sendMessage(m.chat, { document: { url: data.result.url }, mimetype: data.result.mimetype, fileName: `${data.result.filename}.${data.result.type}` })
					})
				})
				.catch(console.error)
				}
			break
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!text) return m.reply(`Kirim.reply Foto Dengan Caption ${prefix + command} *teks*`)
//if (text.includes('|')) return m.reply(`Kirim.reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim.reply Foto Dengan Caption ${prefix + command} *teks*`)
arg = args.join(' ')
mee = await Resta.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('../lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = Resta.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'brainly': {
            if (!q) m.reply(`Kirim perintah: ${prefix}brainly *soal*\nExample: ${prefix}brainly apa itu dpr`)
            const brainly = require('brainly-scraper')
            brainly(q, 8, "id").then(res => {
                let resultbrainly = `「 *BRAINLY-SEARCH* 」\n\n`
                for (let x = 0; x < res.data.length; x++) {
                    resultbrainly += `• *Soal:* ${res.data[x].pertanyaan}\n• *Jawaban:* ${res.data[x].jawaban[0].text.replace('Jawaban:', '').trim()}\n\n`
                }
                m.reply(resultbrainly.trim())
            })
            }
            break
case 'toimage': case 'toimg': {
if (!m.quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
m.reply(mess.wait)
let media = await Resta.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Resta.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'mediafire': {
if (args.length < 1) return m.reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return m.reply(mess.Iv)
m.reply(mess.wait)
cok = args.join(' ')
res = await mediafireDl(cok)
result = `Media Fire Downloader

📌 *Nama :* ${res[0].nama}

📌 *Ukuran :* ${res[0].size}

📌 *Link :* ${res[0].link}

_*Tunggu Proses Mengirim Media......⏳*_`
m.reply(result)
Resta.sendMessage(m.chat, {document: {url: res[0].link}, mimetype: res[0].mime, fileName: res[0].nama}, {quoted:m})
//sendMediaURL(res[0].link, { document, mimetype: res[0].mime, filename: res[0].nama }, { quoted: m })
}
break
case 'wa': {
	let wangsa = '0@s.whatsapp.net'
	Resta.sendMessage(m.chat, { text: `@${wangsa.split('@')[0]}`, mentions:[wangsa] }, { quoted: m })}
break
case 'tagme': {
Resta.sendMessage(m.chat, { text: `@${m.sender.split('@')[0]} Sayang 😘`, mentions:[m.sender] }, { quoted: m })
}
break
case 'speed':
case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py --share')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
Resta.relayMessage(m.chat, 
{ liveLocationMessage: {
  degreesLatitude: 0,
  degreesLongitude: 0,
  accuracyInMeters: 0,
degreesClockwiseFromMagneticNorth: 2,
caption: respon,
sequenceNumber: 2,
timeOffset: 3,
jpegThumbnail: await (await fetch('https://telegra.ph/file/3911d7aaaa8733314f70f.png')).buffer(), 
contextInfo:{externalAdReply:{showAdAttribution: true}},
}}, {})
}
break
// WEBZONE API //
case 'gsmarena': {
if (!text) return m.reply(`merk hpnya apa su?`)
let hape = await fetchJson(`${lann}/api/webzone/gsmarena?query=${text}&apikey=${lannkey}`)
let spek = hape.result.result
txet = `Judul: ${spek.judul}
Rilis: ${spek.rilis}
Ukuran: ${spek.ukuran}
Type: ${spek.type}
Storage: ${spek.storage}
Display: ${spek.display}
Pixel: ${spek.pixel}
Inchi: ${spek.inchi}
Video Pixel: ${spek.videoPixel}
Ram: ${spek.ram}
Chipset: ${spek.chipset}
Baterai: ${spek.batrai}
Merk Baterai: ${spek.merk_batre}
Detail: ${spek.detail}`
Resta.sendMessage(m.chat, { image: { url : spek.thumb}, caption: txet},{quoted:m})
}
break
case 'gempa': {
let bumi = await fetchJson(`${lann}/api/webzone/gempa?apikey=${lannkey}`)
let imub = bumi.result
txeet = `Waktu: ${imub.Waktu}
Lintang: ${imub.Lintang}
Bujur: ${imub.Bujur}
Magnitudo: ${imub.Magnitudo}
Kedalaman: ${imub.Kedalaman}
Wilayah: ${imub.Wilayah}
Map: ${imub.Map}`
Resta.sendMessage(m.chat, { image: { url: imub.Map }, caption: txeet }, {quoted:m})
}
break
// WALLPAPER API //
case 'meme':
case 'darkjokes': {
Resta.sendMessage(m.chat, {image:{url:`${lann}/api/random/${command}?apikey=${lannkey}`}, caption: `Nihh`},{quoted:m})
}
break
case 'mountain':
case 'programing':
case 'gaming':
case 'teknologi':
case 'aesthetic':
case 'mobil':
case 'motor':
case 'anjing':
case 'kucing':
case 'cogan':
case 'cecan':
case 'kpop':
case 'justina':
case 'hacker':
case 'pubg': {
let walp = `${lann}/api/wallpaper/${command}?apikey=${lannkey}`
Resta.sendMessage(m.chat, { image : { url: walp}, caption: `Nih Gambar ${command}`},{quoted:m})
}
break
// STICKER API //
case 'mukalu':
case 'gojosatoru':
case 'animegif':
case 'bucin':
case 'manusialidi':
case 'paimon':
case 'patrickgif':
case 'spongebob':
case 'dinokuning':
case 'among':
case 'rabbit':
case 'random':
case 'gura':
case 'anime':
case 'pentol':
case 'patrick':
case 'doge': {
let tikel = `${lann}/api/sticker/${command}?apikey=${lannkey}`
await Resta.sendMedia(m.chat, tikel, '© WhatsApp', 'RUSDI STORE', m, {asSticker: true})
}
break
//----------------//
// OPEN AI //
case'ai': case 'openai': {
if (!text) return m.reply('Masukkan text!')
var api = await fetchJson(`${lann}/api/search/openai-chat?text=${text}&apikey=${lannkey}`)
//var ena = await fetchJson(`https://mfarels.my.id/api/openai?text=${text}`)
Resta.sendMessage(m.chat, { text: api.message }, {quoted: m})
//Resta.sendMessage(m.chat, { text: ena.result},{quoted:m})
}
break
case 'ai-img': {
if (!q) return m.reply('Masukkan Text')
var ima = `${lann}/api/search/openai-image?text=${q}&apikey=${lannkey}`
Resta.sendMessage(m.chat, { image: { url: ima}, caption: `Nih Hasil Dari Search ${q}`},{quoted:m})
}
break
// ------ //
case 'bc': case 'broadcast': case 'bcall': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) throw `Text mana?\n\nExample : ${prefix + command} ${global.ownerName}`
  anu = await store.chats.all().map(v => v.id)
  m.reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
  for (let yoi of anu) {
  await sleep(1500)
  let txt = `*Broadcast ${Resta.user.name}*\n\n${text}`
  Resta.sendText(yoi, txt)
  }
  m.reply('Sukses Broadcast')
  }
            break
   case 'join':  {
              if (!isOwner) return m.reply(mess.botOwner)
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await Resta.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
              break
   case 'menu':
   case 'help': {
let tipes = speed()
let latensiu = speed() - tipes
let dato = await fetchJson('https://api.countapi.xyz/hit/namespace/key')
jumlahcmdo = `${dato.value}`
              //Resta.sendTextWithMentions(m.chat, allmenu(prefix, pushname, namaBot, ownerName), m) 
let remsis = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync('./src/katloper.jpg')},"title": `MADE by © this.ilham_`,"currencyCode": "IDR", "priceAmount1000": `1000`, "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
              Resta.sendMessage(m.chat, 
              { 
image: fs.readFileSync('./src/katloper.jpg'),
//mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
fileName: `${namaBot} | By Ilham`,
fileLength: 999140795000000000,
pageCount: jumlahcmdo,
caption: allmenu(prefix, pushname, namaBot, ownerName, runtime, formatp, tipes, latensiu),
mentions:[m.sender],
contextInfo: {
				    forwardingScore: 9999,
				    isForwarded: true, // ini biar ada tulisannya diteruskan berkali-kali, jika ingin di hilangkan ganti true menjadi false
				    externalAdReply: { // Bagian ini sesuka kalian berkreasi :v
                    showAdAttribution: true,
					title: namaBot,
					body:'kemce',
					mediaUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4",
					description: 'kemce',
					mediaType: 1,
                    renderLargerThumbnail: true,
					previewType: "PHOTO",
					thumbnail: await getBuffer(erorurl),
					sourceUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4"			
				}
			},
footer: `Made By ${ownerName}`,
headerType: 6}, {quoted:remsis})
}
              break
   case 'donasi': {
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              const tgo = '```'
              let domn = `${tgo}Bot ini disediakan secara gratis untuk semua orang dan dapat ditambahkan di dalam sebuah Grup. Namun demikian, jika kamu merasa terbantu dengan penggunaan bot ini dan ingin memberikan kontribusi, donasi akan sangat diapresiasi. Donasi akan membantu pemilik bot untuk menjaga kelangsungan hidupnya dan memastikan bahwa bot tetap berfungsi dengan baik di masa depan. Terima kasih kepada mereka yang telah memberikan donasi kepada bot ini. Mohon dipertimbangkan untuk memberikan kontribusi agar bot ini dapat terus beroperasi dan membantu pengguna dengan lebih baik lagi. Terima kasih :)${tgo}`
              Resta.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/077455dafd3d931bc766e.jpg' }, caption: domn },{quoted:m})
              }
              break
   case 'readme':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              Resta.sendText(m.chat, readme(prefix), m) 
              break
   case 'snk':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              Resta.sendText(m.chat, snk(prefix), m) 
              break
   case 'listchannel':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              Resta.sendText(m.chat, channel(prefix), m) 
              break
   case 'owner':
              Resta.sendContact(m.chat, global.wangsap, m)
              break
   case 'afk':
    	      if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              user.afkTime = + new Date
              user.afkReason = text
              m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
              break
    case 'listdm':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              if (args[0] === "1") {
              Resta.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/a4a564eee5b5b9f9b18db.jpg' }, caption: `Minat? Chat Owner`}, {quoted:m})
              Resta.sendContact(m.chat, global.owner, m)
              } else if (args[0] === "2") {
              Resta.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/dbb0f988f88b33d1682d7.jpg' }, caption: `Minat? Chat Owner`}, {quoted:m}) 
              Resta.sendContact(m.chat, global.owner, m)
              }
              break
   case 'verifikasi':
              let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
              if (user.registered === true) throw m.reply(`Anda sudah terdaftar\nMau daftar ulang? ${prefix}unreg <SN|SERIAL NUMBER>`)
              if (!Reg.test(text)) throw m.reply(`Format salah\n*${prefix}${command} nama.umur*`)
              let [_, name, splitter, age] = text.match(Reg)
              if (!name) throw m.reply( 'Name cannot be empty (Name)')
              if (!age) throw m.reply('Age cant be empty (Number)')
              age = parseInt(age)
              if (age > 30) throw m.reply('Age too old 😉')
              if (age < 5) throw m.reply('Babies can type according to the format  ._.')
              user.name = name.trim()
              user.age = age
              user.regTime = + new Date
              user.registered = true
              let sn = createHash('md5').update(m.sender).digest('hex')
              m.reply(`Daftar berhasil!\n\n╭─❒ You Info Registrasi \n├\n├❒ Nama: ${name}\n├❒ Umur: ${age} Tahun \n├\n╰❒〘 ${namaBot} 〙\n\n Jangan Lupa Follow Instagram Miminl ${global.namaBot}\nhttps://instagram.com/this.ilham_\n\nNote Serial Number Jangan Sampai Lupa\nUntuk Menghapus Data Diri Anda Ketik\n${prefix}unreg [ no sn ]\n\nSERIAL NUMBER / SN\n*${sn}*`.trim())
              break
   case 'unreg':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              if (!args[0]) throw m.reply('Serial Number kosong')
              let spn = createHash('md5').update(m.sender).digest('hex')
              if (args[0] !== spn) throw m.reply('Serial Number salah')
              user.registered = false
              m.reply('```Succes Unreg !```')
              break
   case 'ceksn':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              let Regg = /\|?(.*)([.|] *?)([0-9]*)$/i
              let jp = createHash('md5').update(m.sender).digest('hex')
              m.reply(`*❒ SN:* ${jp}`)
              break
   case 'tts':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
	          if (args.length < 1) return m.reply('Kirim perintah *#tts [ Bahasa ] [ Teks ]*, contoh *#tts id halo semua*')
	          try {
              const gtts = require('../lib/gtts')(args[0]) 
              if (args.length < 2) return m.reply('Textnya mana gan?') 
              var ngab = body.slice(8)
              ranm = getRandom('.mp3')
              rano = getRandom('.ogg')
              ngab.length > 600 ? reply('Textnya kebanyakan gan') : gtts.save(ranm, ngab, function() {
              exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
              fs.unlinkSync(ranm)
              buff = fs.readFileSync(rano) 
              if (err) return reply('Gagal gan:(')
              Resta.sendMessage(m.chat, {audio: buff, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
              fs.unlinkSync(rano)
              })
              }) 
              } catch (err) {
              console.log(err)
              Resta.sendText(m.chat, bahasa(prefix), m) 
              }
              break
    case 'simi':
		      if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
			  if (!text) throw m.reply(`Penggunaan ${command} text`)
			  var cimcimi = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=id`)
              Resta.sendMessage(m.chat, { text: cimcimi.success}, {quoted: m})
              break
   case 'listblock':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              await Resta.fetchBlocklist().then(async data => {
		      let txt = `*「  Daftar Nomor Yang Diblokir  」*\n\n*Total:* ${data.length}\n\n┌─\n`
		      for (let i of data) {
			  txt += `├ @${i.split("@")[0]}\n`
		      }
		      txt += "└────"
		      return Resta.sendTextWithMentions(m.chat, txt, m)
	          }).catch(err => {
		      console.log(err);
		      m.reply('tidak ada yang diblokir!')
	          })
              break
   case 'litsprivate': {
     	     if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              let abu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
              let tteks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${abu.length} Chat\n\n`
              for (let i of abu) {
              let nama = store.messages[i].array[0].pushName
              tteks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
              }
              Resta.sendTextWithMentions(m.chat, tteks, m)
              }
              break
   case 'litsgroup':
      	    if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              let jadin = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
              let tekps = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${jadin.length} Group\n\n`
              for (let i of jadin) {
              let metadata = await Resta.groupMetadata(i)
              tekps += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
              }
              Resta.sendTextWithMentions(m.chat, tekps, m)
              break
   case 'delete': case 'del':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              if (!m.quoted) throw m.reply('reply pesnya') 
              let { chat, fromMe } = m.quoted
              Resta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
              break
   case 'listonline': case 'liston': 
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
              online = [...Object.keys(store.presences[id]), botNumber]
              Resta.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
              break
///converter Link///
     case 'tourl':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               m.reply(mess.wait)
               let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/uploader')
               let mpoedia = await Resta.downloadAndSaveMediaMessage(quoted)
               if (/image/.test(mime)) {
               anu = await TelegraPh(mpoedia)
               m.reply(util.format(anu))
               } else if (!/image/.test(mime)) {
               anu = await UploadFileUgu(mpoedia)
               m.reply(util.format(anu))
               }
               await fs.unlinkSync(mpoedia)
              break
    case 'tinyurl':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (args.length < 1) return m.reply(`Penggunaan :\n*${prefix}tinyurl link*`)
               if (!isUrl(args[0])) return m.reply(`Masukkan link yang benar`)
               axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)
              .then((a) => m.reply(`Nih ${a.data}`))
              .catch(() => m.reply(`Error, harap masukkan link dengan benar`))
               break
//JADIAN//
   case 'tembakpasangan':
              if(isNaN(text)) {
              number = text.split`@`[1]
              } else if(!isNaN(text)) {
              number = text
              }
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              if (!m.isGroup) return m.reply(mess.group)
              if(!text && !m.quoted) return m.reply(`Masukan nomor, tag target atau balas pesan target`)
              if(isNaN(number)) return m.reply(`_*Nomor tidak valid.*_`)
              if(number.length > 15) return m.reply( `*_Format Tidak Valid.*_`)
              try {
              if(text) {
              user = number + '@s.whatsapp.net'
              } else if(m.quoted.sender) {
              user = m.quoted.sender
              } else if(m.mentionedJid) {
              user = number + '@s.whatsapp.net'
              }  
              } catch (e) {
              } finally {
              let groupMetadata = m.isGroup ? await Resta.groupMetadata(m.chat) : {}
              let participants = m.isGroup ? groupMetadata.participants : []
              let users = m.isGroup ? participants.find(u => u.id == user) : {}
              if(!users) return m.reply(`*_Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.*_`)
              if(user === m.sender) return m.reply(`_*Tidak bisa berpacaran dengan diri sendiri.*_`)
              if(user === Resta.user.id) return m.reply( `_*Tidak bisa berpacaran dengan saya. :')*_`)
              if (typeof global.db.data.users[user] == "undefined") return m.reply("_*Orang yang anda tag tidak terdaftar di dalam database.*_")  
              if(global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user){
              Resta.sendTextWithMentions(m.chat,`Kamu sudah berpacaran dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}\n\nSilahkan putus dulu (ketik .putuspasangan untuk memutuskan hubungan) untuk menembak @${user.split('@')[0]}\n\nBtw yang setia dikit banget!`,m,{contextInfo: {mentionedJid: [user,global.db.data.users[m.sender].pasangan]}})
              }else if(global.db.data.users[user].pasangan != ""){
              var pacar = global.db.data.users[user].pasangan
              if (global.db.data.users[pacar].pasangan == user){
              if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return Resta.sendText(m.chat,`Anda sudah berpacaran dengan @${pacar.split('@')[0]}`,m,{contextInfo: {mentionedJid: [pacar]}})
              Resta.sendTextWithMentions(m.chat,`Maaf, @${user.split('@')[0]} sudah berpacaran dengan @${pacar.split('@')[0]}\nSilahkan cari pasangan lain!`,m,{contextInfo:{ mentionedJid: [user,pacar]}})
              }else{
              global.db.data.users[m.sender].pasangan = user
              Resta.sendTextWithMentions(m.chat,`Anda baru saja mengajak @${user.split('@')[0]} berpacaran\n\nSilahkan menunggu jawaban darinya!\n\nKetik *${prefix}terimapasangan @user* untuk menerima\n*${prefix}tolakpasangan @user untuk menolak*`,m,{contextInfo: {mentionedJid: [user]}})
              }
              }else if (global.db.data.users[user].pasangan == m.sender){
              global.db.data.users[m.sender].pasangan = user
              Resta.sendTextWithMentions(m.chat,`Selamat anda resmi berpacaran dengan @${user.split('@')[0]}\n\nSemoga langgeng dan bahagia selalu 😉`,m,{contextInfo: {mentionedJid: [user] }})
              }else {
              global.db.data.users[m.sender].pasangan = user
              Resta.sendTextWithMentions(m.chat,`Kamu baru saja mengajak @${user.split('@')[0]} berpacaran\n\nSilahkan menunggu jawaban darinya!\n\nKetik *${prefix}terimapasangan @user* untuk menerima\n*${prefix}tolakpasangan @user untuk menolak*`,m,{contextInfo: {mentionedJid: [user]}})
              }
              }
              break
   case 'terimapasangan':
              if(isNaN(text)) {
              number = text.split`@`[1]
              } else if(!isNaN(text)) {
              number = text
              }
             const format = num => {
             const n = String(num),
             p = n.indexOf('.')
             return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) => p < 0 || i < p ? `${m},` : m)
             }
             if (!m.isGroup) return m.reply(mess.group)
             if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
             if(!text && !m.quoted) return m.reply(`Masukan nomor, tag target atau balas pesan target`)
             if(isNaN(number)) return m.reply( `_*Nomor tidak valid.*_`)
             if(number.length > 15) return m.reply( `*_Format Tidak Valid.*_`)
             try {
             if(text) {
             user = number + '@s.whatsapp.net'
             } else if(m.quoted.sender) {
             user = m.quoted.sender
             } else if(m.mentionedJid) {
             user = number + '@s.whatsapp.net'
             }  
             } catch (e) {
             } finally {
             let groupMetadata = m.isGroup ? await Resta.groupMetadata(m.chat) : {}
             let participants = m.isGroup ? groupMetadata.participants : []
             let users = m.isGroup ? participants.find(u => u.jid == user) : {}
             if(users) return m.reply(`*_Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.*_`)
             if(user === m.sender) return m.reply(`_*Tidak bisa berpacaran dengan diri sendiri.*_`)
             if(user === Resta.user.jid) return m.reply(`_*Tidak bisa berpacaran dengan saya. :')*_`)
             if (typeof global.db.data.users[user] == "undefined") return m.reply("_*Orang yang anda tag tidak terdaftar di dalam database.*_")   
             if(global.db.data.users[user].pasangan != m.sender){
             Resta.sendTextWithMentions(m.chat,`Maaf @${user.split('@')[0]} tidak sedang menembak anda`,m,{contextInfo: {mentionedJid: [user]}})
             }else{
             global.db.data.users[m.sender].pasangan = user
             Resta.sendTextWithMentions(m.chat,`Selamat anda resmi berpacaran dengan @${user.split('@')[0]}\n\nSemoga langgeng dan bahagia selalu @${user.split('@')[0]}  ❤️ @${m.sender.split('@')[0]} 😉`,m,{contextInfo:{ mentionedJid: [m.sender,user]}})
             }
             }	
             break
  case 'cekpasangan':
             if(isNaN(text)) {
             number = text.split`@`[1]
             } else if(!isNaN(text)) {
             number = text
             }
             if(number.length > 15 || (number.length < 9 && number.length > 0)) return m.reply(`Maaf, Nomor yang anda masukan salah!`)
             if (!text && !m.quoted){
             user = m.sender
             orang = "Kamu"
             }else if(text) {
             user = number + '@s.whatsapp.net'
             orang = "Orang yang kamu tag"
             } else if(m.quoted.sender) {
             user = m.quoted.sender
             orang = "Orang yang kamu balas"
             } else if(m.mentionedJid) {
             user = number + '@s.whatsapp.net'
             orang = "Orang yang kamu tag"
             }
             if (typeof global.db.data.users[user] == "undefined"){
             return m.reply("Target tidak terdaftar di dalam database!")
             }
             if (typeof global.db.data.users[global.db.data.users[user].pasangan] == "undefined" && global.db.data.users[user].pasangan != ""){
             return m.reply("Target tidak terdaftar di dalam database!")
             }
             if (global.db.data.users[user].pasangan == "") {
             Resta.sendTextWithMentions(m.chat, `${orang} tidak memiliki pasangan dan tidak sedang menembak siapapun\n\n*Ketik .tembakpasangan @user untuk menembak seseorang*`, m)
             }else if (global.db.data.users[global.db.data.users[user].pasangan].pasangan != user){
             Resta.sendTextWithMentions(m.chat, `${orang} sedang menunggu jawaban dari @${global.db.data.users[user].pasangan.split('@')[0]} karena sedang tidak diterima atau di tolak\n\nKetik *${prefix}ikhlasinpasangan* untuk mengikhlaskan!`, m,{contextInfo: { mentionedJid: [global.db.data.users[user].pasangan]}})
             }else {
             Resta.sendTextWithMentions(m.chat, `${orang} sedang menjalani hubungan dengan @${global.db.data.users[user].pasangan.split('@')[0]} ❤️`, m,{contextInfo: { mentionedJid: [global.db.data.users[user].pasangan]}})
             }
             break
  case 'putuspasangan':
             if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
             ayg = global.db.data.users[m.sender]
             if(ayg.pasangan == ""){
             return m.reply(`Anda tidak memiliki pasangan.`)
             } 
             pacar = global.db.data.users[global.db.data.users[m.sender].pasangan]
             if (typeof pacar == "undefined"){
             Resta.sendTextWithMentions(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,m,{contextInfo: {mentionedJid: [global.db.data.users[m.sender].pasangan]}})
             ayg.pasangan = ""
             }
             if (m.sender == pacar.pasangan){
             Resta.sendTextWithMentions(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,m,{contextInfo: {mentionedJid: [global.db.data.users[m.sender].pasangan]}})
             ayg.pasangan = ""
             pacar.pasangan = ""
             }else {
             m.reply(`Anda tidak memiliki pasangan.`)
             }
             break
  case 'tolakpasangan':
             if(isNaN(text)) {
             number = text.split`@`[1]
             } else if(!isNaN(text)) {
             number = text
             }
             if (!m.isGroup) return m.reply(mess.group)
             if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
             if(!text && !m.quoted) return Resta.sendText(m.chat, `Masukan nomor, tag atau balas pesan target.`, m)  
             if(isNaN(number)) return Resta.sendText(m.chat, `Nomor yang anda masukan salah!`, m)
             if(number.length > 15) return Resta.sendText(m.chat, `Format salah!`, m)
             try {
             if(text) {
             user = number + '@s.whatsapp.net'
             } else if(m.quoted.sender) {
             user = m.quoted.sender
             } else if(m.mentionedJid) {
             user = number + '@s.whatsapp.net'
             }  
             } catch (e) {
             } finally {
             let groupMetadata = m.isGroup ? await Resta.groupMetadata(m.chat) : {}
             let participants = m.isGroup ? groupMetadata.participants : []
             let users = m.isGroup ? participants.find(u => u.id == user) : {}
             if(users) return m.reply(`Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.`)
             if(user === m.sender) return m.reply(`Tidak bisa berpacaran dengan diri sendiri!`)
             if(user === Resta.user.jid) return m.reply(`*Tidak bisa berpacaran dengan saya t_t`)    
             if(global.db.data.users[user].pasangan != m.sender){
             Resta.sendTextWithMentions(m.chat,`Maaf @${user.split('@')[0]} tidak sedang menembak anda`,m,{contextInfo: { mentionedJid: [user]}})
             }else{
             global.db.data.users[user].pasangan = ""
             Resta.sendTextWithMentions(m.chat,`Anda baru saja menolak @${user.split('@')[0]} untuk menjadi pasangan anda!`,m,{contextInfo: {mentionedJid: [user]}})
             }
             }
             break
  case 'ikhlasinpasangan':
             if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
             if (global.db.data.users[m.sender].pasangan == "") return m.reply( `Kamu sedang tidak menembak siapapun!`)
             if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return Resta.sendTextWithMentions(m.chat, `Kamu telah berpacaran dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`, m, {contextInfo: {mentionedJid: [global.db.data.users[m.sender].pasangan]}})
             Resta.sendTextWithMentions(m.chat, `Kamu sudah mengikhlaskan @${global.db.data.users[m.sender].pasangan.split('@')[0]} karena dia tidak memberikan jawaban diterima atau ditolak`, m, {contextInfo: {mentionedJid: [global.db.data.users[m.sender].pasangan]}})
             global.db.data.users[m.sender].pasangan = ""
             break
//TEXT MAKER//
    case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
    case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
    case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
    case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
    case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
    case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
    case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
    case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
    case 'lava': case 'rock': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
    case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
	           if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!q) return m.reply(`Example : ${prefix + command} ${global.ownerName}`)                 
               m.reply(mess.wait)
               let link
               if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
               if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
               if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
               if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
               if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
               if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
               if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
               if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
               if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
               if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
               if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
               if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
               if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
               if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
               if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
               if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
               if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
               if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
               if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
               if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
               if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
               if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
               if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
               if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
               if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
               if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
               if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
               if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
               if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
               if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
               if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
               if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
               if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
               if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
               if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
               if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
               if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
               if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
               if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
               if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
               if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
               if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
               if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
               if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
               if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
               if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
               if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
               if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
               if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
               if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
               if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
               if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
               if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
               if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
               if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
               if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
               if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
               anu = await textpro(link, q)
               Resta.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.namaBot}` }, { quoted: m })
               }
               break
//GROUP SETTINGS//
    case 'antivionce':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!m.isGroup) return m.reply(mess.group)
               if (!isAdmins) return m.reply(mess.admin)
               if (args[0] === "enable") {
               if (global.db.data.chats[m.chat].antivionce) return m.reply(`Antivionce Aktif Sebelumnya`)
               global.db.data.chats[m.chat].antivionce = true
               m.reply(`Antivionce Di Group Berhasil Di Aktifkan !`)
               } else if (args[0] === "disable") {
               if (!global.db.data.chats[m.chat].antivionce) return m.reply(`Antivionce Nonaktif Sebelumnya`)
               global.db.data.chats[m.chat].antivionce = false
               m.reply(`Antivionce Berhasil Di Nonaktifkan !`)
               } else {
               await Resta.sendMessage(m.chat, { text: `Ketik ${command} enable/disable` },{quoted:m})
               }
               break
    case 'welcomegroup':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!m.isGroup) return m.reply(mess.group)
               if (!isAdmins) return m.reply(mess.admin)
               if (args[0] === "enable") {
               if (global.db.data.chats[m.chat].welcome) return m.reply(`Welcome Aktif Sebelumnya`)
               global.db.data.chats[m.chat].welcome = true
               m.reply(`Welcome Di Group Berhasil Di Aktifkan !`)
               } else if (args[0] === "disable") {
               if (!global.db.data.chats[m.chat].welcome) return m.reply(`Welcome Nonaktif Sebelumnya`)
               global.db.data.chats[m.chat].welcome = false
               m.reply(`Welcome Berhasil Di Nonaktifkan !`)
               } else {
               await Resta.sendMessage(m.chat, { text: `Ketik ${command} enable/disable` },{quoted:m})
               }
               break
    case 'antilink':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!m.isGroup) return m.reply(mess.group)
               if (!isBotAdmins) return m.reply(mess.botAdmin)
               if (!isAdmins) return m.reply(mess.admin)
               if (args[0] === "enable") {
               if (global.db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
               global.db.data.chats[m.chat].antilink = true
               m.reply(`Antilink Berhasil Di Aktifkan !`)
               } else if (args[0] === "disable") {
               if (!global.db.data.chats[m.chat].antilink) return m.reply(`Sudah Nonaktif Sebelumnya`)
               global.db.data.chats[m.chat].antilink = false
               m.reply(`Antilink Berhasil Di Nonaktifkan !`)
               } else {
               await Resta.sendMessage(m.chat, { text: `Ketik ${command} enable/disable` },{quoted:m})
               }
               break
    case 'ephemeral':
	           if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!m.isGroup) return m.reply(mess.group)
               if (!isBotAdmins) return m.reply(mess.botAdmin)
               if (!isAdmins) return m.reply(mess.admin)
               if (args[0] === '1') {
               await Resta.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               } else if (args[0] === '7') {
               await Resta.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               } else if (args[0] === '90') {
               await Resta.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               } else if (args[0] === 'off') {
               await Resta.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               } else {
               let sections = [
               {
               title: "CHANGE EPHEMERAL GROUP",
               rows: [
               {title: "Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
               {title: "Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
               {title: "Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
               {title: "Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                Resta.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, Resta.user.name, `Hello Admin ${groupMetadata.subject}`, `Click Here`, sections, m)
                }
                break
     case 'leave':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!isAdmins) return m.reply(mess.admin)
                await Resta.groupLeave(m.chat).then((res) => m.reply('Sayonara ðŸ‘‹\nSulit Di Kontrol Semoga Hari Kalian Mengontol')).catch((err) => m.reply('Fitur Error ❎'))
                break
     case 'linkgc':
      	      if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                let response = await Resta.groupInviteCode(m.chat)
                Resta.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
                break
     case 'revoke':
        	    if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                await Resta.groupRevokeInvite(from)
                m.reply(mess.done)
                break
     case 'kick':
       	     if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		        if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
		        users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Resta.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
	            break
     case 'add':
		        if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		        if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
		        users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Resta.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
	            break
     case 'promote':
		        if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		        if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
		        users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Resta.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
	            break
     case 'demote':
		        if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		        if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
		        users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Resta.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
	            break
     case 'setname': case 'setsubject':
	            if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                if (!text) throw m.reply('textnya?')
                await Resta.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
                break
     case 'setdesc': case 'setdesk':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                if (!text) throw m.reply('textnya?')
                await Resta.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
                break
     case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins) return m.reply(mess.admin)
                if (!quoted) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
                var media = await Resta.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                var { img } = await generateProfilePicture(media)
                await Resta.query({
                tag: 'iq',
                attrs: {
                to: m.chat,
                type:'set',
                xmlns: 'w:profile:picture'
                },
                content: [
                {
                tag: 'picture',
                attrs: { type: 'image' },
                content: img
                }
                ]
                })
                fs.unlinkSync(media)
                m.reply(`Sukses`)
                }
                break
     case 'tagall':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                let teks = `*👥 Tag All By Admin*\n\n🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `乂 @${mem.id.split('@')[0]}\n`
                }
                Resta.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                break
     case 'hidetag':
	            if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                Resta.sendMessage(m.chat, { text : q ? q : 'kosong' , mentions: participants.map(a => a.id)}) 
                break
//STALK//
     case 'igstalk':
                if (!args || !args[0]) throw m.reply(`Gunakan format ${prefix}${command} [username] Contoh: ${prefix}${command} jokowi`)
                m.reply(mess.wait)
                try {
                res = await noapi.igstalk(args[0])
                json = JSON.parse(JSON.stringify(res))
                iggs = `▢ *Username:* ${json.username}\n▢ *Nickname:* ${json.fullName}\n▢ *Followers:* ${json.followers}\n▢ *Following:* ${json.following}\n▢ *Posting:* ${json.postsCount}\n▢ *Link:* https://instagram.com/${json.username}\n▢ *Bio:* ${json.bio}`
                Resta.sendImage(m.chat, json.profilePicHD, iggs, m)
                } catch (err) {
                console.log(err)
                await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                }
                break
     case 'githubstalk':
                if (!text) return m.reply( 'Harap Masukan Username')
                await m.reply(mess.wait)
                try {
                ano = await fetch(`https://api.github.com/users/${text}`).then(a => a.json())
                thumb = await getBuffer(ano.avatar_url)
                hasilnya = `*── 「 GITHUB STALK 」 ──*\n\n➸ *Bio*: ${ano.bio}\n➸ *Perusahaan*: ${ano.company}\n➸ *Repo Publik:* ${ano.public_repos}\n➸ *Gists Publik:* ${ano.public_gists}\n➸ *Follower:* ${ano.followers}\n➸ *Following:* ${ano.following}\n➸ *Lokasi:* ${ano.location}\n➸ *Link:* ${ano.html_url}`
                await Resta.sendMessage(m.chat, { image: thumb, caption: hasilnya, quoted: m })
                } catch (err) {
                console.log(err)
                await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                }
                break
//SEARCHING//
    case 'whatmusic':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
	            if (/video|audio/.test(mime)) {
		        let media = await quoted.download()
		        await m.reply(mess.wait)
		        let { status, metadata } = await acr.identify(media)
		        if (status.code !== 0) throw status.msg 
	            let { title, artists, album, genres, release_date } = metadata.music[0]
		        let txt = `*• Title:* ${title}${artists ? `\n*• Artists:* ${artists.map(v => v.name).join(', ')}` : ''}`
	            txt += `${album ? `\n*• Album:* ${album.name}` : ''}${genres ? `\n*• Genres:* ${genres.map(v => v.name).join(', ')}` : ''}\n`
		        txt += `*• Release Date:* ${release_date}`
                Resta.sendMessage(m.chat, { text: txt.trim(), buttons: [{ buttonText: { displayText: 'Play Music' }, buttonId: `${prefix}play ${title}` }] }, { quoted: m })
	            } else throw m.reply(`Reply audio/video with command ${prefix + command}`)
	           .catch((err) => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Video tidak ditemukan'}, { quoted: m }))
	            break
     case 'play': case 'ytplay': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let pla = `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`
Resta.sendMessage(m.chat, { image : { url: anu.thumbnail }, caption: pla}, { quoted: m })
let yetemu = await fetchJson(`${lann}/api/download/ytmp3/2?url=${anu.url}&apikey=${lannkey}`)
Resta.sendMessage(m.chat, { document: { url: yetemu.result.url }, mimetype: 'audio/mpeg', fileName: `${yetemu.result.title}` },{quoted:m})
}
break
     case 'yts': case 'ytsearch': {
                if (!q) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(q)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
				teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                Resta.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
     case 'pinterest': 
           	 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
                m.reply(mess.wait)
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttonspinterest = [{buttonId: `pinterest ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
                Resta.sendMessage(m.chat, { image: { url: result }, caption: 'Source Url : '+result, buttons: buttonspinterest }, { quoted: m })
                break
     case 'sfilesearch':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!q) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} WhatsApp mod*`)
                m.reply(mess.wait)
                api2.sfilesearch(`${q}`)
               .then(result => {
                res = '「 *sfilesearch* 」\n\n'
                for (let i of result) {
                res += `*Nama*: ${i.nama}\n*Ukuran*: ${i.size}\n*Link*: ${i.link}\n\n`
                }
                m.reply(res)
                });
                break 
     case 'google':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!args[0]) return m.reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
                let google = require('google-it')
                m.reply(mess.wait)
                google({'query': args.join(" ")}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `*Title* : ${g.title}\n`
                teks += `*Description* : ${g.snippet}\n`
                teks += `*Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                }) 
                break
      case 'joox':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!text) throw m.reply(`*Perintah ini untuk mencari lagu joox berdasarkan pencarian*\n\ncontoh:\n${prefix + command} akad`)
                 if (isUrl(text)) throw m.reply(`*Perintah ini untuk mencari lagu joox berdasarkan pencarian bukan link*\n\ncontoh:\n${prefix + command} akad`)
                 noapi.joox(text).then(res => {
                 let joox = JSON.stringify(res)
                 let jjson = JSON.parse(joox)
                 m.reply(mess.wait)
                 let random = Math.floor(Math.random() * jjson.data.length)
                 hasil = jjson.data[random]
                 let json = hasil
                 pesan = `*Penyanyi:* ${json.penyanyi}\n*Judul:* ${json.lagu}\n*Album:* ${json.album}\n*Diterbitkan:* ${json.publish}\nBy ${ownerName}\n\nPlease Be Patient We Are Sending The Data You Request`
                 Resta.sendImage(m.chat, json.img, pesan, m)
                 Resta.sendMessage(m.chat, { audio: { url: json.mp3 }, mimetype: 'audio/mpeg', fileName: `${json.penyanyi}.mp3` }, { quoted: m })
                 })
                 break
//DOWNLOADER//
     case 'ytmp4': case 'ytvideo': case 'ytv':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)         
                if (args.length < 1) return m.reply(`Gunakan Format : ${command} linknya`)
                if (!isUrl(args[0]) && !args[0].includes('youtu.be') && !args[0].includes('youtube.com')) return m.reply(mess.link1)
                m.reply(mess.wait)
                try {
                let quality = args[1] ? args[1] : '480p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
                caption = `---- Youtube Downloader -----\n\n❒ Judul : ${media.title}\n❒ Size : ${media.filesizeF}\n❒ Url : ${isUrl(text)}\n❒ Format : MP4\n❒ Resolusi : ${args[1] || '480p'}`
                Resta.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: caption }, { quoted: m })
                } catch (err) {
                console.log(err)
                await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                }
			    break
   
     case'igmp4':
     case 'igvideo':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!q) return m.reply(`Use example ${command} https://www.instagram.com/p/CMeFrnTp8as`)
                if (!isUrl(q)) throw m.reply(mess.link) 
		        if (!q.includes('instagram.com')) return m.reply(mess.link1)
	            m.reply(mess.wait)
                try {
                a = await instagramdlv2(args[0])
                await Resta.sendMessage(m.chat, {video:{url: a[0].url.split("snapsave.app")[1]}, mimetype:"video/mp4", caption: `Mode By ${namaBot}`}, {quoted:m})
                } catch (err) {
                console.log(err)
                await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                }
                break
     case 'igfoto':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!q) return m.reply(`Use example ${command} https://www.instagram.com/p/CMeFrnTp8as`)
                if (!isUrl(q)) throw m.reply(mess.link) 
		        if (!q.includes('instagram.com')) return m.reply(mess.link1)
	            m.reply(mess.wait)
                try {
                a = await instagramdlv2(args[0])
                await Resta.sendMessage(m.chat, {image: {url: a[0].url.split("snapsave.app")[1]}, caption: `By Mode ${namaBot}` }, { quoted: m })
                } catch (err) {
                console.log(err)
                await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                }
                break
     case 'ytmp3': {
			if (args.length == 0) return m.reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
			axios
				.get(`${lann}/api/download/ytmp3/2?url=${args[0]}&apikey=${lannkey}`)
				.then(({ data }) => {
					var caption = `❖ Title: *${data.result.title}*\n`
					caption += `❖ Size: *${data.result.size}*\n`
					caption += `❖ Duration: *${data.result.duration}*\n`
					caption += `*Sebentar, Diproses Dlu Ayang*`
					Resta.sendMessage(from, { image: { url: data.result.thumbnail }, caption }).then(() => {
						Resta.sendMessage(from, { document: { url: data.result.url }, mimetype: 'audio/mpeg', fileName: `${data.result.title}.mp3` })
					})
				})
				.catch(console.error)
				}
			break
     /*case 'ytmp3': case 'ytaudio': case 'yta': 
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (args.length < 1) return m.reply(`Gunakan Format : ${command} linknya`)
                if (!isUrl(args[0]) && !args[0].includes('youtu.be') && !args[0].includes('youtube.com')) return m.reply(mess.link1)
                await m.reply(mess.wait) 
                try {
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 99999) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
                caption = `*------ Youtube Downloader -----*\n\n❒ Title : ${media.title}\n❒ Size : ${media.filesizeF}\n❒ Url : ${isUrl(text)}\n❒ Format : MP3\n❒ Resolusi : ${args[1] || '128kbps'}\n\n_Wait We Are Processing Your File_`
                let msg = await Resta.sendImage(m.chat, media.thumb, caption, m)
                Resta.sendMessage(m.chat, {document: {url:  media.dl_link}, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3`}, { quoted: msg }) .then(() => {
                })
                } catch (err) {
                console.log(err)
                await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                }
                break*/
     case 'ytvvmp3':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (args.length < 1) return m.reply(`Gunakan Format : ${command} linknya`)
                if (!isUrl(args[0]) && !args[0].includes('youtu.be') && !args[0].includes('youtube.com')) return m.reply(mess.link1)
                await m.reply(mess.wait) 
                try {
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 99999) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
                caption = `*------ Youtube Downloader -----*\n\n📄 Title : ${media.title}\n🎚️ Size : ${media.filesizeF}\n🔗 Url : ${isUrl(text)}\n📥 Format : MP3\n📮 Resolusi : ${args[1] || '128kbps'}\n\n_Wait We Are Processing Your File_`
                Resta.sendMessage(m.chat, {document: {url:  media.dl_link}, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3`}, { quoted: m }) 
                } catch (err) {
                console.log(err)
                await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                }
                break
      case 'fbdl':
      case 'facebook':
                if (!text) return m.reply( `Example : ${prefix + command} link`)
                if (!q.includes('facebook.com')) return m.reply(`Link Invalid!!`)
                m.reply("Loading...")
                const { fbdl } = require("../lib/facebook");
                fbdl(q).then( data => {
                if (data.length == 0) return reply(`Maaf terjadi kesalahan, ganti link yang lain!`)
                Resta.sendMessage(m.chat, { video: { url: data[data.length - 1] }, caption: data.title }, { quoted: m })
                })
                break
     case 'soundcloud':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
                if (!isUrl(q)) throw m.reply(mess.link) 
                if (!q.includes('soundcloudmp')/('soundcloud.com')) return m.reply('Link Invalid ❎')
                await m.reply(mess.wait)
                api2.soundcloud(`${q}`) 
               .then(result => {
                let text =`*🔰SOUNDCLOUD🔰*\n`
                text +=`*Title*: ${result.title}\n`
                text +=`*Durasi*: ${result.duration}\n`
                text +=`*Qulity*: ${result.quality}\n`
                text +=`*Author*: ${result.author}\n\n Wait Is Sending The Data You Request`
                Resta.sendImage(m.chat, result.thumbnail, text, m)
                Resta.sendMessage(m.chat, {document: {url:  result.download}, mimetype: 'audio/mpeg', fileName: `${result.title}.mp3`}, { quoted: m })
                }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Video tidak ditemukan'}, { quoted: m }))
                break
     case 'cocofun':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!q) return m.reply(`Gunakan Format : ${command} https://www.icocofun.com/share/post/490013276810?lang=id&pkg=id&share_to=copy_link&m=253e3d90d057da0de4f9544ed67e4c54&d=0d18db9c398405eed9a59120805e336ff6dd6d841c556ada2b191c37a722a522&nt=1`)
                if (!isUrl(q)) throw m.reply(mess.link) 
                if (!q.includes('icocofun.com')/('cocofun.com')) return m.reply('Link Invalid ❎')
                await m.reply(mess.wait)
                api2.cocofun(`${q}`) 
               .then(result => {
                let text =`*🔰COCOFUN🔰*\n`
                text +=`*Topic*: ${result.topic}\n`
                text +=`*Caption*: ${result.caption}\n`
                text +=`*View*: ${result.play}\n`
                text +=`*Share*: ${result.share}\n`
                text +=`*Like*: ${result.like}\n`
                text +=`*Durasi*: ${result.duration}\n\n Wait Is Sending The Data You Request`
                Resta.sendImage(m.chat, result.thumbnail, text, m)
                Resta.sendMessage(from, {video:{url: result.no_watermark}, mimetype:"video/mp4", caption: `${result.caption}`}, {quoted:m})
                }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                break 
     case 'likevideo':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!q) return m.reply(`Gunakan Format : ${command} https://l.likee.video/v/JvI12V`)
                if (!isUrl(q)) throw m.reply(mess.link) 
                if (!q.includes('like.com')/('l.likee')) return m.reply('Link Invalid ❎')
                await m.reply(mess.wait)
                api2.like(`${q}`) 
               .then(result => {
                 let text =`*🔰Like Downloader🔰*\n`
                 text +=`*Title*: ${result.title}\n\n Wait Is Sending The Data You Request`
                 Resta.sendImage(m.chat, result.thumbnail, text, m)
                 Resta.sendMessage(from, {video:{url: result.no_watermark}, mimetype:"video/mp4", caption: `${result.title}`}, {quoted:m})
                 }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                 break
       case 'gitclone':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!args[0]) return m.reply('Linknya?')
                 let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                 if (!regx.test(args[0])) return m.reply('Linknya salah')
                 m.reply(mess.wait)
                 let [, usker, repo] = args[0].match(regx) || []
                 repos = repo.replace(/.git$/, '')
                 let hasdl = `https://api.github.com/repos/${usker}/${repos}/zipball`
                 let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                 Resta.sendMessage(m.chat, { document: { url: hasdl }, fileName: `${namafile}`, mimetype: 'zip' }, { quoted: m })
                 break
       case 'tiktoknowm':
       case 'tiktok':
	   case 'tt':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!args[0]) throw m.reply(`*Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`)
                 if (!args[0].match(/tiktok/gi)) throw m.reply(`*Link salah! Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`)
                 const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
                 const irlandia = video.no_watermark || video.no_watermark_hd || video.with_watermark || video.no_watermark_raw
                 if (!irlandia) throw m.reply( 'Can\'t download video!')
                 m.reply(mess.wait)
                 Resta.sendMessage(from, {video:{url: irlandia}, mimetype:"video/mp4", caption: `${nickname}`}, {quoted:m}, m)
                 break
     case 'tiktokmp3':
     case 'tiktokmusic':
	 case 'ttmp3':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (args.length < 1) return m.reply(`Kirim perintah ${command} https://vm.tiktok.com/ZGJAmhSrp/`)        
                if (!isUrl(args[0])) return m.reply(mess.link)
	            if (!args[0].includes('tiktok')) return m.reply(mess.link)
	            m.reply(mess.wait)
                tiktokdlv2(args[0]).then(r => {
                let video = r.video.no_watermark
                Resta.sendMessage(from, { audio: { url: video }, mimetype: 'audio/mp4' }, { quoted: m })
                })
		        break 
     case 'getmusic': 
                if (!text) throw m.reply(`Example : ${prefix + command} 1`) 
                if (!m.quoted) return m.reply('Reply Pesan Hasil Dari Ytsearch')
                if (!m.quoted.isBaileys) throw m.reply (`Hanya Bisa Membalas Pesan Dari Bot`) 
		        let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw m.reply(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`) 
                m.reply(mess.wait)
                let qualitty = args[1] ? args[1] : '128kbps'
                let mepdia = await yta(urls[text - 1], qualitty)
                if (mepdia.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(mepdia))
                Resta.sendImage(m.chat, mepdia.thumb, `⭔ Title : ${mepdia.title}\n⭔ File Size : ${mepdia.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                Resta.sendMessage(m.chat, { audio: { url: mepdia.dl_link }, mimetype: 'audio/mpeg', fileName: `${mepdia.title}.mp3` }, { quoted: m })
                break
     case 'getvideo':
                if (!text) throw m.reply(`Example : ${prefix + command} 1`) 
                if (!m.quoted) return m.reply('Reply Pesan Hasil Dari ytsearch')
                if (!m.quoted.isBaileys) throw m.reply (`Hanya Bisa Membalas Pesan Dari Bot`) 
                let urps = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urps) throw m.reply(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
                m.reply(mess.wait)
                let qualyity = args[1] ? args[1] : '360p'
                let getvideo = await ytv(urls[text - 1], qualyity)
                if (getvideo.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(mepdipa))
                Resta.sendMessage(m.chat, { video: { url: getvideo.dl_link }, mimetype: 'video/mp4', fileName: `${getvideo.title}.mp4`, caption: `⭔ Title : ${getvideo.title}\n⭔ File Size : ${getvideo.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
                break
///RANDOM VIDEO//
    case 'gorerandom':
              noapi.gore()
              let txt = `*${title()}*\n\nUpload by ${author()}\nUploaded at ${upload}\n${vote} Vote\n${view} Views\n\n${'#' + tag}`
              await Resta.sendMessage(m.chat, { video: { url: gor.video1 }, caption: txt })
             break
     case 'asupan': 
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
	           var pklnha = `Example : ${prefix + command} ukhty\n\nOpsi Tersedia:\n• hijaber\n• ukhty\n• rika\n• bocil\n• santuy\n\nBy ${ownerName}`
	           if (!text) throw m.reply(pklnha)
	           m.reply(mess.wait)
	           if (args[0] === "bocil") {
		       anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/asupan/bocil.json`)
	           result = pickRandom(anu)
	           Resta.sendMessage(m.chat, {video:{url: result.url}, mimetype:"video/mp4", caption: `${command} ${args[0]}`}, {quoted:m}, m)
	           } else if (args[0] === "santuy") {
	           anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/asupan/santuy.json`)
	           result = pickRandom(anu)
	           Resta.sendMessage(m.chat, {video:{url: result.url}, mimetype:"video/mp4", caption: `${command} ${args[0]}`}, {quoted:m}, m)
	           } else if (args[0] === "rika") {
	           anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/asupan/rika.json`)
	           result = pickRandom(anu)
	           Resta.sendMessage(m.chat, {video:{url: result.url}, mimetype:"video/mp4", caption: `${command} ${args[0]}`}, {quoted:m}, m)
	           } else if (args[0] === "ukhty") {
	           anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/asupan/ukhty.json`)
	           result = pickRandom(anu)
	           Resta.sendMessage(m.chat, {video:{url: result.url}, mimetype:"video/mp4", caption: `${command} ${args[0]}`}, {quoted:m}, m)
	           } else if (args[0] === "hijaber") {
	           anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/asupan/hijaber.json`)
	           result = pickRandom(anu)
	           Resta.sendMessage(m.chat, {video:{url: result.url}, mimetype:"video/mp4", caption: `${command} ${args[0]}`}, {quoted:m}, m)
	           }
	           break
///QUOTES TEXT///
     case 'katabijak':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                var er = `contoh: ${prefix + command} cinta\n\nOpsi Tersedia:\n• cinta\n• rindu\n• mimpi\n• sedih\n• sendiri\n• sabar\n• kesedihan\n• pernikahan\n• kemerdekaan\n\n By ${ownerName}`
	            if (!text) throw m.reply(er)
		        case 'cinta':
		        case 'rindu':
		        case 'mimpi':
		        case 'sendiri':
		        case 'sabar':
		        case 'kesedihan':
		        case 'pernikahan':
		        case 'kemerdekaan':
			    noapi.quotes(text.toLowerCase()).then(res => {
			    data = JSON.stringify(res)
		        json = JSON.parse(data)
			    let random = Math.floor(Math.random() * json.data.length)
			    hasil = json.data[random]
		        var { author, bio, quote } = hasil
			    m.reply(`“${quote}”\n\n${author} - ${bio}`)
		        })
		        break
      case 'quotes':
                 var asp = `Example : ${prefix + command} katabucin\n\nOpsi Tersedia:\n• katabucin\n• gombal\n• galau\n• dare\n• truth\n• renungan\n• motivasi\n\nBy ${ownerName}`
                 if (!text) throw m.reply(asp)
                 if (args[0] === "katabucin") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/katabucin.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 } else if (args[0] === "gombal") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/gombalan.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 } else if (args[0] === "galau") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/katagalau.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 } else if (args[0] === "dare") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/dare.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 } else if (args[0] === "truth") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/truth.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 } else if (args[0] === "renungan") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/renungan.json`)
                 result = pickRandom(anu)
                 Resta.sendMessage(m.chat, { image: { url: result }, caption: `Quotes ${command}` }, { quoted: m })              
                 } else if (args[0] === "motivasi") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/motivasi.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 }
                 break
      case 'pantun':
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/pantun.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 break
//CONVERTER MEDIA//
      case 'emojimix2':
		         if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
	             if (!text) throw m.reply(`Example : ${prefix + command} 😅`) 
	             anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		         for (let res of anu.results) {
		         let encmedia = await Resta.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		         await fs.unlinkSync(encmedia)
		         }
	             break
      case 'emojimix': {
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		        let [emoji1, emoji2] = text.split`+`
		        if (!emoji1) throw m.reply (`Example : ${prefix + command} 😅+🤔`) 
		        if (!emoji2) throw m.reply (`Example : ${prefix + command} 😅+🤔`) 
		        anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		        for (let res of anu.results) {
		        let encmedia = await Resta.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		        await fs.unlinkSync(encmedia)
		        }
	            }
	            break
      case 'sticker': case 's': case 'stickergif': case 'sgif': {
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                 m.reply(mess.wait)
                 if (/image/.test(mime)) {
                 let media = await quoted.download()
                 let encmedia = await Resta.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                 await fs.unlinkSync(encmedia)
                 } else if (/video/.test(mime)) {
                 if ((quoted.msg || quoted).seconds > 15) return m.reply('Maksimal 10 detik!')
                 let media = await quoted.download()
                 let encmedia = await Resta.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                 await fs.unlinkSync(encmedia)
                 } else {
                 throw m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`) 
                 }
                 }
                 break
      case 'swm': case 'stickerwm':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
       	     if (!args.join(" ")) return m.reply(`Example :\nswm Resta | Gans`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0];
                const atnm = swn.split("|")[1];
                m.reply(mess.wait)
                if (quoted.msg === true) {
                Resta.downloadAndSaveMediaMessage(quoted, "gifee")
                Resta.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
                } else if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await Resta.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await Resta.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                await fs.unlinkSync(encmedia)
                } else {
                m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
                break
      case 'imagenobg':
      case 'removebg': case 'remove-bg':
       	     if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
	            if (!quoted) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	            if (!/image/.test(mime)) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	            if (/webp/.test(mime)) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	            let remobg = require('remove.bg')
	            let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	            let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	            hmm = await './src/remobg-'+getRandom('')
	            localFile = await Resta.downloadAndSaveMediaMessage(qmsg, hmm)
	            outputFile = await './src/hremo-'+getRandom('.png')
	            m.reply(mess.wait)
	            remobg.removeBackgroundFromImageFile({
	            path: localFile,
	            apiKey: apinobg,
	            size: "regular",
	            type: "auto",
	            scale: "100%",
	            outputFile 
	            }).then(async result => {
	            Resta.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	            await fs.unlinkSync(localFile)
	            await fs.unlinkSync(outputFile)
	            })
	            break
    case 'tomp3': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
  if (/document/.test(mime)) throw m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`) 
  if (!/video/.test(mime) && !/audio/.test(mime)) throw m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`) 
  if (!quoted) throw m.reply (`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`) 
  m.reply(mess.wait)
  let media = await quoted.download()
  let audio = await toAudio(media, 'mp4')
  Resta.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${Resta.user.name}.mp3`}, { quoted : m })
  }
  break
      

default:
if (budy.startsWith('=>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }  
 
  if (budy.startsWith('>')) {
  if (!isOwner) return m.reply(mess.botOwner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}


if (budy.startsWith('$')) {
    if (!isOwner) {
        return m.reply(mess.botOwner)
    }
    exec(budy.slice(2), (err, stdout) => {
        if(err) {
            return m.reply(err)
        }
        if (stdout) {
            return m.reply(stdout)
        }
    })
}
}
// Anti Tag ( FenZo||77+ )
const listTag = ["6281233649676@s.whatsapp.net"]
if (m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.participant) {
  const partiNum = m.message.extendedTextMessage.contextInfo.participant
  if (listTag.includes(partiNum)) {
    if (!m.isGroup) return
    if (m.key.fromMe) return
    Resta.readMessages(m.chat, m.sender, [m.key.id])
    Resta.sendImageAsSticker(m.chat, `https://telegra.ph/file/d3d54857a51f531933dc1.png`, m, {packname: packname, author: author})
  }
}
// Antitag Via Tag ( FenZo||77+ )
if (budy.includes("@6281233649676")) {
if (!m.isGroup) return
if (m.key.fromMe) return
Resta.readMessages(m.chat, m.sender, [m.key.id])
Resta.sendImageAsSticker(m.chat, `https://telegra.ph/file/d3d54857a51f531933dc1.png`, m, {packname: packname, author: author})
}
} catch (err) { 
console.log("error di bagian resta.js "+util.format(err))
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyanBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
