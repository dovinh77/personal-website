import React from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

const FooterContainer = styled.footer`
  padding: calc(var(--spacing) * 2) 0;
  text-align: center;
  background: var(--background);
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0;
`;

const ScrollToTop = styled.button`
  position: fixed;
  bottom: calc(var(--spacing) * 2);
  right: calc(var(--spacing) * 2);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--secondary-color);
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
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
