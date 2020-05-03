import React, { useState, useEffect } from 'react';

import {
    Container,
    ContainerVideo,
    BoxProduct,
    BoxDados,
    Carrousel
} from './style';

import {Button, ButtonColor} from '../Button';
import images from '../../assets/images';
import colors from '../../assets/colors';
import api from '../../services/api';



function Products() {

    const [dados, setDados] = useState([]);
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
         api.get('')
        .then(res => setDados(res.data.product))
    }, [])

    useEffect(() => {
        api.get('')
       .then(res => setListProducts(res.data.ListProduct))
   }, [])

    return (
        // Descrição e Dados do Produto
        <>
            <Container>
            <ContainerVideo>
                <div className="links">
                    <a href="#">Home</a>
                    <span>/</span>
                    <a href="#">Sapatos</a>
                </div>
                <div className="videos">
                    <p>Video</p>
                    <div><a href="#"><img src={images.ProdSmall} /></a></div>
                    <div><a href="#"><img src={images.SetaCima} /></a></div>
                    <div><a href="#"><img src={images.ProdSmall} /></a></div>
                    <div><a href="#"><img src={images.ProdSmall} /></a></div>
                    <div><a href="#"><img src={images.ProdSmall} /></a></div>
                    <div><a href="#"><img src={images.ProdSmall} /></a></div>
                    <div><a href="#"><img src={images.SetaBaixo} /></a></div>
                </div>
            </ContainerVideo>
            <BoxProduct Width={430} Heigth={556}>
                    <img src={dados.image} alt="Sandálias grande"/>
                </BoxProduct>
                <BoxDados Width={444} Height={533}>
                    <div className="title">
                        <h1>{dados.name}</h1>
                        <p>{dados.pn}</p>
                    </div>
                    <div className="price">
                        <p>{dados.usualPrice}</p>
                        <span>{dados.newPrice}</span>
                    </div>
                    <h6>ou 6x de R$ 9,20</h6>
                    <div className="titleColor">
                        <p>Cor:</p>
                        <span>(Fucsia)</span>
                    </div>
                    <div className="color">
                        <ButtonColor Width={22} Height={22} Border={2} Background={colors.pink}/>
                        <ButtonColor Width={22} Height={22} Border={2} Background={colors.complement4}/>
                        <ButtonColor Width={22} Height={22} Border={2} Background={colors.primaryDark}/>
                        <ButtonColor Width={22} Height={22} Border={2} Background={colors.black}/>
                    </div>
                    <div className="size">
                        <div>
                            <p>Tamanho: <span>(37)</span></p>
                            <a href="#">Guia de medidas</a>
                        </div>
                        {(dados.sizes) ? dados.sizes.map(res => <button key={res}>{res}</button>) : console.log("erro")}
                    </div>
                    <div className="button">
                        <Button Width={406} Height={60} Background={colors.sucess} Color={colors.white} Size={18}>adicionar à sacola</Button>
                        <p>{dados.description}</p>
                    </div>      
                </BoxDados>
            </Container>
            <Carrousel>
                <header>                                                    
                    <h1>Quem viu, viu também</h1>
                </header>
                <main>
                    {(listProducts) ? listProducts.map(res => (
                        <div className="products">
                            <img src={res.image} alt=""/>
                            <div className="price">
                                <div>
                                    <p>R$ {res.price}</p>
                                </div>
                                <div>
                                    <ButtonColor Width={22} Height={22} Border={2} Background={colors.pink}/>
                                    <ButtonColor Width={22} Height={22} Border={2} Background={colors.complement4}/>
                                    <ButtonColor Width={22} Height={22} Border={2} Background={colors.primaryDark}/>
                                    <ButtonColor Width={22} Height={22} Border={2} Background={colors.black}/>
                                </div>
                            </div>
                            
                        </div>
                    )) : console.log("erro nas imagens")}
                </main>
                <footer>
                    <a href="#"><img src={images.SetaEsquerda} alt=""/></a>
                    <p>1 de 3</p>
                    <a href="#"><img src={images.SetaDireita} alt=""/></a>
                </footer>
            </Carrousel>
        </>
    )
};

export default Products;
