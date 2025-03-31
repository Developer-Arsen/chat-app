"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckAuth = void 0;
const CheckAuth = (req, res, next) => {
    try {
        return res.json({ message: 'hello' });
    }
    catch (error) {
        next(error);
    }
};
exports.CheckAuth = CheckAuth;
