"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class PizzaDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.toPizzaDBModel = (pizza) => {
            return {
                name: pizza.getName(),
                price: pizza.getPrice(),
            };
        };
        this.getPizzas = async () => {
            const result = await BaseDatabase_1.BaseDatabase
                .connection(PizzaDatabase.TABLE_PIZZAS)
                .select();
            return result;
        };
        this.getIngredients = async (pizzaName) => {
            const result = await BaseDatabase_1.BaseDatabase
                .connection(PizzaDatabase.TABLE_PIZZAS_INGREDIENTS)
                .select("ingredient_name")
                .where({ pizza_name: pizzaName });
            return result.map(item => item.ingredient_name);
        };
        this.getPizzasFormatted = async () => {
            const [result] = await BaseDatabase_1.BaseDatabase
                .connection.raw(`
    SELECT *FROM Amb_Pizzas
    JOIN Amb_Pizzas_Ingredients ON Amb_PIzzas_Ingredients.pizza_name = Amb_Pizzas.name;
    `);
            return result;
        };
    }
}
exports.PizzaDatabase = PizzaDatabase;
PizzaDatabase.TABLE_PIZZAS = "Amb_Pizzas";
PizzaDatabase.TABLE_INGREDIENTS = "Amb_Ingredients";
PizzaDatabase.TABLE_PIZZAS_INGREDIENTS = "Amb_Pizzas_Ingredients";
//# sourceMappingURL=PizzaDatabase.js.map