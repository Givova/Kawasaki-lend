import React from 'react';
import styled from 'styled-components';
import { AdvantageItem } from '../../types';

const AdvantagesSection = styled.section`
  padding: 80px 0;
  background-color: var(--light-color);
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
  
  span {
    color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const AdvantageCard = styled.div`
  background-color: var(--gray-color);
  border-radius: 8px;
  padding: 30px;
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  svg {
    width: 30px;
    height: 30px;
    color: var(--light-color);
  }
`;

const AdvantageTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const AdvantageDescription = styled.p`
  color: var(--dark-gray);
  line-height: 1.6;
`;

const advantagesData: AdvantageItem[] = [
    {
        id: '1',
        title: 'Легендарное качество',
        description: 'Kawasaki - это более 100 лет опыта в производстве мотоциклов и безупречная репутация на мировом рынке.',
        icon: 'quality'
    },
    {
        id: '2',
        title: 'Инновационные технологии',
        description: 'Передовые разработки и инновационные решения, которые делают каждый мотоцикл Kawasaki уникальным.',
        icon: 'variety'
    },
    {
        id: '3',
        title: 'Гарантия и поддержка',
        description: 'Официальная гарантия и профессиональное сервисное обслуживание от авторизованных дилеров.',
        icon: 'warranty'
    }
];

const getIcon = (iconName: string) => {
    switch (iconName) {
        case 'quality':
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
            );
        case 'price':
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,17V16H9V14H13V13H10A1,1 0 0,1 9,12V9A1,1 0 0,1 10,8H11V7H13V8H15V10H11V11H14A1,1 0 0,1 15,12V15A1,1 0 0,1 14,16H13V17H11Z" />
                </svg>
            );
        case 'variety':
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19,5V7H15V5H19M9,5V11H5V5H9M19,13V19H15V13H19M9,17V19H5V17H9M21,3H13V9H21V3M11,3H3V13H11V3M21,11H13V21H21V11M11,15H3V21H11V15Z" />
                </svg>
            );
        case 'warranty':
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.1 14.8,9.5V11C15.4,11 16,11.6 16,12.3V15.8C16,16.4 15.4,17 14.7,17H9.2C8.6,17 8,16.4 8,15.7V12.2C8,11.6 8.6,11 9.2,11V9.5C9.2,8.1 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z" />
                </svg>
            );
        case 'parts':
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V4A2,2 0 0,1 7,2M7,4V8H17V4H7M7,10V12H9V10H7M11,10V12H13V10H11M15,10V12H17V10H15M7,14V16H9V14H7M11,14V16H13V14H11M15,14V16H17V14H15M7,18V20H9V18H7M11,18V20H13V18H11M15,18V20H17V18H15Z" />
                </svg>
            );
        case 'support':
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,1C7,1 3,5 3,10V17A3,3 0 0,0 6,20H9V12H5V10A7,7 0 0,1 12,3A7,7 0 0,1 19,10V12H15V20H18A3,3 0 0,0 21,17V10C21,5 17,1 12,1Z" />
                </svg>
            );
        default:
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
                </svg>
            );
    }
};

const Advantages: React.FC = () => {
    return (
        <AdvantagesSection id="advantages">
            <div className="container">
                <SectionTitle>Наши <span>преимущества</span></SectionTitle>
                <AdvantagesGrid>
                    {advantagesData.map((advantage) => (
                        <AdvantageCard key={advantage.id}>
                            <IconWrapper>
                                {getIcon(advantage.icon)}
                            </IconWrapper>
                            <AdvantageTitle>{advantage.title}</AdvantageTitle>
                            <AdvantageDescription>{advantage.description}</AdvantageDescription>
                        </AdvantageCard>
                    ))}
                </AdvantagesGrid>
            </div>
        </AdvantagesSection>
    );
};

export default Advantages;