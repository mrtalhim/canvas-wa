const qrcode = require('qrcode-terminal');
const { Client, MessageMedia } = require('whatsapp-web.js');

const client = new Client({
    puppeteer: {
        args: ['--no-sandbox'],
    }
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

client.on('message', message => {
    console.log(message.body);

    if (message.body === '!sertif') {
        console.log('message received!');
        var media = MessageMedia.fromFilePath('./image.png');
        console.log(media)
        if (media) {
            client.sendMessage(message.from, media);
            console.log("kirim sertif berhasil")
        }
        else {
            client.sendMessage(message.from, 'kirim sertif gagal');
        }
    }

    if (message.body === '!hello') {
        console.log('received!!')
        client.sendMessage(message.from, 'hello bot!')
    }
});
