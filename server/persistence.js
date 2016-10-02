const fs = require('fs.extra');

function mountState(app, path = __dirname + '/data/seed.json') {
    let raw;
    let parsed;
    let error = false;
    try {
        raw = fs.readFileSync(path, {encoding: 'utf8'});
        parsed = JSON.parse(raw);
    } catch (e) {
        console.log('file read error, defaulting state', e);
        error = true;
    }

    if (error) {
        app.state = {
            'singlePress': 0,
            'doublePress': 0,
            'longPress': 0,
        };
    } else {
        app.state = parsed;
    }
}

function writeState(state, path = __dirname + '/data/seed.json') {
    const directory = path.slice(0, path.lastIndexOf('/'));
    try {
        fs.mkdirp(directory);
        fs.writeFileSync(path, JSON.stringify(state, null, 4));
        return true;
    } catch (e) {
        console.log('Write state error', e);
        return false;
    }
}


module.exports =  {
    mountState,
    writeState,
};