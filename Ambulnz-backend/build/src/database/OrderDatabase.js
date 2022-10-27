"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
const PizzaDatabase_1 = require("./PizzaDatabase");
class OrderDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.createOrder = async (orderId) => {
            await BaseDatabase_1.BaseDatabase
                .connection(OrderDatabase.TABLE_ORDERS)
                .insert({
                id: orderId
            });
        };
        this.insertItemOnOrder = async (orderItem) => {
            await BaseDatabase_1.BaseDatabase
                .connection(OrderDatabase.TABLE_ORDER_ITEMS)
                .insert(orderItem);
        };
        this.getPrice = async (pizzaName) => {
            const result = await BaseDatabase_1.BaseDatabase
                .connection(PizzaDatabase_1.PizzaDatabase.TABLE_PIZZAS)
                .select("price")
                .where({ name: pizzaName });
            return result[0].price;
        };
        this.getOrders = async () => {
            const result = await BaseDatabase_1.BaseDatabase
                .connection(OrderDatabase.TABLE_ORDERS)
                .select();
            return result;
        };
        this.getOrderItem = async (orderId) => {
            const result = await BaseDatabase_1.BaseDatabase
                .connection(OrderDatabase.TABLE_ORDER_ITEMS)
                .select()
                .where({ order_id: orderId });
            return result;
        };
    }
}
exports.OrderDatabase = OrderDatabase;
OrderDatabase.TABLE_ORDERS = "Amb_Orders";
OrderDatabase.TABLE_ORDER_ITEMS = "Amb_Order_Items";
//# sourceMappingURL=OrderDatabase.js.map