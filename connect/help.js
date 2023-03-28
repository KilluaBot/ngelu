const chalk = require('chalk')
const fs = require('fs')
const os = require('os')
const moment = require('moment-timezone')
const hour_now = moment().format('hh:mm:ss')
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
let users = db.data.users[m.sender]
srl = '乂'
ctc = '❒'
text = '*Text*'
link = '*Links*'
query = '*Query*'
npo = '*Number*'
mv = '*Image/Video*'
im = '*Image*'
sd = '*Sound*'
vd ='*Video*'
emo = '*Emoji*'
gre = '```'
foz = '│'
exports.allmenu = (prefix, pushname, namaBot, ownerName, runtime, formatp, tipes, latensiu) => {
return `${srl}  *Menu ${namaBot}* ${srl}

┌───────⭓
${foz}${gre}👤 Name: ${db.data.users[m.sender].name}
${foz}🎉 Umur: ${db.data.users[m.sender].age}
${foz}💾 Registered: ${db.data.users[m.sender].registered ? '✅' : '❎'}
${foz}📞 Nomor: @${m.sender.split("@")[0]}
${foz}🗓️ Masehi: ${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('dddd, DD MMMM YYYY')}
${foz}📆 Hijriah: ${Intl.DateTimeFormat('id' + '-TN-u-ca-islamic', {
    day: 'numeric', month: 'long', year: 'numeric'
    }).format(new Date(new Date + 3600000))}
${foz}📡 Server Time:
${foz}${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss')} WIB
${foz}${moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss')} WITA
${foz}${moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss')} WIT
${foz}📊 Pemilik: ${ownerName}
${foz}🖥️ Hostname: ${os.hostname()}
${foz}💻 Platform: ${os.platform()}
${foz}📄 Release: ${os.release()}
${foz}⌛ OS Uptime: ${runtime(os.uptime())}
${foz}🔖 Version: ${os.version()}
${foz}🕛 Runtime: ${runtime(process.uptime())}
${foz}🛰️ Ram: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())} 
${foz}📨 Ping: ${latensiu.toFixed(4)}${gre} _*Ms*_
└───────⭓


${srl} *OTHERS* ${srl}
${ctc} ${prefix}qc ${query}
${ctc} ${prefix}npmjs ${query}
${ctc} ${prefix}gempa
${ctc} ${prefix}gsmarena ${query}
${ctc} ${prefix}ai ${text}
${ctc} ${prefix}openai ${text}
${ctc} ${prefix}verifikasi
${ctc} ${prefix}ceksn
${ctc} ${prefix}donasi
${ctc} ${prefix}readme
${ctc} ${prefix}snk
${ctc} ${prefix}owner
${ctc} ${prefix}listchannel
${ctc} ${prefix}listonline
${ctc} ${prefix}litsprivate
${ctc} ${prefix}litsgroup
${ctc} ${prefix}listblock
${ctc} ${prefix}unreg ${text}
${ctc} ${prefix}afk ${text}
${ctc} ${prefix}simi ${text}
${ctc} ${prefix}tts ${text}

${srl} *Converter To Link* ${srl}
${ctc} ${prefix}tinyurl ${link}
${ctc} ${prefix}tourl ${im} / ${vd}

${srl} *QUOTES* ${srl}
${ctc} ${prefix}katabijak
${ctc} ${prefix}quotes
${ctc} ${prefix}pantun 

${srl} *GROUP SETTINGS* ${srl}
${ctc} ${prefix}antivionce
${ctc} ${prefix}antilink 
${ctc} ${prefix}ephemeral
${ctc} ${prefix}welcomegroup
${ctc} ${prefix}delete
${ctc} ${prefix}leave
${ctc} ${prefix}linkgc
${ctc} ${prefix}revoke
${ctc} ${prefix}kick 
${ctc} ${prefix}add
${ctc} ${prefix}promote
${ctc} ${prefix}demote
${ctc} ${prefix}setsubject
${ctc} ${prefix}setdesc
${ctc} ${prefix}setppgrup
${ctc} ${prefix}tagall
${ctc} ${prefix}hidetag
${ctc} ${prefix}getpic *Balas Quotednya*

${srl} *GAMES JADIAN* ${srl}
${ctc} ${prefix}tembakpasangan 
${ctc} ${prefix}terimapasangan
${ctc} ${prefix}cekpasangan
${ctc} ${prefix}putuspasangan
${ctc} ${prefix}tolakpasangan
${ctc} ${prefix}ikhlasinpasangan

${srl} *STALK* ${srl}
${ctc} ${prefix}igstalk ${query}
${ctc} ${prefix}githubstalk ${query}

${srl} *SEARCHING* ${srl}
${ctc} ${prefix}play ${query}
${ctc} ${prefix}brainly ${query}
${ctc} ${prefix}joox ${query}
${ctc} ${prefix}ytsearch ${query}
${ctc} ${prefix}pinterest ${query}
${ctc} ${prefix}sfilesearch ${query}
${ctc} ${prefix}google ${query}

${srl} *VIDEO RANDOM* ${srl}
${ctc} ${prefix}asupan
${ctc} ${prefix}gorerandom *error*

${srl} *DOWNLOADS* ${srl}
${ctc} ${prefix}igvideo ${link}
${ctc} ${prefix}igfoto ${link}
${ctc} ${prefix}ytmp3 ${link}
${ctc} ${prefix}ytmp4 ${link}
${ctc} ${prefix}cocofun ${link}
${ctc} ${prefix}likevideo ${link}
${ctc} ${prefix}gitclone ${link}
${ctc} ${prefix}tiktok ${link}
${ctc} ${prefix}tiktoknowm ${link}
${ctc} ${prefix}tiktokmusic ${link}
${ctc} ${prefix}soundcloud ${link}
${ctc} ${prefix}mediafire ${link}
${ctc} ${prefix}sfilemobi ${link}

${srl} *CONVERTER MEDIA* ${srl}
${ctc} ${prefix}sticker ${im}
${ctc} ${prefix}toimg *Reply Sticker nya*
${ctc} ${prefix}smeme ${query}
${ctc} ${prefix}stickergif ${vd}
${ctc} ${prefix}removebg ${im}
${ctc} ${prefix}stickerwm ${text}
${ctc} ${prefix}emojimix2 ${emo}
${ctc} ${prefix}emojimix ${emo} | ${emo}
${ctc} ${prefix}whatmusic ${sd} | ${vd}

${srl} *STICKER API* ${srl}
${ctc} ${prefix}mukalu
${ctc} ${prefix}gojosatoru
${ctc} ${prefix}animegif
${ctc} ${prefix}bucin
${ctc} ${prefix}manusialidi
${ctc} ${prefix}paimon
${ctc} ${prefix}patrickgif
${ctc} ${prefix}spongebob
${ctc} ${prefix}dinokuning
${ctc} ${prefix}among
${ctc} ${prefix}rabbit
${ctc} ${prefix}random
${ctc} ${prefix}gura
${ctc} ${prefix}anime
${ctc} ${prefix}pentol
${ctc} ${prefix}patrick
${ctc} ${prefix}doge

${srl} *WALLPAPER API* ${srl}
${ctc} ${prefix}meme
${ctc} ${prefix}darkjokes
${ctc} ${prefix}mountain
${ctc} ${prefix}programing
${ctc} ${prefix}gaming
${ctc} ${prefix}teknologi
${ctc} ${prefix}aesthetic
${ctc} ${prefix}mobil
${ctc} ${prefix}motor
${ctc} ${prefix}anjing
${ctc} ${prefix}kucing
${ctc} ${prefix}cogan
${ctc} ${prefix}cecan
${ctc} ${prefix}kpop
${ctc} ${prefix}justina
${ctc} ${prefix}hacker
${ctc} ${prefix}pubg

${srl} *TEXT MAKER* ${srl}
${ctc} ${prefix}candy ${text}
${ctc} ${prefix}christmas ${text}
${ctc} ${prefix}3dchristmas ${text}
${ctc} ${prefix}sparklechristmas ${text}
${ctc} ${prefix}deepsea ${text}
${ctc} ${prefix}scifi ${text}
${ctc} ${prefix}rainbow2 ${text}
${ctc} ${prefix}waterpipe ${text}
${ctc} ${prefix}spooky ${text}
${ctc} ${prefix}pencil ${text}
${ctc} ${prefix}circuit ${text}
${ctc} ${prefix}discovery ${text}
${ctc} ${prefix}metalic ${text}
${ctc} ${prefix}fiction ${text}
${ctc} ${prefix}demon ${text}
${ctc} ${prefix}transformer ${text}
${ctc} ${prefix}berry ${text}
${ctc} ${prefix}thunder ${text}
${ctc} ${prefix}3dstone2 ${text}
${ctc} ${prefix}neonlight ${text}
${ctc} ${prefix}glitch ${text}
${ctc} ${prefix}harrypotter ${text}
${ctc} ${prefix}brokenglass ${text}
${ctc} ${prefix}papercut ${text}
${ctc} ${prefix}watercolor ${text}
${ctc} ${prefix}multicolor ${text}
${ctc} ${prefix}neondevil ${text}
${ctc} ${prefix}underwater ${text}
${ctc} ${prefix}graffitibike ${text}
${ctc} ${prefix}snow ${text}
${ctc} ${prefix}cloud ${text}
${ctc} ${prefix}honey ${text}
${ctc} ${prefix}ice ${text}
${ctc} ${prefix}fruitjuice ${text}
${ctc} ${prefix}biscuit ${text}
${ctc} ${prefix}wood ${text}
${ctc} ${prefix}chocolate ${text}
${ctc} ${prefix}strawberry ${text}
${ctc} ${prefix}matrix ${text}
${ctc} ${prefix}blood ${text}
${ctc} ${prefix}dropwater ${text}
${ctc} ${prefix}toxic ${text}
${ctc} ${prefix}lava ${text}
${ctc} ${prefix}rock ${text}
${ctc} ${prefix}bloodglas ${text}
${ctc} ${prefix}halloween ${text}
${ctc} ${prefix}darkgold ${text}
${ctc} ${prefix}joker ${text}
${ctc} ${prefix}wicker ${text}
${ctc} ${prefix}firework ${text}
${ctc} ${prefix}skeleton ${text}
${ctc} ${prefix}blackpink ${text}
${ctc} ${prefix}sand ${text}
${ctc} ${prefix}glue ${text}
${ctc} ${prefix}1917 ${text}
${ctc} ${prefix}leaves ${text}
${ctc} ${prefix}demon ${text}`
}
exports.bahasa = (prefix) => {
    return `*List kode Bahasa*\n
  *Code       Bahasa*
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh `
}
exports.channel= (prefix) => {
return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.snk= (prefix) => {
return ` ➠ Batas usia pengguna (user) minimal 15 - 35 tahun, lebih atau kurang dari itu akan langsung ter-banned saat melakukan verifikasi.

➠ Data pengguna (user), grup, dan chat akan terhapus otomatis apabila tidak terdeteksi aktifitas selama 7 hari (alasan: pembersihan database).

➠ Dilarang melakukan spam, beri jeda untuk setiap penggunaan command selama 3 detik.

➠ Dilarang melakukan panggilan suara maupun video (Telepon & Video Call), jika itu dilakukan maka akan ter-blokir.

➠ Dilarang toxic terhadap bot karena akan medapatkan sanksi berupa banned dan blokir.

➠ Dilarang mencari & membuat konten dewasa (+18), misalnya membuat stiker dari foto telanjang atau mencari ASMR desah.

➠ Jika ingin membuka blokir dan banned masing² dikenai biaya sebesar 5K.

➠ Pelaku spam akan di banned permanen berlaku untuk user gratis dan premium (+ no refund).

➠ Semua Syarat & Ketentuan dapat berubah sewaktu waktu tanpa pemberitahuan terlebih dahulu.`
}
exports.readme= (prefix) => {
return ` *「 STALK 」*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktokstalk @tobz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}igstalk @tobz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smulestalk @tobz2k19*

            *「 YT SEARCH 」*

*[video]* Diisi dengan Judul Video yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}video Erpan1140*
Jika ingin mendownload video harap ketik #getvideo [IdDownload] atau #getvideo [urutan]

*[lagu]* Diisi dengan Judul Lagu yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}music Alan Walker Alone*
Jika ingin mendownload lagu harap ketik #getmusic [IdDownload] atau #getmusic [urutan]

*[IdDownload] atau [urutan]* Diisi dengan IdDownload yang valid tanpa tanda “[” dan “]”
Contoh : *Jika tidak reply pesan : ${prefix}getmusic Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getmusic 1*
Contoh : *Jika tidak reply pesan : ${prefix}getvideo Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getvideo 1*

            *「 DOWNLOADER 」*

*[linkStarmaker]* Diisi dengan link Starmaker yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}starmaker https://m.starmakerstudios.com/d/playrecording?app=sm&from_user_id=3096224747920316&is_convert=true&recordingId=10696049124506354&share_type=copyLink*

*[linkTwitter]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}twitter https://twitter.com/PassengersMovie/status/821025484150423557*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp4 https://youtu.be/Bskehapzke8*

*[linkTiktok]* Diisi dengan link Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

*[linkSmule]* Diisi dengan link Smule yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smule https://www.smule.com/p/767512225_3062360163*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[linkTiktok]* Diisi dengan link facebookt Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

            *「 OTHER 」*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalShalat Tangerang*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalTv Indosiar*

*[query]* Diisi dengan query/pencarian yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}googlesearch siapa itu elaina*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}cuaca tangerang*

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *${prefix}quotemaker |Odading|Mang Oleh|Shark*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *${prefix}lirik aku bukan boneka*`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.red(`Update ${__filename}`))
delete require.cache[file]
require(file)
})