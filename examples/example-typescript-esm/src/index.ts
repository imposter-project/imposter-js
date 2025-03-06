import {StockService} from "./stock";
import {OrderService} from "./orders";
import {Order, OrderConfirmation} from "./model";

/**
 * A simple pet store application that chains calls for some of the services.
 */
class PetStore {
    stockService: StockService;
    orderService: OrderService;

    constructor(config: Record<string, string>) {
        this.stockService = new StockService(config.stock);
        this.orderService = new OrderService(config.order);
    }

    /**
     * Retrieve the products in stock, then order the first one.
     */
    orderFirstItemInStock = async (): Promise<OrderConfirmation> => {
        const products = await this.stockService.listStock();

        // order the first item in stock
        const orderItems: Order[] = [
            {sku: products[0].sku}
        ];
        const confirmation = await this.orderService.placeOrder(orderItems);
        console.log(`order confirmation:`, confirmation);
        return confirmation;
    };
}

export {PetStore};
