import React, { useState } from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: calc(var(--spacing) * 6) 0;
  background: var(--background-light);
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
  margin-bottom: calc(var(--spacing) * 4);
  font-size: 0.78rem;
  color: var(--text-secondary);
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
`;

const RoleList = styled.div`
  border-top: 1px solid var(--border-color);
`;

const RoleRow = styled.div<{ $expanded: boolean }>`
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
  }
`;

const RoleHeader = styled.div`
  display: grid;
  grid-template-columns: 2.5rem 1fr auto;
  align-items: center;
  padding: calc(var(--spacing) * 1.75) 0;
  gap: 1.25rem;

  @media (max-width: 480px) {
    grid-template-columns: 2rem 1fr auto;
    gap: 0.75rem;
  }
`;

const LogoWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: #ffffff;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
    padding: 0.2rem;
  }
`;

const CompanyLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;


const RoleInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const CompanyName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.01em;
  line-height: 1.3;
`;

const JobTitle = styled.span`
  font-size: 0.85rem;
  color: var(--secondary-color);
  letter-spacing: 0.04em;
  font-weight: 400;
`;

const RoleRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;

  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`;

const Duration = styled.span`
  color: var(--text-secondary);
  font-size: 0.78rem;
  white-space: nowrap;
  letter-spacing: 0.03em;

  @media (max-width: 480px) {
    display: none;
  }
`;

const ArrowIcon = styled.span<{ $expanded: boolean }>`
  color: rgba(255, 255, 255, 0.3);
  font-size: 1rem;
  line-height: 1;
  transition: transform 0.3s ease, color 0.2s ease;
  transform: ${({ $expanded }) => ($expanded ? 'rotate(90deg)' : 'rotate(0deg)')};
  display: inline-block;

  ${RoleRow}:hover & {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const ExpandedContent = styled.div<{ $expanded: boolean }>`
  overflow: hidden;
  max-height: ${({ $expanded }) => ($expanded ? '2000px' : '0')};
  transition: max-height 0.45s ease;
`;

const ContentInner = styled.div`
  padding: 0 0 calc(var(--spacing) * 2.5) 0;
`;

const DurationMobile = styled.span`
  display: none;
  color: var(--text-secondary);
  font-size: 0.75rem;
  letter-spacing: 0.03em;
  margin-bottom: calc(var(--spacing) * 1.5);

  @media (max-width: 480px) {
    display: block;
  }
`;

const SectionLabel = styled.h5`
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin: calc(var(--spacing) * 1.5) 0 0.6rem;

  &:first-of-type {
    margin-top: 0;
  }
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BulletItem = styled.li`
  position: relative;
  padding-left: 1rem;
  margin-bottom: 0.35rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.7;

  &::before {
    content: '–';
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.18);
  }
`;

interface ExperienceEntry {
  company: string;
  title: string;
  duration: string;
  logo?: string;
  responsibilities: string[];
  achievements: string[];
}

