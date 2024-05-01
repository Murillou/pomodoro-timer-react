import styled from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  cursor: pointer;
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 4px;
  margin: 8px;
  background-color: ${props => props.theme['--color-green500']};
  color: ${props => props.theme.white};

  /* ${props => {
    return `background-color: ${buttonVariants[props.variant]}`;
  }} */
`;
