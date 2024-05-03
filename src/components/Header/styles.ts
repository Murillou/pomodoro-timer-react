import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .igniteLogo {
    width: 2.2rem;
    height: 2.2rem;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      color: ${props => props.theme['--color-gray100']};

      &:hover {
        border-bottom: 3px solid ${props => props.theme['--color-green400']};
      }

      &.active {
        color: ${props => props.theme['--color-green500']};
      }
    }
  }
`;
