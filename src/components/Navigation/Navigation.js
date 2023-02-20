
import { NavLinkTitle } from './NavLink.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavLinkTitle to="/">Home </NavLinkTitle>
      <NavLinkTitle to="/movies">Movies</NavLinkTitle>
    </nav>
  );
};
