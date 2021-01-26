const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const get = require("got");
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require("node-fetch");
const urlencode = require("urlencode");
const axios = require("axios");
const imageToBase64 = require("image-to-base64");
const menu = require("./lib/menu.js");
const donate = require("./lib/donate.js");
const info = require("./lib/info.js");
const CI = require('./lib/coin-info')
const express = require('express');
const expressApp = express();


const BotName = "CryptoTeam BOT 🤖"; // Nama Bot Whatsapp
const instagramlu = "https://instagram.com/bintang_nur_pradana"; // Nama Instagramlu cok
const whatsapplu = "0000-0000-0000"; // Nomor whatsapplu cok
const kapanbotaktif = "Tife Time"; // Kapan bot lu aktif


const { WAConnection, MessageType, Presence, MessageOptions, Mimetype, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, waChatKey } = require("@adiwajshing/baileys");
var jam = moment().format("HH:mm");

function foreach(arr, func) {
    for (var i in arr) {
        func(i, arr[i]);
    }
}
const conn = new WAConnection();
conn.on("qr", (qr) => {
    qrcode.generate(qr, {
        small: true,
    });
    console.log(`[ ${moment().format("HH:mm:ss")} ] Scan kode qr mu cok!`);
});

conn.on("credentials-updated", () => {
    // save credentials whenever updated
    console.log(`credentials updated!`);
    const authInfo = conn.base64EncodedAuthInfo(); // get all the auth info we need to restore this session
    fs.writeFileSync("./session.json", JSON.stringify(authInfo, null, "\t")); // save this info to a file
});
fs.existsSync("./session.json") && conn.loadAuthInfo("./session.json");
// uncomment the following line to proxy the connection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
//conn.connect()
conn.connect()
//expressApp.use()
conn.on("user-presence-update", (json) => console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @bintang_nur_pradana`));
conn.on("message-status-update", (json) => {
    const participant = json.participant ? " (" + json.participant + ")" : ""; // participant exists when the message is from a group
    console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @bintang_nur_pradana`);
});

