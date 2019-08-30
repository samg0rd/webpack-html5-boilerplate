const testModules = require('./test-module');
require('../css/app.css');
require('../css/style.css');
var SimpleCrypto = require("simple-crypto-js").default;
var $ = require("jquery");

/********** Paste your code here! ************/

console.log('Paste your code here!');
console.log(testModules.hello);


// If you would like to generate a random unique key, you may use static function generateRandom() like so
// var _secretKey = SimpleCrypto.generateRandom();
// You may also set the strength of the random key, as example 256 (default is 128);
// var _secretKey = SimpleCrypto.generateRandom(256);
// Or just defined the key by yourself (key is must!)
var _secretKey = "some-unique-key";

var simpleCrypto = new SimpleCrypto(_secretKey);

var plainText = "Hello World!";
var chiperText = simpleCrypto.encrypt(plainText);
console.log("Encryption process...");
console.log("Plain Text    : " + plainText);
console.log("Cipher Text   : " + chiperText);
var decipherText = simpleCrypto.decrypt(chiperText);
console.log("... and then decryption...");
console.log("Decipher Text : " + decipherText);
console.log("... done.");


$(document).ready(function () {
  $('nav').addClass('testJquery');
})
