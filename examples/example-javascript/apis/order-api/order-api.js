var body = context.request.body;
console.log('received order: ' + body);

var orderItems = JSON.parse(body);

var total = 0;
for (var i = orderItems.length - 1; i >= 0; i--) {
    total += calculatePrice(orderItems[i].sku);
}

var confirmation = {
    total: total,
};

stores.open('request').save('responseBody', JSON.stringify(confirmation));

function calculatePrice(sku) {
    var hash = 1;
    for (var i = 0; i < sku.length; ++i) {
        hash = hash * sku.charCodeAt(i);
    }
    return 1 + (hash % 20);
}
