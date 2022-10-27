import styled from "styled-components"
import Bufala from "../assets/pizza1.png"
import Diavola from "../assets/pizza2.png"
import Margherita from "../assets/pizza3.png"
import PizzaBianca from "../assets/pizza4.png"
import Romana from "../assets/pizza5.png"

export const ContainerLi = styled.li`
    border: 1px solid lightgray;
    margin: 16px;
    border-radius:18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);
    background-color: #dccbb5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    align-items: center;
    font-family: sans-serif;
    width: 220px;
      
    h3,
    .card-price,.card-ingredients {
      
        text-align: center;
    }
    .card-price{
      color: firebrick;
      font-weight: bold;
      font-size:20px;
      
    }
    .card-ingredients{
      color:gray;
    }
    
`

export const Button = styled.div`
position: relative;
top:16px;
width: 180px;
height: 30px;
border-radius: 18px;
background-color: #b5c6dc;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);
padding-top:4px;
text-align: center;
:active{
  transition: ease .3s;
  background-color: #6C6CCD;

}

`



export const CardImg = styled.img.attrs(props =>({
src:imagPizza(props.Img),

}))`
width:10em;

`;
const imagPizza=(src)=>{
  switch (src) {
          case "Bufala":
            return Bufala;
          case "Diavola":
            return Diavola;
          case "Margherita":
            return Margherita;
          case "Pizza Bianca":
            return PizzaBianca;
          case "Romana":
            return Romana;

          default:
        }
}


