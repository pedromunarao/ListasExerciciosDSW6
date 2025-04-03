// loggercolor.js
const { debuglog, inspect } = require('util');
const chalk = require('chalk'); // Biblioteca para cores no console

const levels = {
    ERROR: chalk.red,
    WARNING: chalk.yellow,
    INFO: chalk.green,
};

const envLevel = process.env.NODE_DEV || 'INFO';

const log = debuglog('logger');

function error() {
    if (envLevel === 'ERROR') {
        log(levels.ERROR(inspect('Erro: Algo deu errado!')));
    }
}

function warning() {
    if (envLevel === 'WARNING' || envLevel === 'ERROR') {
        log(levels.WARNING(inspect('Aviso: Algo pode estar errado!')));
    }
}

function info() {
    if (envLevel === 'INFO' || envLevel === 'WARNING' || envLevel === 'ERROR') {
        log(levels.INFO(inspect('Informação: Tudo funcionando corretamente!')));
    }
}

module.exports = { error, warning, info };
