import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 70rem;
  height: calc(100vh - 10rem);
  margin: 5rem 9rem;
  padding: 2.5rem;

  background: ${props => props.theme['--color-gray800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;
