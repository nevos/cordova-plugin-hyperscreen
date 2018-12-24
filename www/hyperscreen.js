var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'hyperscreen', 'coolMethod', [arg0]);
};
