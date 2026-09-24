const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
const array = new Uint8Array(16);
const crypto = require('crypto');
const randomBytes = crypto.randomBytes(16);
let secret = Array.from(randomBytes).map(n => chars[n % 32]).join('');
console.log(secret);
