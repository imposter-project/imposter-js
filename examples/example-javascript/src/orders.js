/**
 * Calls the Order API to place orders.
 */
class OrderService {
    baseUrl;

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    /**
     * Place an order for a given SKU.
     *
     * @param orderItems
     * @returns {Promise<object>}
     */
    async placeOrder(orderItems) {
        if (!orderItems || orderItems.length === 0) {
            throw new Error('Must provide at least one order item');
        }
        const response = await fetch(`${this.baseUrl}/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderItems),
        });
        console.log(`returned: ${response.status} ${response.statusText}`);
        return await response.json();
    }
}

export {OrderService};
