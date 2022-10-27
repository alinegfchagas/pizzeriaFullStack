import {Button, CardImg, ContainerLi }from "./StyledCard.js"



function PizzaCard(props) {
    const { pizza, addToCart } = props

    return (
        <ContainerLi>
            <CardImg className="card-img" Img={pizza.name} alt=""/>
            <h3>{pizza.name}</h3><div>
            <p className="card-price">
                {pizza.price.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'USD' }
                )}
            </p>
            <p className="card-ingredients">
                {pizza.ingredients.map((item) => {
                    return (
                        <span key={item}>{`${item} `}</span>
                    )
                })}
            </p>
            </div>
            <Button className="card-button" onClick={() => addToCart(pizza)}>Adicionar ao carrinho</Button>
        </ContainerLi>
    )
}

export default PizzaCard
