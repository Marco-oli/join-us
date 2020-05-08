import React from 'react';

import {
    Container,
    BoxNews,
    BoxInput,
    BoxFooter,
    RedesSociais,
    Links,
    BoxLinks,
    FooterLogo
} from './Styles';

import {Button} from '../Button';
import colors from '../../assets/colors';
import images from '../../assets/images';

function Footer() {
    return (
        <Container>
            <BoxFooter>
                <BoxNews>
                    <p>Assine nossa news</p>
                    <BoxInput>
                        <label for="name">Name</label>
                        <input type="text" id="name"/>
                    </BoxInput>
                    <BoxInput>
                        <label for="email">E-mail</label>
                        <input type="text" id="email"/>
                    </BoxInput>
                    <Button Width={110} Height={50} Background={colors.primary} Color={colors.white}>ENVIAR</Button>
                </BoxNews>
                <RedesSociais>
                    <a href=""><img src={images.Face} alt="redes-sociais"/></a>
                    <a href=""><img src={images.Insta} alt="redes-sociais"/></a>
                    <a href=""><img src={images.Git} alt="redes-sociais"/></a>
                </RedesSociais>
                <Links>
                    <img src={images.Vtex} alt="Vtex Logo"/>
                    <img src={images.Bit} alt="Vtex Logo"/>
                    <BoxLinks>
                        <p>Institucional</p>
                        <a href="">A Marca</a>
                        <a href="">Lojas</a>
                        <a href="">Contato</a>
                    </BoxLinks>
                    <BoxLinks>
                        <p>Informações</p>
                        <a href="">Formas de Pagamento</a>
                        <a href="">Trocas e Devoluções</a>
                        <a href="">Cuidados Com o Produto</a>
                    </BoxLinks>
                    <BoxLinks>
                        <p>Conheça</p>
                        <a href="">Franquias e Multimarcas</a>
                        <a href="">Trabalhe com a Gente</a>
                        <a href="">Procon-RJ</a>
                    </BoxLinks>
                </Links>
            </BoxFooter>
            <FooterLogo>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi rerum eius quidem reprehenderit aliquam quo consectetur, architecto quia perspiciatis accusamus nulla, voluptatem ipsam asperiores doloremque et, corrupti</p>
                <img src={images.LogoFooter} alt=""/>
            </FooterLogo>
        </Container>
    )
};

export default Footer;