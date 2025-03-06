import axios, {AxiosResponse} from "axios";
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
        const response = await axios.post<Order[], AxiosResponse<OrderConfirmation>>(`${this.baseUrl}/orders`, orderItems);
        console.log(`returned: ${response.status} ${response.statusText}`);
        return response.data;
    }
}

export {OrderService};
