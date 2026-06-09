import React from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

const FooterContainer = styled.footer`
  padding: calc(var(--spacing) * 2.5) 0;
  text-align: center;
  background: var(--background);
  position: relative;
  border-top: 1px solid var(--border-color);
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  margin: 0;
`;

const ScrollToTop = styled.button`
  position: fixed;
  bottom: calc(var(--spacing) * 2);
  right: calc(var(--spacing) * 2);
  width: 38px;
  height: 38px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border-color);
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.25);
  }

  &:focus {
    outline: none;
  }
`;

const Footer: React.FC = () => {
  const [showScroll, setShowScroll] = React.useState(false);

  React.useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  return (
    <FooterContainer>
      <Copyright> {new Date().getFullYear()} Vinh Do. All rights reserved.</Copyright>
      {showScroll && (
        <ScrollToTop 
          onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
          aria-label="Scroll to top"
        >
          ↑
        </ScrollToTop>
      )}
    </FooterContainer>
  );
};

export default Footer;
