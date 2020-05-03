import styled from 'styled-components';
import colors from '../../assets/colors';

const Container = styled.div `
    display: flex;
    flex-direction: column;
`;

const BoxFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-top: 2px solid ${colors.complement1};
    padding: 30px;
    margin-top: 145px;
    position: relative;
`;

const BoxNews = styled.div`
    width: 293px;
    height: 293px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 2px solid ${colors.complement1};
    border-radius: 50%;
    position: absolute;
    right: 5%;
    bottom: 10%;
    background-color: ${colors.white};

    p{
        font-size: 16px;
        color: ${colors.blackLight};
        font-weight: bold;
        text-transform: uppercase;
        line-height: 26px;
    }

    input {
        border: none;
        border-bottom: 2px solid ${colors.complement1};
    }
`;

//NEWS

const BoxInput = styled.div`
    display: flex;
    flex-direction: column;

    label {
        font-size: 14px;
        color: ${colors.blackLight};
        line-height: 20px;
    }
`;

//Footer Links

const RedesSociais = styled.div`
    display: block;
    box-sizing: border-box;
    margin-left: 100px;

    a{
        padding-right: 35px;
    }
`;

const Links = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    margin-top: 15px;

    img {
        width: 92px;
        height: 58px;
    }
`;

const BoxLinks = styled.div`
    display: flex;
    flex-direction: column;
    
    p {
        font-size: 14px;
        line-height: 20px;
        font-weight: bold;
        text-transform: uppercase;
        color: ${colors.complement1};
    }

    a {
        font-size: 14px;
        color: ${colors.blackLight};
        text-decoration: none;
        margin-top: 10px;
    }
`;

const FooterLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${colors.primary};
    color: ${colors.white};
    height: 60px;
    margin-top: 50px;

    p {
        font-size: 12px;
        width: 700px;
    }

    img {
        width: 111px;
        height: 25px;
    }
`;

export {
    Container,
    BoxNews,
    BoxInput,
    BoxFooter,
    RedesSociais,
    Links,
    BoxLinks,
    FooterLogo
}