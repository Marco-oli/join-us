import styled from 'styled-components';
import colors from '../assets/colors';

const Button = styled.button`
   width: ${props => `${props.Width}px`};
   height: ${props => `${props.Height}px`};
   background-color: ${props => props.Background};
   font-size: ${props => `${props.Size}px`}; 
   color: ${props => props.Color};
   border-radius: 3px;
   border: none;
   text-transform: uppercase;
`;

const ButtonColor = styled(Button)`
   border-radius: 50%;
   border: 2px solid #fff;
   margin-left: 2px;

   &:focus {
      border-color: ${colors.primary};
   }
`;

const CarrouselButton = styled(Button)`
   border-radius: 50%;
   border: ${props => `${props.Border}px solid ${colors.complement4}`}
`;

export {
   Button,
   ButtonColor,
   CarrouselButton
};