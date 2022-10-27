import styled from "styled-components"

export const ContainerDiv = styled.div`
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    border-radius: 18px;
    padding: 5px;
    background-color:white;

    > div {
        position: relative;
        width: 100%;
        height: 100%;
        .id-pedido{
            font-size:1em;
        }
        .line-trasition{
            width: 99%;
            height: 3px;
            margin: 1px;
            border-radius: 9px;
            background-image:linear-gradient(270deg, firebrick 0, firebrick 16.67%, #ccb399 33.33%, #ccb399 50%, #ccb399 66.67%, #b69173 83.33%, #b69173 100%);
        }
        .close-popup {
            position: absolute;
            top: 0;
            left: 100%;
            transform: translateX(-100%);
            border-radius: 9px;
            padding: 2px 5px;

            width: auto;

            :hover {
                cursor: pointer;
                font-weight: bold;
                background-color: lightgray;
            }
        }
    }
`

function OrderSuccessPopup(props) {
    const { order, closePopup } = props

    return (

        <ContainerDiv>
            <div>
                <h2>Pedido realizado com sucesso!</h2>
                <h3>Resumo do pedido</h3>

                <p className="id-pedido">Id do pedido: {order.id}</p>
                <div className="line-trasition" />
                {order.pizzas.map((pizza) => (
                    <p key={pizza.name}>
                        Pizza {pizza.name} {" "}
                        - {pizza.price.toLocaleString(
                            'pt-br',
                            { style: 'currency', currency: 'USD' }
                        )}
                        {" "} x {pizza.quantity}
                    </p>
                ))}
                <div className="line-trasition" />
                <h3>
                    Total pago: {
                        order.total.toLocaleString(
                            'pt-br',
                            { style: 'currency', currency: 'USD' }
                        )}
                </h3>

                <span
                    className="close-popup"
                    onClick={closePopup}
                >
                    x
                </span>
            </div>
        </ContainerDiv>
    )
}

export default OrderSuccessPopup