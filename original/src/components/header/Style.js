import styled from 'styled-components';
import colors from '../../assets/colors';

const Container = styled.div `
    display: flex;
    justify-content: space-around;
    flex-direction: column;
`;
const Logo = styled.div `
    padding: 20px;
    text-align: center;
`;

const NavBar = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    border-top: 1px solid ${colors.grayLighter};
    border-bottom: 1px solid ${colors.grayLighter};
    padding: 20px 40px;
    justify-content: space-evenly;
`;

const BoxLogin = styled.div`
    width: 100%;
    max-width: 170px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BoxMenu = styled.div`
    
`;

const BoxSearch = styled.div`
    width: 100%;
    max-width: 150px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    .bag {
        display: flex;
        width: 40px;
        align-items: center;
        justify-content: space-between;
    }

    .bag span {
        font-size: 12px;
        line-height: 20px;
        color: ${colors.grayStrong};
    }

    .search {
        width: 100%;
        max-width: 83px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(104, 104, 104, 0.4);
    }

    input {
        border: none;
        width: 40px;
        text-align: right;
    }

`;

const Links = styled.a `
    text-decoration: none;
    font-size: ${props => `${props.Size}px`};
    color: ${props => props.Color};
    margin-left: 25px;
`;


export {
   Container,
   Logo,
   NavBar,
   BoxLogin,
   BoxMenu,
   BoxSearch,
   Links,
};
