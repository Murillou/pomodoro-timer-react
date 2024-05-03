import { Timer, Scroll } from 'phosphor-react';
import IgniteLogo from '../../assets/ignite-logo.svg';

import { HeaderStyled } from './styles';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <>
      <HeaderStyled>
        <span>
          <img className="igniteLogo" src={IgniteLogo} alt="Ignite Logo" />
        </span>

        <nav>
          <NavLink title="Timer" to="/">
            <Timer size={24} />
          </NavLink>

          <NavLink title="Histórico" to="/history">
            <Scroll size={24} />
          </NavLink>
        </nav>
      </HeaderStyled>
    </>
  );
}
