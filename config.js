/*
𝐀𝐮𝐭𝐡𝐨𝐫 : Shirokami Ryzen 
𝐖𝐚 : +6281387307198
𝐛𝐚𝐬𝐞 : Narutomo & Elaina
𝐌𝐲 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 : 22 Nov 2022
Recode : MannHost
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    let wktugeneral = `${wibh}:${wibm}:${wibs}`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

/*============= MAIN INFO =============*/
global.owner = [['62896296205744', 'MannHost', true]]
global.mods = []
global.prems = []
global.nomorbot = '62896296205740'
global.nomorown = '62896296205744'
global.nomorwa = '0'


/*============= WATERMARK =============*/
global.readMore = readMore
global.author = 'MannHost'
global.namebot = 'Yamada-MD'
global.wm = '© Yamada-MD By MannHost'
global.watermark = wm
global.botdate = `⫹⫺ DATE: ${week} ${date}\n⫹⫺ 𝗧𝗶𝗺𝗲: ${wktuwib}`
global.bottime = `T I M E : ${wktuwib}`
global.stickpack = `Yamada-MD`
global.stickauth = `© Yamada By MannHost`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`

/*============= OWNER INFO =============*/
global.nameown1= 'MannHost'
global.nameown2 = 'MannHost'
/*============= MEDIA LINK =============*/
global.Linkgc = 'https://chat.whatsapp.com/Imh14DDCoEO3lQePIvkdfN'
global.lynk = ''
global.yamada = 'https://telegra.ph/file/363a869d9e32ca8d21b47.jpg'


//*============= SOSMED =============*/
global.sig = 'https://www.instagram.com/hyugimura'
global.sgh = 'https://github.com/MannOffc' //github
global.sgc = '-' //group whatsapp
global.sdc = '-' //discord
global.snh = 'https://www.instagram.com/hyugimura'

/*============= DONASI =============*/
global.pdana = '6289509419214'
global.povo = '-'
global.pgopay = '6289509419214'
global.plinkaja = '-' //link aja
global.ppulsa = '6289509419214'
global.ppulsa2 = '6289509419214'
global.psaweria = '-'


/*============= TAMPILAN =============*/
global.ListHargaSewa = '├ 5 Hari IDR 3.000\n├ 7 Hari IDR 5.000\n├ 15+5 Hari IDR 10.000\n├ 30 Hari IDR 15.000'
global.LyAtas1 = '☰ ━━━ ❨'
global.LyAtas2 = '❩ ━━┄┈ •⟅'
global.Ly = '┃'
global.lybwh = '┗━━┈┈ ⳻⳻'
global.sym = '◈▻'
global.sym2 = '➭'
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer
global.dashmenu = '┅═┅═❏ *DASHBOARD* ❏═┅═┅'
global.cmenut = '❏––––––『' //top
global.cmenuh = '』––––––' //header
global.cmenub = '┊✦ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.pmenus = '✦'
global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

/*============= RESPON =============*/
global.wait = 'Please Wait...'
global.eror = 'Error!'

/*============= WEB API KEY =============*/
global.deepai = 'YOUR_APIKEY_HERE'
global.openai = 'YOUR_APIKEY_HERE'  //api key bisa didapatkan dari https://openai.com/api/
global.org = 'YOUR_APIKEY_HERE'  //openAI Organization name
global.lolkey = 'SGWN' //buy API at https://api.lolhuman.xyz
global.xzn = 'YOUR_APIKEY_HERE' //daftar sendiri jika key habis https://skizo.tech/
global.xyro = 'YOUR_APIKEY_HERE' //https://api.xyroinee.xyz/
global.ryzen = 'YOUR_APIKEY_HERE' //daftar di api.ryzendesu.com/
global.manpikey = 'zenkey_ae110e5bf705'

global.APIs = {
  // name: 'https://website'
  alfa: 'https://api.zahwazein.xyz',
  lol: 'https://api.lolhuman.xyz',
  violetics : 'https://violetics.pw',
  males : 'https://api.lolhuman.xyz',
  xzn : 'https://skizo.tech' //web api terserah ganti apa aja (buat welcome sama leave gc)
}

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.zahwazein.xyz': 'zenkey_ae110e5bf705',
  'https://api.lolhuman.xyz': 'SGWN',
  'https://violetics.pw': 'beta',
  'https://skizo.tech' : '',
}

/*============= OTHER =============*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
//OPTIONS
global.optsnsfw = true // Untuk mematikan Dan Menyalakan Nsfw
global.premnsfw = true // Nsfw Mode Premium?
global.thumb = 'https://telegra.ph/file/363a869d9e32ca8d21b47.jpg' //Main Thumbnail
global.imagebot = 'https://telegra.ph/file/363a869d9e32ca8d21b47.jpg'
global.giflogo = 'https://telegra.ph/file/363a869d9e32ca8d21b47.jpg'
global.thumbs = ['https://telegra.ph/file/363a869d9e32ca8d21b47.jpg']
global.thumbnailUrl = [
  'https://telegra.ph/file/363a869d9e32ca8d21b47.jpg'
]
global.fotonya1 = 'https://telegra.ph/file/363a869d9e32ca8d21b47.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/363a869d9e32ca8d21b47.jpg' //ini juga ganti 
global.flaaa2 = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.fla = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.hwaifu = ['https://telegra.ph/file/363a869d9e32ca8d21b47.jpg']
global.thumblvlup = [
  'https://telegra.ph/file/cc444e235a6073ef29b32.jpg',
  'https://telegra.ph/file/6bc4e87932d7ea57b79ef.jpg',
  'https://telegra.ph/file/bc2302ee38daa46c094ea.jpg',
  'https://telegra.ph/file/c552a9fb2848811247f82.jpg'
]

global.dtu = 'INSTAGRAM'
global.urlnya = "https://www.instagram.com/hyugimura"
global.dtc = 'CALL OWNER'
global.phn = '62896296205744'


/*============= JANGAN DIUBAH =============*/
global.fsizedoc = '99999999999999'
global.fpagedoc = '999'
global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

/*============= RESPON GAME =============*/
global.benar = 'Good Job! ◕◡◕'
global.salah = 'Not Bad! ◕◠◕'
global.dikit = "Dikit Lagi, Gambare!!"


/*============= RPG GAME =============*/
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}
