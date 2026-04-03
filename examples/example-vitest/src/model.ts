export type Stock = {
    sku: string;
    name: string;
    price: number;
}

export type Order = {
    sku: string;
}

export type OrderConfirmation = {
    id: string;
    total: number;
}
