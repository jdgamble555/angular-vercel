export const config = {
    runtime: 'edge',
};

const server = require('../dist/angular-vercel/server/main');

module.exports = server.app();