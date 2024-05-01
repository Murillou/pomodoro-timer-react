import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus{
  outline: 0;
  box-shadow: 0 0 0 2px ${props => props.theme['--color-green500']}; 
}

body{
  background: ${props => props.theme['--color-gray900']};
  color: ${props => props.theme['--color-gray-300']} ;
}

body, input, text-area, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

`;
