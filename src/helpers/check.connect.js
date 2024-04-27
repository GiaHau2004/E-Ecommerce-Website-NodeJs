'use strict'

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');
const _SECONDS = 5000;

// Count connect
const countConnection = () => {
    const numConnection = mongoose.connections.length;
    console.log(`Number of connection :: ${numConnection}`);
};

// Check over load
const checkOverLoad = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;
        //Example maximum number of connection based on number osf cores
        const maxConnections = numCores * 5;

        console.log(`Active connection: ${numConnection}`);
        console.log(`Memory usage :: ${memoryUsage / 1024 / 1024}MB`);

        if (numConnection > maxConnections) {
            console.log(`Connection overload detected!`);
        }
    }, _SECONDS);// Monitor every 5 seconds
}

module.exports = {
    countConnection,
    checkOverLoad
}