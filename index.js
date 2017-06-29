'use strict';

function hostname() {
    return require('os').hostname();
}

module.exports = hostname;
