import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 7rem;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  color: ${props => props.theme['--color-gray100']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`;

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  font-size: 10rem;
  line-height: 8rem;
  color: ${props => props.theme['--color-gray100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${props => props.theme['--color-gray700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  color: ${props => props.theme['--color-green500']};
  padding: 2rem 0;
  width: 4rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  overflow: hidden;

  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 100%;
  color: ${props => props.theme.white};
  background: ${props => props.theme['--color-green400']};
  font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.187rem;

  padding: 1rem 2.5rem;
  border-radius: 8px;
`;
