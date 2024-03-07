import { USDMClient, SymbolPrice, BasicSymbolParam, MainClient } from "binance";
import { config } from "../config/config";
export class Binance {
  client: MainClient;

  constructor(
    BINANCE_API_KEY: string,
    BINANCE_API_SECRET: string,
    useTestnet: true
  ) {
    this.client = new MainClient({
      api_key: BINANCE_API_KEY!,
      api_secret: BINANCE_API_SECRET!,
    });
    useTestnet ? "maintest" : "main";
  }

  //Get Price
  getPrice = async (
    params: BasicSymbolParam
  ): Promise<SymbolPrice[] | SymbolPrice> => {
    try {
      const result = await this.client.getSymbolPriceTicker(params);

      // console.log(result, "result");

      if (Array.isArray(result)) {
        const symbolPrices: SymbolPrice[] = result.map(
          (symbolPrice: SymbolPrice) => {
            return {
              symbol: symbolPrice.symbol,
              price: parseFloat(symbolPrice.price.toString()),
            };
          }
        );

        return symbolPrices;
      } else {
        const price: number = parseFloat(result.price.toString());
        return {
          symbol: result.symbol,
          price,
        };
      }
    } catch (error) {
      console.log(`Error getting price: ${error}`);
    }
    return [];
  };
}
