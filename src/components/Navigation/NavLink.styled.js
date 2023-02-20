import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkTitle = styled(NavLink)`
display: flex;
flex-direction: column;
padding-left: 40px;
  font-size: 36px;
  font-weight: 700;
  text-decoration: none;
  color: #000;
  &:hover,
  &:focus {
    color: #be7214;
  }
`;