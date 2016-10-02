var socket = io();

socket.on('updateCounts', message => {
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
        .append($(`<div>Long Presses: ${counts.longPress}</div>`));

}

function onReady() {
    $('#singlePress').click(() => $.get('singlePress'));
    $('#doublePress').click(() => $.get('doublePress'));
    $('#longPress').click(() => $.get('longPress'));
    $('#reset').click(() => $.get('reset'));
    $.get('buttonsState', renderButtonCounters);
}

$(document).ready(onReady);