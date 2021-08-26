"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NewsSchema = "\n    scalar Date\n    type News {\n        _id: String!\n        code: String!\n        title: String!\n        headline: String!\n        subtitle: String!\n        body_text: String!\n        highlight: Boolean\n        banner_img: String!\n        small_img: String!\n        create_at: Date\n        update_at: Date\n        delete_at: Date\n    }\n";
exports.default = NewsSchema;
