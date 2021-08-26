"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_router_1 = __importDefault(require("./news/index.router"));
var routers = express_1.Router();
routers.use('/news', index_router_1.default);
exports.default = routers;
