import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: calc(var(--spacing) * 6) 0;
  background: linear-gradient(135deg, var(--background) 0%, var(--background-light) 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: calc(var(--spacing) * 3);
  font-size: 2.5rem;
  background: linear-gradient(120deg, #ffffff, var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  letter-spacing: -0.5px;
  position: relative;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--secondary-color), transparent);
  }
`;

const Timeline = styled.div`
  position: relative;
  width: 100vw;
  margin: 0 auto;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: calc(var(--spacing) * 2) 0;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TimelineWrapper = styled.div`
  display: flex;
  gap: calc(var(--spacing) * 4);
  padding: 0 calc(var(--spacing) * 4);
  min-width: max-content;
  justify-content: center;
  margin: 0 auto;
`;

const TimelineItem = styled.div`
  position: relative;
  width: min(450px, 80vw);
  margin: 0 calc(var(--spacing) * 1);
  text-align: center;
`;

const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-5px);
  }
`;

const TimelineHeader = styled.div`
  padding: calc(var(--spacing) * 2);
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const CompanyName = styled.h3`
  margin-bottom: 0.75rem;
  font-size: 1.4rem;
  background: linear-gradient(120deg, #ffffff, var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const JobTitle = styled.h4`
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  opacity: 0.9;
  text-align: left;
`;

const Duration = styled.p`
  color: var(--secondary-color);
  font-size: 0.9rem;
  margin: 0;
  font-weight: 500;
  letter-spacing: 0.5px;
  opacity: 0.8;
  text-align: left;
`;

const Description = styled.div`
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1rem;
  text-align: left;
  padding: calc(var(--spacing) * 2);
  margin: 0;
  overflow: hidden;
  margin: 0;
`;



const Experience: React.FC = () => {

  const experiences = [
    {
      company: 'WISR',
      title: 'Head of Information Technology',
      duration: 'Dec 2020 – Present',
      description: [
        'Lead the work and successful submission of CDR (Consumer Data Rights) Open Banking to the ACCC.',
        'Successfully implemented security controls, rolling out CIS18 cybersecurity framework.',
        'Successfully ran cyber security attack simulation to the Wisr Board.',
        'Successful Implementation and integration of a new IVR system, Amazon Connect.',
        'Cost optimisation measures, contract negotiation of software and applications saving Wisr approx. $200k.',
      ],
    },
    {
      company: 'Skretting Australia',
      title: 'Business IT Manager',
      duration: 'Nov 2018 – Dec 2020',
      description: [
        'Implementation of IT infrastructure and rollout of M3 ERP to a new site in Westbury TAS...',
      ],
    },
    {
      company: 'ICT Innovations Pty Ltd',
      title: 'Business and Technology Consultant',
      duration: 'Oct 2015 – Nov 2018',
      description: [
        'Successfully implemented Salesforce to Redback Conferencing...',
      ],
    },
  ];

  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionTitle>Professional Experience</SectionTitle>
        <Timeline>
          <TimelineWrapper>
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineContent>
                <TimelineHeader>
                  <CompanyName>{exp.company}</CompanyName>
                  <JobTitle>{exp.title}</JobTitle>
                  <Duration>{exp.duration}</Duration>
                </TimelineHeader>
                <Description>
                  {exp.description.map((item, i) => (
                    <p key={i} style={{
                      padding: '0.5rem 0',
                      margin: 0,
                      color: 'var(--text-secondary)',
                      transition: 'all 0.3s ease'
                    }}>{item}</p>
                  ))}
                </Description>
              </TimelineContent>
              </TimelineItem>
            ))}
          </TimelineWrapper>
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
