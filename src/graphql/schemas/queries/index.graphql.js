"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var querySchema = "\n    type Query {\n        getTest: String\n        news: [News!]!\n        new(_id: ID!): News\n    }\n";
exports.default = querySchema;
