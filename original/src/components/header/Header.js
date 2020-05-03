import React from 'react';
import {
    Container,
    Logo,
    NavBar,
    BoxLogin,
    BoxMenu,
    BoxSearch,
    Links,
} from './Style';

import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

import images from '../../assets/images';
import colors from '../../assets/colors';

function Header() {
    return (
       <Container>
            <Logo>
                <img src={images.ImgLogo} alt="Logotipo"/>
            </Logo>
            <NavBar>
                <BoxLogin>
                    <Links Size={12} href="#" Color={colors.grayStrong}>Entrar</Links>
                    <p>|</p>
                    <Links Size={12} href="#" Color={colors.grayStrong}>Cadastre-se</Links>
                </BoxLogin>
                <BoxMenu>
                    <Links Size={14} href="#" Color={colors.grayStrong}>SAPATOS</Links>
                    <Links Size={14} href="#" Color={colors.grayStrong}>BOLSAS</Links>
                    <Links Size={14} href="#" Color={colors.grayStrong}>ACESSÓRIOS</Links>
                    <Links Size={14} href="#" Color={colors.grayStrong}>OFF</Links>
                </BoxMenu>
                <BoxSearch>
                    <div className="search">
                        <Icon path={mdiMagnify} size="23px" color={colors.grayStrong}/>
                        <input type="text" placeholder="Busca"></input>
                    </div>
                    <div className="bag">
                        <img src={images.Car} alt="carrinho"/>
                        <span>0</span>
                    </div>
                </BoxSearch>
            </NavBar>
       </Container>
    )
}

export default Header;