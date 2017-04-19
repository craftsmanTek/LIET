const LIET = require('./src/LIET.js');

const deviceId = '/dev/cu.wchusbserial1420';
const baudRate = 9600;

const liet = new LIET(deviceId, baudRate);

// liet.sendInstruction("Hello World");

