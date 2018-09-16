// import _ from'lodash';

const _ = require('lodash');

function component() {
    let element = document.createElement('div');


    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());