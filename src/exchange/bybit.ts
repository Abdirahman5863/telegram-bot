import {
  GetTickersParamsV5,
  RestClientV5,
  TickerLinearInverseV5,
} from "bybit-api";

export class Bybit {
  client: RestClientV5;

  constructor(
    BYBIT_API_KEY: string,
    BYBIT_API_SECRET: string,
    testnet: boolean
  ) {
    this.client = new RestClientV5({
      key: BYBIT_API_KEY,
      secret: BYBIT_API_SECRET,
      testnet: true,
    });
  }
  // Get Price Function

  getPrice = async (
    params: GetTickersParamsV5<"linear" | "inverse">
  ): Promise<TickerLinearInverseV5[] | null> => {
    try {
      const { retCode, result, retMsg } = await this.client.getTickers(params);

      if (retCode == 0 && retMsg == "OK") {
        let _result = result.category;
        if (_result == "linear") {
          return result.list.map((TickerLinearInverseV5: any) => {
            let _price = TickerLinearInverseV5.lastPrice;
            console.log(_price);

            return _price;
          });
        }
      }
    } catch (error) {
      console.log(`Error getting price: ${error}`);
    }
    return null;
  };
}
