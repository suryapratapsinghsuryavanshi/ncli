const alerts = require("alerts-in-cli");

module.exports = (flags) => {
    alerts({
        type: 'info',
        name: 'Debug Log',
        msg: ''
    });

    console.log(flags);
    console.log();
}