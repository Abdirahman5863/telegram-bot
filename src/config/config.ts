import "dotenv/config";
export const config = {
  BINANCE_API_KEY: process.env.BINANCE_API_KEY || "",
  BINANCE_API_SECRET: process.env.BINANCE_API_SECRET || "",
  BINACE_TESTNET: "true",
  BYBIT_API_KEY: process.env.BYBIT_API_KEY || "",
  BYBIT_SECRET_KEY: process.env.BYBIT_SECRET_KEY || "",
  BYBIT_TESTNET: "true",
};
