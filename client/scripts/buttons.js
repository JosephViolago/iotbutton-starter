var socket = io();

socket.on('updateCounts', function(message) {
    renderButtonCounters(message);
});

const buttons = {
    singlePress: {
        name: "Single Press",
        id: "singlePress",
    },
    doublePress: {
        name: "Double Press",
        id: "doublePress",
    },
    longPress: {
        name: "Long Press",
        id: "longPress",
    },
};

function renderButtonCounters(counts) {
    $('#content').html('');

    $('#content')
        .append($(`<div>Single Presses: ${counts.singlePress}</div>`))
        .append($(`<div>Double Presses: ${counts.doublePress}</div>`))
        .append($(`<div>Long Presses: ${counts.longPress}</div>`))
        .append(counts.batteryVoltage ? $(`<div>Battery Voltage: ${counts.batteryVoltage}</div>`) : $(''));

}

function onReady() {
    $('#singlePress').click(function() {
        $.get('singlePress')
    });
    $('#doublePress').click(function() {
        $.get('doublePress')
    });
    $('#longPress').click(function() {
        $.get('longPress')
    });
    $('#reset').click(function() {
        $.get('reset')
    });
    $.get('buttonsState', renderButtonCounters);
}

$(document).ready(onReady);