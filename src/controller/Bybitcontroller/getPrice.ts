import { Bybit } from "../../exchange/bybit";
import { Request, Response } from "express";
import { config } from "../../config/config";

async function getPrice(req: Request, res: Response) {
  try {
    const { category, symbol } = req.body;
    console.log(req.body);

    if (!category || !symbol) {
      return res.status(200).json({
        status: "failed",
        error: "Please specify the category and symbol",
      });
    }
    const bybit = new Bybit(config.BYBIT_API_KEY, config.BYBIT_TESTNET, true);

    const latestPrice = await bybit.getPrice({
      symbol,
      category,
    });
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

export { getPrice };
