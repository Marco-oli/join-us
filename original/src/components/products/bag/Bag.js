import React from 'react';
import {
    Container,
    Card,
    Title,
    Product,
    Exit
} from './BagStyles';

import {Button} from '../../Button';
import images from '../../../assets/images';
import colors from '../../../assets/colors';


function Bag({values}) {
    function onConfirm() {
        console.log(values)
    }

    return (
        <Container>
            <Card>
                <Exit href=""></Exit>
                <Product Img={images.ProdMedium}></Product>
                <Title>produto adicionado com sucesso!</Title>
                <Button Width={305} Height={60} Size={18} Background={colors.sucess} Color={colors.white} onClick={onConfirm}>FINALIZAR COMPRA</Button>
            </Card>
        </Container>
    );
};

export {Bag} ;

