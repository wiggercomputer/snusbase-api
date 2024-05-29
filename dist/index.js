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
const SnusBaseAPI_1 = __importDefault(require("./SnusBaseAPI"));
const apiKey = 'sb66onvdx6nr2b9d1x290mmz6sowuk';
const snusbase = new SnusBaseAPI_1.default(apiKey);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const searchResults = yield snusbase.search({
                terms: ['librotarian@gmail.com'],
                types: ['email'],
            });
            console.log('Search Results:', searchResults);
            const stats = yield snusbase.getStats();
            console.log('Stats:', stats);
            const whoisResults = yield snusbase.ipWhois({
                terms: ['12.34.56.78'],
            });
            console.log('Whois Results:', whoisResults);
            const hashResults = yield snusbase.hashLookup({
                terms: ['5f4dcc3b5aa765d61d8327deb882cf99'],
                types: ['hash'],
            });
            console.log('Hash Lookup Results:', hashResults);
        }
        catch (error) {
            console.error('Error:', error);
        }
    });
}
main();
