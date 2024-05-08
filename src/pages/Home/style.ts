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

export const StartCountdownButton = styled.button`
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
  gap: 0.5rem;

  padding: 1rem 2.5rem;
  border-radius: 8px;
  border: 0;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${props => props.theme['--color-green500']};
  }
`;

export const StopCountdownButton = styled.button`
  width: 100%;
  color: ${props => props.theme.white};
  background: ${props => props.theme['--color-red500']};
  font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 1rem 2.5rem;
  border-radius: 8px;
  border: 0;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme['--color-red']};
  }
`;
