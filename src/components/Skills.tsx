import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing);
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--spacing) * 2);
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

interface CardProps {
  isOpen: boolean;
}

const SkillCategory = styled.div<CardProps>`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(100, 255, 218, 0.1);
  }
`;

const CategoryHeader = styled.div`
  padding: calc(var(--spacing) * 1.5);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  min-height: 80px;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  background: linear-gradient(120deg, #ffffff, var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin: 0;
  text-align: center;
`;

interface ContentProps {
  isOpen: boolean;
}

const SkillsList = styled.ul<ContentProps>`
  list-style: none;
  margin: 0;
  max-height: ${props => props.isOpen ? '500px' : '0'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  transition: all 0.3s ease-in-out;
  padding: ${props => props.isOpen ? 'calc(var(--spacing) * 1.5)' : '0 calc(var(--spacing) * 1.5)'};
  transform-origin: top;
  transform: ${props => props.isOpen ? 'scaleY(1)' : 'scaleY(0)'};
  position: relative;
  overflow: hidden;
`;

const SkillItem = styled.li`
  padding: 0.5rem 0;
  text-align: center;
  color: var(--text-secondary);
  transition: all 0.3s ease;

  &:hover {
    color: var(--text-primary);
  }
`;

const Skills: React.FC = () => {
  const [openCategory, setOpenCategory] = React.useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(prev => prev === category ? null : category);
  };

  const skillsData = {
    'Core Competencies': [
      'Strategic thinking',
      'Leadership and team management',
      'Communication skills',
      'Problem-solving and decision-making',
      'Technical expertise',
      'Change management',
      'Project management',
      'Financial management',
      'Risk management and security',
      'Business acumen',
      'Innovation and adaptability',
    ],
    'Technologies': [
      'Operating Systems: Windows, Mac',
      'Cloud Computing Services: Microsoft Azure, AWS, Google Cloud',
      'Database Management: Microsoft SQL Server, Aginity Redshift',
      'CRM: Salesforce.com, Microsoft Dynamics, Zoho CRM',
      'ERP: Infor M3, SAP R3',
      'Service Management: ServiceNow, Salesforce Service Cloud',
      'Financial/Commercial: Oracle EBS, Hyperion, Cognos TM1',
      'Marketing Automation: Eloqua, Marketo, Salesforce Marketing Cloud',
      'Project Management: Jira, Monday.com, MS Project',
      'Business Intelligence: Power BI, Tableau, Cognos TM1',
      'Productivity Applications: Google Workspace, Microsoft Office 365',
    ],
    'Specialisations': [
      'Team Leadership, Mentoring and Coaching',
      'Project Management',
      '',
    ],
  };

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Technical Skills – Systems and Applications</SectionTitle>
        <SkillsGrid>
          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCategory key={category} isOpen={openCategory === category}>
              <CategoryHeader onClick={() => toggleCategory(category)}>
                <CategoryTitle>{category}</CategoryTitle>
              </CategoryHeader>
              <SkillsList isOpen={openCategory === category}>
                {skills.map((skill) => (
                  <SkillItem key={skill}>{skill}</SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
