"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_controller_1 = __importDefault(require("../../controllers/news/index.controller"));
var newsRouter = express_1.Router();
var NewsControllers = new index_controller_1.default();
newsRouter.get('/test', function (req, res) { return res.status(200).send('News routers'); });
newsRouter.get('/', NewsControllers.getNews);
newsRouter.get('/:_id', NewsControllers.getNewsById);
newsRouter.post('/', NewsControllers.registerNews);
exports.default = newsRouter;
