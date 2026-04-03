import {Order, OrderConfirmation} from "./model";

/**
 * Calls the Order API to place orders.
 */
class OrderService {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    /**
     * Place an order for a given SKU.
     */
    async placeOrder(orderItems: Order[]): Promise<OrderConfirmation> {
        if (!orderItems || orderItems.length === 0) {
            throw new Error('Must provide at least one order item');
        }
        const response = await fetch(`${this.baseUrl}/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderItems),
        });
        console.log(`returned: ${response.status} ${response.statusText}`);
        return await response.json() as OrderConfirmation;
    }
}

export {OrderService};
