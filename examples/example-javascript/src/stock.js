/**
 * Calls the Stock API to fetch available products.
 */
class StockService {
    baseUrl;

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    /**
     * Fetch available products.
     *
     * @returns {Promise<any>}
     */
    async listStock() {
        const response = await fetch(`${this.baseUrl}/products`);
        const products = await response.json();
        console.log(`products:`, products);
        return products;
    }
}

export {StockService};
