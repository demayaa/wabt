exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU DONASI ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? ✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Silahkan donasi dibawah ini :
   
⚜ *OVO*: 081329896085
⚜ *#DANA*: 081329896085
⚜ *#BANK*: 081329896085
⚜ *#PULSA*: 081329896085
⚜ *#GOPAY*: 081329896085
⚜ *#SAWERIA*: https://saweria.co/donate/bintangnurpradana

📺 *Iklan* :

✅ Follow akun instagram admin ${instagramlu}

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

♻️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️

✳️ Official Grub [1] : ${grupch1}

✳️ Official Grub [2] : ${grupch2}

  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
/**
 *     // Groups
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
    if (text.includes("#ptl cewek")) {
        var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl"];
        var cewe = items[Math.floor(Math.random() * items.length)];
        var url = "https://api.fdci.se/rep.php?gambar=" + cewe;

        axios.get(url).then((result) => {
            var b = JSON.parse(JSON.stringify(result.data));
            var cewek = b[Math.floor(Math.random() * b.length)];
            imageToBase64(cewek) // Path to the image
                .then((response) => {
                    var buf = Buffer.from(response, "base64"); // Ta-da
                    conn.sendMessage(id, buf, MessageType.image);
                })
                .catch((error) => {
                    console.log(error); // Logs an error if there was one
                });
        });
    }
    if (text.includes("#ptl cowok")) {
        var items = ["cowo ganteng", "cogan", "korean boy", "chinese boy", "japan boy"];
        var cewe = items[Math.floor(Math.random() * items.length)];
        var url = "https://api.fdci.se/rep.php?gambar=" + cewe;

        axios.get(url).then((result) => {
            var b = JSON.parse(JSON.stringify(result.data));
            var cewek = b[Math.floor(Math.random() * b.length)];
            imageToBase64(cewek) // Path to the image
                .then((response) => {
                    var buf = Buffer.from(response, "base64"); // Ta-da
                    conn.sendMessage(id, buf, MessageType.image);
                })
                .catch((error) => {
                    console.log(error); // Logs an error if there was one
                });
        });
    }
    if (text.includes("#randomanime")) {
        var items = ["anime girl", "anime cantik", "anime", "anime aesthetic"];
        var cewe = items[Math.floor(Math.random() * items.length)];
        var url = "https://api.fdci.se/rep.php?gambar=" + cewe;

        axios.get(url).then((result) => {
            var b = JSON.parse(JSON.stringify(result.data));
            var cewek = b[Math.floor(Math.random() * b.length)];
            imageToBase64(cewek) // Path to the image
                .then((response) => {
                    var buf = Buffer.from(response, "base64"); // Ta-da
                    conn.sendMessage(id, buf, MessageType.image);
                })
                .catch((error) => {
                    console.log(error); // Logs an error if there was one
                });
        });
    }
    // end of file
**/