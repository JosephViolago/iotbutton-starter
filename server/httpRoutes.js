const express = require('express');
const path = require('path');
const persistence = require('./persistence');

function writeStateEmitAndRespond(res, app, ioServer) {
    const success = persistence.writeState(Object.assign({}, app.state));
    if (success) {
        ioServer.emit('updateCounts', app.state);
        res.json(app.state);
    } else {
        res.sendStatus(404);
    }
}

function mountRoutes(app, ioServer) {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, './views/buttons.html'));
    });

    app.get('/singlePress', (req, res) => {
        app.state.singlePress += 1;
        app.state.batteryVoltage = req.query.batteryVoltage || app.state.batteryVoltage;
        writeStateEmitAndRespond(res, app, ioServer);
    });

    app.get('/doublePress', (req, res) => {
        app.state.doublePress += 1;
        app.state.batteryVoltage = req.query.batteryVoltage || app.state.batteryVoltage;
        writeStateEmitAndRespond(res, app, ioServer);
    });

    app.get('/longPress', (req, res) => {
        app.state.longPress += 1;
        app.state.batteryVoltage = req.query.batteryVoltage || app.state.batteryVoltage;
        writeStateEmitAndRespond(res, app, ioServer);
    });

    app.get('/reset', (req, res) => {
        app.state = Object.assign(
            app.state,
            {
                singlePress: 0,
                doublePress: 0,
                longPress: 0
            }
        );
        writeStateEmitAndRespond(res, app, ioServer);
    });

    app.get('/buttonsState', (req, res) => {
        res.json(app.state);
    });

    app.get('/buttons', (req, res) => {
        res.redirect('/');
    });

    app.use('/static', express.static('client'));
}

module.exports = mountRoutes;