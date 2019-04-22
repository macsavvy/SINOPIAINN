"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = (app) => {
    const oidc = app.locals.oidc;
    app.get("/", (req, res) => {
        res.send("Hello world new routes!");
    });
};
//# sourceMappingURL=index.js.map