"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var utils_1 = __importDefault(require("../utils"));
var NewsSchema = new mongoose_1.Schema({
    code: {
        type: String
    },
    title: {
        type: String
    },
    headline: {
        type: String
    },
    subtitle: {
        type: String
    },
    body_text: {
        type: String
    },
    highlight: {
        type: Boolean
    },
    banner_img: {
        type: String
    },
    small_img: {
        type: String
    },
    create_at: {
        type: Date,
        default: utils_1.default.getCurrentTime()
    },
    update_at: {
        type: Date,
        default: null
    },
    delete_at: {
        type: Date,
        default: null
    }
});
exports.default = mongoose_1.model("news", NewsSchema);
