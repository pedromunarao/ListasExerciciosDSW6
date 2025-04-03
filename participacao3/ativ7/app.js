// app.js
const { error, warning, info } = require('./logger.js');

testLogs();

function testLogs() {
    console.log('\nRodando logger com NODE_DEV=' + process.env.NODE_DEV);
    error();
    warning();
    info();
}
