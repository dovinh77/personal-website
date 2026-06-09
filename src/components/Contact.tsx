import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: calc(var(--spacing) * 6) 0 calc(var(--spacing) * 8);
  background: var(--background);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--border-color);
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 calc(var(--spacing) * 2);
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: calc(var(--spacing) * 2);
  font-size: 0.78rem;
  color: var(--text-secondary);
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
`;

const Intro = styled.p`
  text-align: center;
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.7;
  max-width: 480px;
  margin: 0 auto calc(var(--spacing) * 4);
`;

const ContactList = styled.div`
  border-top: 1px solid var(--border-color);
`;

const ContactLink = styled.a`
  display: grid;
  grid-template-columns: 2.5rem 1fr auto;
  align-items: center;
  gap: 1.25rem;
  padding: calc(var(--spacing) * 1.75) 0;
  border-bottom: 1px solid var(--border-color);
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
  }

  @media (max-width: 480px) {
    grid-template-columns: 2rem 1fr auto;
    gap: 0.75rem;
  }
`;

const IconBox = styled.div<{ $linkedin?: boolean }>`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.2s ease, border-color 0.2s ease;

  ${ContactLink}:hover & {
    background: ${({ $linkedin }) => $linkedin ? '#0A66C2' : 'rgba(255, 255, 255, 0.1)'};
    border-color: ${({ $linkedin }) => $linkedin ? '#0A66C2' : 'rgba(255, 255, 255, 0.15)'};
  }

  @media (max-width: 480px) {
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
  }
`;

const IconSvg = styled.svg`
  width: 1.1rem;
  height: 1.1rem;
  fill: rgba(255, 255, 255, 0.6);
  transition: fill 0.2s ease;

  ${ContactLink}:hover & {
    fill: #ffffff;
  }

  @media (max-width: 480px) {
    width: 0.9rem;
    height: 0.9rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const ContactLabel = styled.span`
  font-size: 1.05rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.01em;
`;

const ContactDetail = styled.span`
  font-size: 0.82rem;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
`;

const Arrow = styled.span`
  color: rgba(255, 255, 255, 0.3);
  font-size: 1rem;
  transition: transform 0.25s ease, color 0.2s ease;
  display: inline-block;

  ${ContactLink}:hover & {
    color: rgba(255, 255, 255, 0.7);
    transform: translateX(4px);
  }
`;

const EmailIcon = () => (
  <IconSvg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </IconSvg>
);

const LinkedInIcon = () => (
  <IconSvg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </IconSvg>
);

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <Intro>
          Get in touch.
        </Intro>
        <ContactList>
          <ContactLink href="mailto:do_vinh@hotmail.com">
            <IconBox><EmailIcon /></IconBox>
            <ContactInfo>
              <ContactLabel>Email</ContactLabel>
              <ContactDetail>do_vinh@hotmail.com</ContactDetail>
            </ContactInfo>
            <Arrow>→</Arrow>
          </ContactLink>

          <ContactLink href="https://www.linkedin.com/in/do-vinh" target="_blank" rel="noopener noreferrer">
            <IconBox $linkedin><LinkedInIcon /></IconBox>
            <ContactInfo>
              <ContactLabel>LinkedIn</ContactLabel>
              <ContactDetail>linkedin.com/in/do-vinh</ContactDetail>
            </ContactInfo>
            <Arrow>→</Arrow>
          </ContactLink>
        </ContactList>
      </Container>
    </ContactSection>
  );
};

export default Contact;
