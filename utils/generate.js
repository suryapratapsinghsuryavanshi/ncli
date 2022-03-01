const path = require("path");
const copy = require('copy-template-dir');
const { success } = require('log-symbols');
const alerts = require("alerts-in-cli");
const question = require("./question");
const { existsSync } = require("fs");
const ora = require('ora');
const { exec } = require('child_process');

const spinner = ora({ text: '' });
module.exports = async () => {
    const vars = await question();
    outputDir = vars.name;

    if(existsSync(outputDir)) {
        alerts({
            type: 'error',
            name: 'Directory Error: ',
            msg: `The directory ./${outputDir} already exists.`
        });
        process.exit(1);
    }

    const inDir = path.join(__dirname, '../template');
    const outDir = path.join(process.cwd(), outputDir);

    copy(inDir, outDir, vars, async (err, createFiles) => {
        if(err) throw err;
        console.log();
        console.log('Creating files in ./' + outputDir + ' directory');
        createFiles.forEach((filePath) => {
            console.log('Created : ' + path.basename(filePath) + " " + success);
        });

        alerts({
            type: 'success',
            name: 'success',
            msg: 'Done!'
        });

        spinner.start('Installing dependencies');
        exec('cd ' + outputDir + ' && npm install', (err) => {
            if(err) throw err;
            spinner.stop();
            console.log('Dependencies installed ' + success);
        });

        console.log();
    });
}