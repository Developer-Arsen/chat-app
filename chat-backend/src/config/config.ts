import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  defaultAvatarURL: string;
  mongoURI: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  defaultAvatarURL: process.env.DEFAULT_AVATAR_URL || "default_avatar.png",
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/chatapp"
};

export default config;