import styled from "styled-components";

export const ContainerLi = styled.li`
display:flex;
justify-content: space-between;
/* height: 50px; */
font-family: sans-serif;
padding: 10px;
 p{
font-size: 18px;
 }
.item{
    display:flex ;
    width: 100px;
    background-color: whitesmoke;
    border-radius: 8px;
    text-align: center;
    height: 24px;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.55);
    .item-sub,
    .item-sum{ 

        :hover{
        background-color: firebrick;
        border-radius: 8px; 
        transition: ease-in .1s;
        color: white;
        }
    }
}
`

function OrderItemCard(props) {
    const { pizza, removeFromCart,addToCart } = props

    return (
        <ContainerLi>
            
            <p>
                Pizza {pizza.name} {pizza.price.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'USD' }
                )}
                 
                 </p>
                 

            <div className="item">
                <div className="item-sub" onClick={() => removeFromCart(pizza)}>-</div>
                <div className="item-qunatity">{pizza.quantity}</div>
                <div className="item-sum" onClick={() => addToCart(pizza)}>+</div>
            </div>
            
        </ContainerLi>
    )
}

export default OrderItemCard