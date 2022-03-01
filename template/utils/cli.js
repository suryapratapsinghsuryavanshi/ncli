const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
    clear: {
        type: 'boolean',
        default: true,
        alias: 'c',
        desc: 'Clear the terminal before the welcome message'
    },
    debug: {
        type: 'boolean',
        default: false,
        alias: 'd',
        desc: 'Enable debug mode'
    },
    version: {
        type: 'boolean',
        alias: 'v',
        desc: 'Show the version number of CLI'
    }
};

const commands = {
    help: {
        desc: 'Show help for CLI',
    },
};

const helpText = meowHelp({
    name: `{{cmd}}`,
    flags,
    commands
});

const options = {
    inferType: true,
    description: false,
    hardRejection: false,
    flags,
}

module.exports = meow(helpText, options);