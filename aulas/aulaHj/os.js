const os = require("os");

console.log(os.cpus());
console.log(perseInt(os.freemem() / 1024 / 1024));
console.log(parseInt(os.totalmem() / 1024 / 1024));
console.log(os.platform());
console.log.log(parseInt(os.uptime() / 60 / 60));
console.log(os.EOL);


