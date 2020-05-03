import React from 'react';
import {
    Container,
    Card,
    Title,
    Product,
    Link,
    Exit
} from '../styles/BagStyles';

import {Button} from '../../components/Button';
import images from '../../assets/images';
import colors from '../../assets/colors';


function Bag() {
    return (
        <Container>
            <Card>
                <Exit href="#"></Exit>
                <Product Img={images.ProdMedium}></Product>
                <Title>produto adicionado com sucesso!</Title>
                <Button Width={305} Height={60} Size={18} Background={colors.sucess} Color={colors.white}>FINALIZAR COMPRA</Button>
                <Link href="#">Continuar Comprando</Link>
            </Card>
        </Container>
    );
};

export {Bag} ;

