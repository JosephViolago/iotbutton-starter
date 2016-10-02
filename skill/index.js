'use strict';
require('dotenv').config();
var fetch = require('isomorphic-fetch');

/**
 * The following JSON template shows what is sent as the payload:
{
    "serialNumber": "GXXXXXXXXXXXXXXXXX",
    "batteryVoltage": "xxmV",
    "clickType": "SINGLE" | "DOUBLE" | "LONG"
}
 *
 * A "LONG" clickType is sent if the first press lasts longer than 1.5 seconds.
 * "SINGLE" and "DOUBLE" clickType payloads are sent for short clicks.
 *
 * For more documentation, follow the link below.
 * http://docs.aws.amazon.com/iot/latest/developerguide/iot-lambda-rule.html
 */
exports.handler = function(event, context, callback) {
    console.log('Received event:', event.clickType);

    switch (event.clickType) {
        case 'SINGLE':
            return fetch(`${process.env.homeUrl}/singlePress?batteryVoltage=${event.batteryVoltage}`, {method: 'GET'});
        case 'DOUBLE':
            return fetch(`${process.env.homeUrl}/doublePress?batteryVoltage=${event.batteryVoltage}`, {method: 'GET'});
        case 'LONG':
            return fetch(`${process.env.homeUrl}/longPress?batteryVoltage=${event.batteryVoltage}`, {method: 'GET'});
    }
};