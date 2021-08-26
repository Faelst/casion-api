"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var path_1 = __importDefault(require("path"));
var express_graphql_1 = require("express-graphql");
var graphql_1 = require("graphql");
var index_graphql_1 = __importDefault(require("../graphql/schemas/index.graphql"));
var resolvers_1 = __importDefault(require("../graphql/resolvers"));
var index_routers_1 = __importDefault(require("../routers/index.routers"));
var Server = /** @class */ (function () {
    function Server() {
        this.port = process.env.PORT || 3333;
        this.express = express_1.default();
        this.middleware();
        this.database();
        this.routes();
        this.listen();
    }
    Server.prototype.getApp = function () {
        return this.express;
    };
    Server.prototype.middleware = function () {
        this.express.use(express_1.default.json());
        this.express.use(cors_1.default());
        this.express.use('/graphql', express_graphql_1.graphqlHTTP({
            schema: graphql_1.buildSchema(index_graphql_1.default),
            graphiql: true,
            rootValue: resolvers_1.default
        }));
    };
    Server.prototype.database = function () {
        var mongoUrl = process.env.MONGO_URI_CONNECTION;
        mongoose_1.default
            .connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
            .then(function () {
            console.log("MongoDB connected...");
        })
            .catch(function () {
            console.log("Error while trying to connect to MongoDB");
        });
    };
    Server.prototype.routes = function () {
        this.express.use('/api', index_routers_1.default);
        this.express.use('/static/files', express_1.default.static(path_1.default.resolve(path_1.default.resolve(__dirname, '..') + "/repository/")));
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.express.listen(this.port, function () {
            console.log("Server is running on port " + _this.port);
        });
    };
    return Server;
}());
exports.Server = Server;
