// import { getPriceBinance } from "../controller/getPrice";
import { config } from "../config/config";
import { Binance } from "../exchange/binance";
import { Request, Response } from "express";
import express from "express";
import bodyParser from "body-parser";

const app = express();
async function getPriceBinance(req, res) {
  console.log("Request body:", req.body);
  try {
    const symbol = req.body;

    const binance = new Binance(
      config.BINANCE_API_KEY,
      config.BINANCE_API_SECRET,
      true
    );

    const latestPrice = await binance.getPrice({
      symbol,
    });

    console.log(symbol); // Move this line here

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
// Add this line
// Rest of your code...

// Middleware setup
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Your route handler
app.post("/api/price", getPriceBinance);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