conn.on("message-new", async (m) => {
    const messageContent = m.message;
    const text = m.message.conversation;
    let id = m.key.remoteJid;
    const messageType = Object.keys(messageContent)[0]; // message will always contain one key signifying what kind of message
    let imageMessage = m.message.imageMessage;
    console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);

    if(text.includes("p")){
        const coin = text.replace(/p /, "").toLowerCase();
        const data = await fetch('https://api.coingecko.com/api/v3/coins/list').then(res => res.json())
        for(let i in data){
            if(data[i].symbol === coin){
                //let res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${data[i].id}&vs_currencies=idr`).then(res => res.json());
                const ci = new CI(data[i].id).getInfo()
                ci.then(res => {
                    conn.sendMessage(id,res, MessageType.text)
                })
                
            }
        }
        
    }
    
    if(text.includes("market")){
        const coin = text.replace(/market /, "").toLowerCase();
        const data = await fetch('https://api.coingecko.com/api/v3/coins/list').then(res => res.json())
        for(let i in data){
            if(data[i].symbol === coin){
                
                const ci = await new CI(data[i].id).getMarket()
                conn.sendMessage(id, ci, MessageType.text)
            }
        }
        
    }
    
    if (text.includes("calc")) {
	    const amount = text.split(" ")[1];
	    const from = text.split(" ")[2].toUpperCase();
	    const res = await axios.get(`https://pro-api.coinmarketcap.com/v1/tools/price-conversion?amount=${amount}&symbol=${from}&convert=IDR`, { headers: {'X-CMC_PRO_API_KEY': '5aa6575d-dc69-4245-86df-b43de888fa23','Accept': 'application/json'} })
	        const result = res.data.data.quote['IDR'].price;
	        const re = await new CI().convert(amount, from, result)
            conn.sendMessage(id, re, MessageType.text)
	}
	
	if (text == "#help") {
        const corohelp = await get.get("https://covid19.mathdro.id/api/countries/id").json();
        var date = new Date();
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        switch (hari) {
            case 0:
                hari = "Minggu";
                break;
            case 1:
                hari = "Senin";
                break;
            case 2:
                hari = "Selasa";
                break;
            case 3:
                hari = "Rabu";
                break;
            case 4:
                hari = "Kamis";
                break;
            case 5:
                hari = "Jum'at";
                break;
            case 6:
                hari = "Sabtu";
                break;
        }
        switch (bulan) {
            case 0:
                bulan = "Januari";
                break;
            case 1:
                bulan = "Februari";
                break;
            case 2:
                bulan = "Maret";
                break;
            case 3:
                bulan = "April";
                break;
            case 4:
                bulan = "Mei";
                break;
            case 5:
                bulan = "Juni";
                break;
            case 6:
                bulan = "Juli";
                break;
            case 7:
                bulan = "Agustus";
                break;
            case 8:
                bulan = "September";
                break;
            case 9:
                bulan = "Oktober";
                break;
            case 10:
                bulan = "November";
                break;
            case 11:
                bulan = "Desember";
                break;
        }
        var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
        var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
        conn.sendMessage(id, menu.menu(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif), MessageType.text);
    } else if (text == "assalamualaikum") {
        conn.sendMessage(id, "3aalaikumsalam, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "salam") {
        conn.sendMessage(id, "Waalaikumsalam, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "asalamualaikum") {
        conn.sendMessage(id, "Waalaikumsalam, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "Assalamualaikum") {
        conn.sendMessage(id, "Waalaikumsalam, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "p") {
        conn.sendMessage(id, "Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "P") {
        conn.sendMessage(id, "Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "halo") {
        conn.sendMessage(id, "Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "hai") {
        conn.sendMessage(id, "Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "woi") {
        conn.sendMessage(id, "Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "woy") {
        conn.sendMessage(id, "Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "hi") {
        conn.sendMessage(id, "Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "gan") {
        conn.sendMessage(id, "Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "sis") {
        conn.sendMessage(id, "Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "bro") {
        conn.sendMessage(id, "Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "min") {
        conn.sendMessage(id, "Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "sayang") {
        conn.sendMessage(id, "Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "i love u") {
        conn.sendMessage(id, "love you too", MessageType.text);
    } else if (text == "mas") {
        conn.sendMessage(id, "Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "mba") {
        conn.sendMessage(id, "Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "bre") {
        conn.sendMessage(id, "Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "cuy") {
        conn.sendMessage(id, "Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "euy") {
        conn.sendMessage(id, "Ya?, ada yang bisa saya bantu? kalo bingung ketik #help ya say..", MessageType.text);
    } else if (text == "makasi") {
        conn.sendMessage(id, "Sama sama, semoga harimu menyenangkan :)", MessageType.text);
    } else if (text == "Makasi") {
        conn.sendMessage(id, "Sama sama, semoga harimu menyenangkan :)", MessageType.text);
    } else if (text == "makasih") {
        conn.sendMessage(id, "Sama sama, semoga harimu menyenangkan :)", MessageType.text);
    } else if (text == "Makasih") {
        conn.sendMessage(id, "Sama sama, semoga harimu menyenangkan :)", MessageType.text);
    } else if (text == "thank") {
        conn.sendMessage(id, "Sama sama, semoga harimu menyenangkan :)", MessageType.text);
    } else if (text == "Thank") {
        conn.sendMessage(id, "Sama sama, semoga harimu menyenangkan :)", MessageType.text);
    } else if (text == "thanks") {
        conn.sendMessage(id, "Sama sama, semoga harimu menyenangkan :)", MessageType.text);
    } else if (text == "Thanks") {
        conn.sendMessage(id, "Sama sama, semoga harimu menyenangkan :)", MessageType.text);
    } else if (text == "#info") {
        const corohelp = await get.get("https://covid19.mathdro.id/api/countries/id").json();
        var date = new Date();
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        switch (hari) {
            case 0:
                hari = "Minggu";
                break;
            case 1:
                hari = "Senin";
                break;
            case 2:
                hari = "Selasa";
                break;
            case 3:
                hari = "Rabu";
                break;
            case 4:
                hari = "Kamis";
                break;
            case 5:
                hari = "Jum'at";
                break;
            case 6:
                hari = "Sabtu";
                break;
        }
        switch (bulan) {
            case 0:
                bulan = "Januari";
                break;
            case 1:
                bulan = "Februari";
                break;
            case 2:
                bulan = "Maret";
                break;
            case 3:
                bulan = "April";
                break;
            case 4:
                bulan = "Mei";
                break;
            case 5:
                bulan = "Juni";
                break;
            case 6:
                bulan = "Juli";
                break;
            case 7:
                bulan = "Agustus";
                break;
            case 8:
                bulan = "September";
                break;
            case 9:
                bulan = "Oktober";
                break;
            case 10:
                bulan = "November";
                break;
            case 11:
                bulan = "Desember";
                break;
        }
        var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
        var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
        conn.sendMessage(id, info.info(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif), MessageType.text);
    } else if (text == "#ptl") {
        conn.sendMessage(id, "kirim #ptl cewek/cowok\n\nContoh: #ptl cewek", MessageType.text);
    }
    if (messageType == "imageMessage") {
        let caption = imageMessage.caption.toLocaleLowerCase();
        const buffer = await conn.downloadMediaMessage(m); // to decrypt & use as a buffer
        if (caption == "#sticker") {
            const stiker = await conn.downloadAndSaveMediaMessage(m); // to decrypt & save to file

            const { exec } = require("child_process");
            exec("cwebp -q 50 " + stiker + " -o temp/" + jam + ".webp", (error, stdout, stderr) => {
                let stik = fs.readFileSync("temp/" + jam + ".webp");
                conn.sendMessage(id, stik, MessageType.sticker);
            });
        }
    }
    if (messageType === MessageType.text) {
        let is = m.message.conversation.toLocaleLowerCase();

        if (is == "#pantun") {
            fetch("https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt")
                .then((res) => res.text())
                .then((body) => {
                    let tod = body.split("\n");
                    let pjr = tod[Math.floor(Math.random() * tod.length)];
                    let pantun = pjr.replace(/pjrx-line/g, "\n");
                    conn.sendMessage(id, pantun, MessageType.text);
                });
        }
    }


});

expressApp.get('/', (req, res) => {
  res.send('Hello World!');
});
expressApp.listen('3000', () => {
  console.log(`Server running on port '3000`);
});