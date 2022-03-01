const ask =  require("./ask");

module.exports = async () => {
    const name = await ask({ name: 'name', message: 'CLI name?', hint: '(kebab-case only)' });
    const desc = await ask({ name: 'desc', message: 'CLI description?' });
    const version = await ask({ name: 'version', message: 'CLI version?', initial: '0.0.1' });
    const cmd = await ask({ name: 'cmd', message: 'CLI command?',  hint: '(optional: if diffrent from CLI name)', initial: name });

    const authorName = await ask({ name: 'authorName', message: 'CLI Author Name?' });
    const authorEmail = await ask({ name: 'authorEmail', message: 'CLI Author Email?' });
    const authorUrl = await ask({ name: 'authorUrl', message: 'CLI Author Url?' });
    const license = await ask({ name: 'license', message: 'CLI License?', initial: 'UNLICENSED' });

    const vars = {
        name,
        desc,
        version,
        cmd,
        authorName,
        authorEmail,
        authorUrl,
        license
    };

    return vars;
};