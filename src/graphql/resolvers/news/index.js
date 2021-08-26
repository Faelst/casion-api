"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var News_model_1 = __importDefault(require("../../../models/News.model"));
var NewsResolvers = {
    news: function () { return News_model_1.default.find({ delete_at: null }); },
    new: function (_id) { return News_model_1.default.findById(_id); }
};
exports.default = NewsResolvers;
