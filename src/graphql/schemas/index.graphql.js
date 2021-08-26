"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_graphql_1 = __importDefault(require("./news/index.graphql"));
var index_graphql_2 = __importDefault(require("./queries/index.graphql"));
var schemas = "\n    " + index_graphql_2.default + "\n    " + index_graphql_1.default + "\n";
exports.default = schemas;
