import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const HeaderContainer = styled.header`
  background: rgba(var(--primary-color-rgb), 0.85);
  color: white;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease-in-out;
`;

const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: row;
    text-align: center;
    gap: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  position: relative;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--secondary-color), transparent);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
    
    &::after {
      width: 80%;
    }
  }

  &.active {
    color: white;
    background: rgba(255, 255, 255, 0.15);
    
    &::after {
      width: 80%;
      background: linear-gradient(90deg, transparent, var(--secondary-color), transparent);
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <NavContent>
        <h1>Vinh Do</h1>
        <NavLinks>
          <NavLink
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            activeClass="active"
            duration={500}
            isDynamic={true}
            spyThrottle={100}
            hashSpy={true}
          >
            About
          </NavLink>
          <NavLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-80}
            activeClass="active"
            duration={500}
            isDynamic={true}
            spyThrottle={100}
            hashSpy={true}
          >
            Skills
          </NavLink>
          <NavLink
            to="experience"
            spy={true}
            smooth={true}
            offset={-80}
            activeClass="active"
            duration={500}
            isDynamic={true}
            spyThrottle={100}
            hashSpy={true}
          >
            Experience
          </NavLink>
        </NavLinks>
      </NavContent>
    </HeaderContainer>
  );
};

export default Header;
