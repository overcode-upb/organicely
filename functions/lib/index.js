"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectOauth = void 0;
const functions = require("firebase-functions");
exports.redirectOauth = functions.https.onRequest((req, res) => {
    res.redirect("https://www.google.com/");
});
//# sourceMappingURL=index.js.map