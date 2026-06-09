import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const HeroSection = styled.section<{ bgUrl: string }>`
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: 75% 15%;
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.55) 0%,
      rgba(0, 0, 0, 0.45) 55%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 6rem 2.5rem 4rem;
  max-width: 720px;
  width: 100%;
  text-align: left;
`;

const HeroName = styled.h1`
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin: 0 0 0.6rem;
  line-height: 1;
`;

const HeroTitle = styled.p`
  font-size: 0.95rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--secondary-color);
  font-weight: 500;
  margin-bottom: 1.75rem;
`;

const HeroDivider = styled.div`
  width: 40px;
  height: 1px;
  background: rgba(255, 255, 255, 0.4);
  margin: 0 0 1.75rem;
`;

const HeroTagline = styled.p`
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  color: rgba(255, 255, 255, 0.75);
  max-width: 520px;
  margin: 0 0 2.5rem;
  line-height: 1.8;
  font-weight: 300;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  background: transparent;
  padding: 0.6rem 1.4rem;
  border-radius: 2px;
  transition: all 0.25s ease;
  font-weight: 400;
  font-size: 0.82rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.35);

  svg {
    font-size: 1rem;
  }

  &:hover {
    color: #ffffff;
    background: #0A66C2;
    border-color: #0A66C2;
  }
`;

const Hero: React.FC = () => {
  const bgUrl = `${import.meta.env.BASE_URL}images/profile.jpg`;

  return (
    <HeroSection id="about" bgUrl={bgUrl}>
      <HeroContent>
        <HeroName>Vinh Do</HeroName>
        <HeroTitle>Head of Technology</HeroTitle>
        <HeroDivider />
        <HeroTagline>
          Over two decades directing technology strategy and enterprise transformation across fintech, agribusiness, and consulting. Building high-performance teams that deliver at scale.
        </HeroTagline>
        <SocialLinks>
          <SocialLink
            href="https://www.linkedin.com/in/do-vinh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span>LinkedIn</span>
          </SocialLink>
        </SocialLinks>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
