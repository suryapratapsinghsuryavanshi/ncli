const welcome = require("cli-welcome");
const package = require("./../package.json");
const unhandled = require("cli-handle-unhandled");

module.exports = ({ clear }) => {
    unhandled();
    welcome({
        title: '{{name}}',
        tagLine: 'by {{authorName}}',
        description: package.description,
        bgColor: `#6cc24a`,
        color: '#000000',
        bold: true,
        version: package.version,
        clear
    });
};
