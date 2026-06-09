import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const HeaderContainer = styled.header<{ scrolled: boolean }>`
  height: 70px;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: background 0.4s ease, box-shadow 0.4s ease;
  background: ${props => props.scrolled
    ? 'rgba(10, 14, 20, 0.97)'
    : 'rgba(0, 0, 0, 0.15)'};
  backdrop-filter: blur(12px);
  box-shadow: ${props => props.scrolled ? '0 1px 0 rgba(255,255,255,0.06)' : 'none'};
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2.5rem;

  @media (max-width: 600px) {
    padding: 0 1.25rem;
  }
`;

const Logo = styled(Link)`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  cursor: pointer;
  padding: 0.5rem 0.85rem;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.08);
  }

  &.active {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Header: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkProps = {
    spy: true,
    smooth: true,
    offset: -70,
    activeClass: 'active',
    duration: 600,
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <NavContent>
        <Logo to="about" {...linkProps}>Vinh Do</Logo>
        <NavLinks>
          <NavLink to="about" {...linkProps}>About</NavLink>
          <NavLink to="experience" {...linkProps}>Experience</NavLink>
          <NavLink to="skills" {...linkProps}>Skills</NavLink>
          <NavLink to="contact" {...linkProps}>Contact</NavLink>
        </NavLinks>
      </NavContent>
    </HeaderContainer>
  );
};

export default Header;
