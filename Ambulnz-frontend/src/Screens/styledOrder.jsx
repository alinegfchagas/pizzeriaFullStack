import styled from "styled-components"

export const ContainerSection = styled.section`
    width: 30em;
    border: 1px solid lightgray;
    border-radius: 18px;
    align-items: center;
    justify-content: space-evenly;
    max-height: 350px;
    margin: 16px;

    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
  
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    
    h1 {
        font-size: 1.5em;
        text-align: center;
    }

    
`

export const Button = styled.div`
    position: relative;
    top:300px;
    width: 200px;
    left: 95px;
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