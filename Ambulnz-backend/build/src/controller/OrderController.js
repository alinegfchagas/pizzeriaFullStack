"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const BaseError_1 = require("../errors/BaseError");
class OrderController {
    constructor(orderBusiness) {
        this.orderBusiness = orderBusiness;
        this.createOrder = async (req, res) => {
            try {
                const input = {
                    pizzas: req.body.pizzas
                };
                const response = await this.orderBusiness.createOrder(input);
                res.status(200).send(response);
            }
            catch (error) {
                console.log(error);
                if (error instanceof BaseError_1.BaseError) {
                    return res.status(error.statusCode).send({ message: error.message });
                }
                res.status(500).send({ message: "Erro inesperado ao criar pedido" });
            }
        };
        this.getOrders = async (req, res) => {
            try {
                const response = await this.orderBusiness.getOrders();
                res.status(200).send(response);
            }
            catch (error) {
                if (error instanceof BaseError_1.BaseError) {
                    return res.status(error.statusCode).send({ message: error.message });
                }
                res.status(500).send({ message: "Erro inesperado ao buscar pedidos." });
            }
        };
    }
}
exports.OrderController = OrderController;
//# sourceMappingURL=OrderController.js.map