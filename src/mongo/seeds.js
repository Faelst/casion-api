"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var News_model_1 = __importDefault(require("../models/News.model"));
var seed = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('start seed');
                return [4 /*yield*/, News_model_1.default.create({
                        code: "123",
                        title: "Descubra o sabor de rosquinha que melhor te representa!",
                        headline: "Food",
                        subtitle: "Tantos sabores por aí. Qual melhor exprime sua personalidade?",
                        body_text: "Um donut, doughnut, d\u00F3nute, rosca ou rosquinha \u00E9 um pequeno bolo em forma de rosca (mais precisamente de toro), popular nos Estados Unidos e de origem incerta. Consiste numa massa a\u00E7ucarada frita, que pode ser coberta com diversos tipos de cobertura doce e colorida, como por exemplo chocolate.\n\n        Nos Estados Unidos e no Canad\u00E1, esta designa\u00E7\u00E3o tamb\u00E9m pode ser usada para bolas de Berlim, que s\u00E3o conhecidas como \"sonhos\" no Brasil. Neste caso, em que o bolo tem uma forma esf\u00E9rica, a designa\u00E7\u00E3o precisa usada nos Estados Unidos \u00E9 filled doughnut, que significa \"donut recheado\". Pode ser recheado com geleia ou outros cremes doces. No caso da rosca, a designa\u00E7\u00E3o precisa \u00E9 ring doughnut, significando \"donut rosca\".\n        \n        Em Portugal, a express\u00E3o donut ou d\u00F3nute designa apenas o bolo em forma de rosca. O bolo esf\u00E9rico corresponde \u00E0 bola de Berlim;"
                    }).catch(function (error) { return console.error(error); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
seed();