const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences: ExperienceEntry[] = [
    {
      company: 'Wisr Finance',
      title: 'Head of Technology',
      duration: 'Dec 2020 – Present',
      logo: '/personal-website/images/wisr-logo.png',
      responsibilities: [
        'Formulate the organisational technology strategy and execution framework, ensuring alignment with corporate growth objectives and critical delivery milestones.',
        'Provide strategic leadership across technical design, engineering, DevSecOps, quality assurance, data analytics, and enterprise architecture.',
        'Direct the end-to-end software development lifecycle with robust delivery governance, rigorous estimation disciplines, and comprehensive capacity planning.',
        'Govern cybersecurity operations and risk mitigation to ensure strict adherence to CIS controls, ISO 27001, and ISO 42001 standards.',
        'Coordinate product and commercial roadmap prioritisation and release management in conjunction with Product Owners.',
        'Manage the technical debt strategy and governance, and exercise full accountability for the technology department\'s financial budget and resource allocation.',
      ],
      achievements: [
        'Directed the technical execution for the deployment of Generative AI, using LLM agents and agentic AI to automate credit decisioning services, leveraging foundational models from Azure AI Foundry and AWS Bedrock.',
        'Executed comprehensive cost optimisation strategies and led software contract negotiations, resulting in approximately $200,000 in fiscal savings for the organisation.',
      ],
    },
    {
      company: 'Skretting Australia',
      title: 'Business IT Manager',
      duration: 'Nov 2018 – Dec 2020',
      logo: '/personal-website/images/skretting-logo.svg',
      responsibilities: [
        'Architected and executed the organisational IT Strategy, including the implementation of the 8Q Roadmap.',
        'Held primary accountability for the enterprise IT program, ensuring delivery of technical projects in strict alignment with global strategic objectives.',
        'Directed the lifecycle of the Infor M3 ERP system, overseeing the deployment of M3 Unite across all business units, with comprehensive user training and standardised governance procedures.',
        'Exercised fiscal stewardship over the IT budget, managing capital and operational expenditure, inventory procurement, and service delivery expectations.',
        'Engineered robust compliance frameworks, business continuity plans, and disaster recovery protocols, formalising key IT risk management controls.',
      ],
      achievements: [
        'Directed the implementation of IT infrastructure and the comprehensive rollout of the M3 ERP system at a new site in Westbury, TAS.',
        'Spearheaded an eCommerce solution featuring an automated ordering platform for efficient customer stock and inventory management.',
        'Delivered manufacturing intelligence solutions by capturing and analysing production data through Power BI.',
      ],
    },
    {
      company: 'ICT Innovations Pty Ltd',
      title: 'Business & Technology Consultant',
      duration: 'Oct 2015 – Nov 2018',
      logo: '/personal-website/images/ict-innovations-logo.png',
      responsibilities: [
        'Spearheaded the Business Intelligence team delivering the IBM Cognos TM1 student load and fee revenue planning system, supporting the University of Sydney\'s planning, forecasting, and budgeting cycles.',
        'Directed the data project team to ensure timely submission of the 2018 ERA SEER research and academic excellence report to the Australian Research Council within strict regulatory deadlines.',
        'Managed the full project lifecycle, conceptualisation, solution architecture, development, rigorous testing, and final implementation.',
        'Provided end-to-end project management for the development, deployment, and administration of the Salesforce.com platform, liaising with stakeholders and vendors on functional designs and bespoke customisations.',
      ],
      achievements: [
        'Directed the successful integration and deployment of Salesforce.com CRM for Redback Conferencing.',
        'Managed delivery of the ERA SEER 2018 research and academic excellence submission to the Australian Research Council.',
        'Led the end-to-end implementation of the IBM Cognos TM1 planning system for the University of Technology Sydney.',
      ],
    },
  ];

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionTitle>Professional Experience</SectionTitle>
        <RoleList>
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <RoleRow
                key={index}
                $expanded={isExpanded}
                onClick={() => handleToggle(index)}
              >
                <RoleHeader>
                  {exp.logo
                    ? <LogoWrapper><CompanyLogo src={exp.logo} alt={exp.company} /></LogoWrapper>
                    : <div />
                  }
                  <RoleInfo>
                    <CompanyName>{exp.company}</CompanyName>
                    <JobTitle>{exp.title}</JobTitle>
                  </RoleInfo>
                  <RoleRight>
                    <Duration>{exp.duration}</Duration>
                    <ArrowIcon $expanded={isExpanded}>→</ArrowIcon>
                  </RoleRight>
                </RoleHeader>

                <ExpandedContent $expanded={isExpanded}>
                  <ContentInner>
                    <DurationMobile>{exp.duration}</DurationMobile>
                    <SectionLabel>Responsibilities</SectionLabel>
                    <BulletList>
                      {exp.responsibilities.map((item, i) => (
                        <BulletItem key={i}>{item}</BulletItem>
                      ))}
                    </BulletList>
                    <SectionLabel>Achievements</SectionLabel>
                    <BulletList>
                      {exp.achievements.map((item, i) => (
                        <BulletItem key={i}>{item}</BulletItem>
                      ))}
                    </BulletList>
                  </ContentInner>
                </ExpandedContent>
              </RoleRow>
            );
          })}
        </RoleList>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
