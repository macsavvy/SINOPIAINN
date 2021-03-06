"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const api = __importStar(require("./api"));
exports.register = (app) => {
    const oidc = app.locals.oidc;
    app.get("/", (req, res) => {
        res.send("Hello world new routes!");
    });
    api.register(app);
};
//# sourceMappingURL=index.js.map