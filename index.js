const crypto = require('crypto');
const base64 = require('base-64');
const fs = require('fs');
const readline = require('readline');

const MC4_AES256CBC_KEY = Buffer.from('304c6528f659c766110239a51cl5dd9c', 'utf8');
const MC4_AES256CBC_IV = Buffer.from('u@}kzW2u[u(8DWar', 'utf8');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function decryptData(data) {
    let binData = base64.decode(data);
    const decipher = crypto.createDecipheriv('aes-256-cbc', MC4_AES256CBC_KEY, MC4_AES256CBC_IV);
    let decrypted = decipher.update(binData, 'binary', 'utf8');
    decrypted += decipher.final('utf8');
    console.log("[*] Decrypted File Successfully!\n");
    return decrypted;
}

function encryptData(data) {
    const cipher = crypto.createCipheriv('aes-256-cbc', MC4_AES256CBC_KEY, MC4_AES256CBC_IV);
    let encrypted = cipher.update(data, 'utf8', 'binary');
    encrypted += cipher.final('binary');
    const b64Data = base64.encode(encrypted);
    console.log("[*] Encrypted File Successfully!\n");
    return b64Data;
}

function processFile(option, filename) {
    try {
        let data = fs.readFileSync(filename, 'utf8');
        fs.writeFileSync(`${filename}.bak`, data);  // Save a backup

        if (option === 'd') {
            data = decryptData(data);
        } else if (option === 'e') {
            data = encryptData(data);
        }

        fs.writeFileSync(filename, data);
        console.log(`[*] File processed and saved as ${filename}`);
    } catch (err) {
        console.error(`[*] Could Not Access The File (${filename})`);
        console.error(err.message);
    }
    rl.close();
}

rl.question('Do you want to (e)ncrypt or (d)ecrypt? ', (option) => {
    if (option !== 'e' && option !== 'd') {
        console.log("Invalid option. Use 'e' for encrypt or 'd' for decrypt.");
        rl.close();
        return;
    }

    rl.question('Enter the filename: ', (filename) => {
        processFile(option, filename);
    });
});



/**
 * Credit: 
 * https://github.com/bucanero/save-decrypters/tree/master/mc4-cheat-decrypter
 * https://github.com/bucanero
 */