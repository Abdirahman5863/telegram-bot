import { config } from "../config/config";
import { Binance } from "../exchange/binance";
import { Request, Response } from "express";


async function getPriceBinance(req: Request, res: Response) {
  try {
    const symbol: string = req.body;

    // function getStringValue(value: any): string {
    //   return value.toString();
    // }
    const binance = new Binance(
      config.BINANCE_API_KEY,
      config.BINANCE_API_SECRET,
      true
    );

    const latestPrice = await binance.getPrice({
      symbol,
    });
    // Move this line here
    console.log("Fetching price for symbol:", req.body);

    if (!latestPrice) {
      res.status(404).json({
        status: "failed",
        message: "Latest price not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Latest price fetched successfully",
      data: latestPrice,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: "Error fetching latest price",
    });
  }
}

export { getPriceBinance };
