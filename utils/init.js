const welcome = require("cli-welcome");
const package = require("./../package.json");
const unhandled = require("cli-handle-unhandled");

module.exports = () => {
    unhandled();
    welcome({
        title: 'create-nodejs-cli',
        tagLine: 'by Suryapratap',
        description: package.description,
        bgColor: `#6cc24a`,
        color: '#000000',
        bold: true,
        clear: true,
        version: package.version
    });
};
