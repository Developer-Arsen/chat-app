"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    defaultAvatarURL: process.env.DEFAULT_AVATAR_URL || "default_avatar.png",
    mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/chatapp"
};
exports.default = config;
