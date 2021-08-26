"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getCurrentTime = function () {
    var data = new Date();
    data.setHours(data.getHours() - 3);
    return data;
};
exports.default = { getCurrentTime: getCurrentTime };
