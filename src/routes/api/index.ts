import { Application } from "express";
import { getPriceRouterBinance } from "./getPrice";

export const BinanceRoutes = (app: Application) => {
  app.get("/ping", (req, res) => {
    res.send("Welcome To Binance Trading Bot");
  });
  app.use(getPriceRouterBinance);
};
