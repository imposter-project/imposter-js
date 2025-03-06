import axios, {AxiosResponse} from "axios";
import {Stock} from "./model";

/**
 * Calls the Stock API to fetch available products.
 */
class StockService {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    /**
     * Fetch available products.
     */
    async listStock(): Promise<Stock[]> {
        const response = await axios.get<any, AxiosResponse<Stock[]>>(`${this.baseUrl}/products`);
        console.log(`products:`, response.data);
        return response.data;
    }
}

export {StockService};
