import styled, { css } from 'styled-components';

const Button = styled.button`
  border-radius: 5px;
  padding: calc(.4rem + .3vmin) calc(1.2rem + .5vmin);
  text-align: center;
  color: ${({ color }) => color || '#fff'};
  background-color: ${({ bgcolor }) => bgcolor || '#0959FE'};
  font-weight: ${({ boldtext }) => boldtext ? 'bold' : 'normal'};
  font-size: ${({ fontsize }) => fontsize || 'calc(12px + .5vmin)}'};

  ${({ addons }) =>
    addons &&
    css`${Object.entries(addons).map(([key, value]) => `${key}: ${value};`)}`
  }
`;

export default Button;