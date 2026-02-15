import dotenv from "dotenv";

dotenv.config()

const requiredEnv = [
    "PORT",
    "DATABASE_URL",
    "JWT_SECRET",
    "GOOGLE_CLIENT_ID",
    "GOOGLE_CLIENT_SECRET",
]

requiredEnv.forEach((key) => {
    if (!process.env[key]) {
        throw new Error(`Missing required env variable: ${key}`);
    }
})


export const env = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
}