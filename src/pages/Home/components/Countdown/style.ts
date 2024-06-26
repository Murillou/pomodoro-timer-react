import styled from 'styled-components';

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
