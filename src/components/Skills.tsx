import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: calc(var(--spacing) * 7) 0;
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
  margin-bottom: calc(var(--spacing) * 5);
  font-size: 0.78rem;
  color: var(--text-secondary);
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--spacing) * 4) calc(var(--spacing) * 3);

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ExpertiseGroup = styled.div``;

const GroupHeading = styled.h3`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--secondary-color);
  margin-bottom: calc(var(--spacing) * 1.25);
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--border-color);
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Item = styled.li`
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
`;

const ItemLabel = styled.span`
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  margin-right: 0.3rem;
`;

const Statement = styled.p`
  margin-top: calc(var(--spacing) * 5);
  padding-top: calc(var(--spacing) * 3);
  border-top: 1px solid var(--border-color);
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.9;
  max-width: 760px;
  font-weight: 300;
  font-style: italic;
`;

const Skills: React.FC = () => {
  const expertise = [
    {
      heading: 'Leadership',
      items: [
        'Technology strategy',
        'Executive leadership',
        'Team building & mentoring',
        'Change management',
        'Financial stewardship',
        'Risk & cybersecurity',
      ],
    },
    {
      heading: 'Delivery',
      items: [
        'Enterprise architecture',
        'Software development lifecycle',
        'DevSecOps',
        'Project & program management',
        'Quality assurance',
        'Vendor & contract management',
      ],
    },
    {
      heading: 'Technology',
      items: [
        'Cloud: Azure, AWS, Google Cloud',
        'AI: Bedrock, AI Foundry, LLM agents',
        'CRM: Salesforce, Dynamics, Zoho',
        'ITSM: ServiceNow',
        'ERP: Infor M3, SAP R3',
        'Data: SQL Server, Redshift, Power BI',
      ],
    },
    {
      heading: 'Industries',
      items: [
        'Fintech & consumer lending',
        'Agribusiness & aquaculture',
        'Professional services',
      ],
    },
    {
      heading: 'Frameworks',
      items: [
        'ITIL',
        'Agile / Scrum',
        'CIS 18 Controls',
        'ISO 27001 / 42001',
      ],
    },
    {
      heading: 'Productivity',
      items: [
        'Google Workspace', 
        'Microsoft 365',
        'Atlassian product suite',
      ],
    },
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Expertise</SectionTitle>
        <ExpertiseGrid>
          {expertise.map(group => (
            <ExpertiseGroup key={group.heading}>
              <GroupHeading>{group.heading}</GroupHeading>
              <ItemList>
                {group.items.map(item => {
                  const colonIdx = item.indexOf(':');
                  if (colonIdx > -1) {
                    const label = item.substring(0, colonIdx);
                    const value = item.substring(colonIdx + 1).trim();
                    return (
                      <Item key={item}>
                        <ItemLabel>{label}:</ItemLabel>{value}
                      </Item>
                    );
                  }
                  return <Item key={item}>{item}</Item>;
                })}
              </ItemList>
            </ExpertiseGroup>
          ))}
        </ExpertiseGrid>
        <Statement>
          Deep, hands-on fluency across AI tooling, cloud platforms, CRM, ERP, financial systems, and relational databases — grounded in two decades of building and running enterprise technology at scale.
        </Statement>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
