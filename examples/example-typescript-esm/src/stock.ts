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
        const response = await fetch(`${this.baseUrl}/products`);
        const products = await response.json() as Stock[];
        console.log(`products:`, products);
        return products;
    }
}

export {StockService};
