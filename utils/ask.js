const { Input } = require('enquirer');
const to = require('await-to-js').default;
const handleError = require('cli-handle-error');
const { Store } = require('data-store'); // save history in json file
const path = require('path');

module.exports = async ({ name, message, hint, initial }) => {
    let history = false;
    if(!initial && name !== 'name' && name !== 'cmd' && name !== 'desc') {
        history = {
            autosave: true,
            store: new Store({
                path: path.join(__dirname, '/../.history/' + name + '.json')
            })
        }
    }
    const [ err, response ] = await to(new Input({
        name,
        message,
        hint,
        initial,
        history,
        validate(value) {
            if(!value) return 'This field is required';
            return true;
        } 
    })
    .on('cancel', () => process.exit(0))
    .run());
    handleError('Input', err);

    return response;
}