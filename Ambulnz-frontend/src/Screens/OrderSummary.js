import { ContainerSection,Button } from "./styledOrder"
import OrderItemCard from "../components/OrderItemCard"


function OrderSummary(props) {
    const { cart, removeFromCart, total, confirmOrder, addToCart } = props

    return (
        <ContainerSection>
            <h1>Resumo do pedido</h1>

            <Button className="button-confirm" onClick={confirmOrder}>Confirmar pedido</Button>
            {cart.map((pizza) => {
                return (
                    <OrderItemCard
                        key={pizza.name}
                        pizza={pizza}
                        removeFromCart={removeFromCart}
                        addToCart={addToCart}
                    />
                )
            })}

            <h2 className="total-price">
                Total: {total.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'USD' }
                )}
            </h2>

        </ContainerSection>
    )
}

export default OrderSummary
