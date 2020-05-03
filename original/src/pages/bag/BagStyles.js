import styled from 'styled-components';

import colors from '../../assets/colors';
import images from '../../assets/images';

const Container = styled.div`
    width: 100%;
    height: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: rgba(0, 0, 0, .6);
`;

const Card = styled.div`
    width: 445px;
    height: 602px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    padding: 15px 0;
`;

const Title = styled.h2`
    width: 305px;
    font-size: 22px;
    font-weight: lighter;
    color: ${colors.primary};
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    text-align: center;
    text-transform: uppercase;
`;

const Product = styled.div`
    width: 305px;
    height: 360px;
    background-image: url(${props => props.Img});
`;

const Link = styled.a`
    color: ${colors.complement1};
    font-size: 14px;
    line-height: 20.5px;
`;

const Exit = styled.a`
    display: flex;
    align-self: flex-end;
    width: 16px;
    height: 16px;
    margin-right: 30px;
    background-image: url(${images.Exit});
    background-repeat: none;
`;

export {
    Container,
    Card,
    Title,
    Product,
    Link,
    Exit
}