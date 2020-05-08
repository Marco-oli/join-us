import styled from 'styled-components';
import colors from '../../assets/colors';

// Dados e descrição do Produto

const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px auto 105px;
    position: relative;
`;

const ContainerVideo = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
       

    .links {
        margin-bottom: 11px;
    }

    .links a{
        padding-right: 10px;
        text-decoration: none;
        color: ${colors.complement1};
        font-size: 12px;
        line-height: 18px;
    }

    .links span {
        padding-right: 10px;
        color: ${colors.complement1};
        font-size: 12px;
        line-height: 18px;
    }

    .videos p {
        color: ${colors.primary};
        font-size: 12px;
        line-height: 18px;
    }
`;

const BoxProduct = styled.div`
    width: ${props => `${props.Width}px`};
    height: ${props => `${props.Height}px`};
    border: ${props => `${props.Border}px solid #D2E1DF`};
    padding: ${props => `${props.Padding}px`};
    background-repeat: no-repeat;
    margin-top: 10px;
    
`;

const BoxDados = styled(BoxProduct)`
    padding: 20px;
    border: 2px solid #D2E1DF;
    font-family: 'Montserrat', sans-serif;

    h6 {
        font-size: 12px;
        color: #7F7F7F;
        line-height: 17px;
        font-weight: lighter;
        margin-top: -3px;
        margin-bottom: 35px;
    }

    .title h1 {
      font-size: 26px;
      line-height: 26px;
      color: ${colors.blackLight};
      text-transform: uppercase; 
      font-weight: bold;
    }

    .title p {
        font-size: 14px;
        text-transform: uppercase;
        color: ${colors.blackLight};
        margin-bottom: 24px;
    }

    .price {
        display: flex;
        align-items: center;
    }

    .price p {
        color: #E35442;
        font-size: 14px;
        line-height: 20px;
        text-decoration: line-through;
        margin-right: 10px;
    }

    .price span {
        font-size: 20px;
        font-weight: bold;
        line-height: 32px;
        color: #686868;
    }

    .titleColor {
        display: flex;
    }

    .titleColor p {
        font-size: 14px;
        line-height: 20px;
        color: ${colors.blackLight};
        margin-right: 10px;
    }

    .titleColor span {
        font-size: 14px;
        line-height: 20px;
        color: ${colors.secondary};
        margin-bottom: 5px;
    }

    .size {
        margin-top: 20px;
    }

    .size > div  {
        font-size: 14px;
        line-height: 20px;
        display: flex;
        justify-content: space-between;
    }

    .size > div span {
        color: ${colors.secondary};
    }

    .size > div a {
        color: #DE8F75;
        margin-right: 35px;
    }

    .size button {
        color: ${colors.secondary};
        background-color: #fff;
        font-size: 14px;
        width: 34px;
        height: 34px;
        border-radius: 2px;
        border: 1px solid #EBEBEB;
        margin-right: 3px;
        margin-top: 5px;
        margin-bottom: 53px;
    }

    .size button:focus {
        background-color: #DE8F75;
        color: #fff;
    }

    .button p{
        font-size: 14px;
        color: ${colors.blackLight};
        line-height: 28px;
        margin-top: 15px;
        text-align: justify;
    }
`;

// Carrousel de Produtos

const Carrousel = styled(Container)`
    flex-direction: column;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;

    main {
        width: 100%;
        display: flex;
        margin: 0 40px;
        justify-content: space-evenly;
    }

    h1 {
        font-size: 26px;
        line-height: 36px;
        text-transform: uppercase;
        color: #DE8F75;
        font-weight: lighter;
        margin-bottom: 20px;
    }

    main p {
        font-size: 16px;
        line-height: 23px;
        color: ${colors.blackLight};
    }

    .products img{
        max-width: 290px;
        height: 375px;
    }

    .price {
        display: flex;
        justify-content: space-between;
    }

    footer {
        width: 100%;
        max-width: 150px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 25px;
    }

    footer a {
        border: 2px solid ${colors.complement4};
        border-radius: 50%;
        padding: 10px;        
    }

    footer img {
        margin: 0 auto;
    }

    footer p {
        font-size: 14px;
        line-height: 23px;
        color: ${colors.complement4};
    }
`;


export {
    Container,
    ContainerVideo,
    BoxProduct,
    BoxDados,
    Carrousel
}