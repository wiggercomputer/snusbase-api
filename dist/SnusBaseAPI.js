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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class SnusbaseAPI {
    constructor(auth) {
        this.auth = auth;
        this.api = axios_1.default.create({
            baseURL: 'https://api-experimental.snusbase.com',
            headers: {
                'Auth': this.auth,
                'Content-Type': 'application/json',
            },
        });
    }
    search(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.post('/data/search', params);
            return response.data;
        });
    }
    getStats() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.get('/data/stats');
            return response.data;
        });
    }
    ipWhois(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.post('/tools/ip-whois', params);
            return response.data;
        });
    }
    hashLookup(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.post('/tools/hash-lookup', params);
            return response.data;
        });
    }
}
exports.default = SnusbaseAPI;
