# File Encryption and Decryption Script

This script provides a simple way to encrypt and decrypt files using AES-256-CBC encryption. It uses the `crypto`, `base-64`, `fs`, and `readline` modules in Node.js.

## Dependencies

- Node.js
- crypto
- base-64
- fs
- readline

## Usage

1. Run the script in your terminal: `node script.js`
2. You will be prompted to choose an option: `(e)ncrypt` or `(d)ecrypt`.
3. Enter the filename you want to process.

The script will then encrypt or decrypt the file based on your choice. A backup of the original file is saved with the `.bak` extension.

## Functions

- `decryptData(data)`: This function takes a base64 encoded string, decrypts it using AES-256-CBC, and returns the decrypted string.
- `encryptData(data)`: This function takes a string, encrypts it using AES-256-CBC, and returns the base64 encoded encrypted string.
- `processFile(option, filename)`: This function reads a file, processes it based on the provided option ('e' for encryption, 'd' for decryption), and writes the processed data back to the file.

## Credits:
This script was originally written in C. However, as my proficiency lies more in JavaScript and I’m not as comfortable with C, C# or C++, So I decided to convert the code into JavaScript.

This script is based on the work of bucanero and his mc4-cheat-decrypter project.
- [Bucanero](https://github.com/bucanero)
- [mc4-cheat-decrypter](https://github.com/bucanero/save-decrypters/tree/master/mc4-cheat-decrypter)
