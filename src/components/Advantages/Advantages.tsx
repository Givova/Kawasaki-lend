import React from 'react';
import styled from 'styled-components';

const ProcessSection = styled.section`
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

const ProcessContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }
`;

const ConnectingLine = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
    position: absolute;
    left: 50%;
    top: 40px;
    bottom: 40px;
    width: 2px;
    background-color: rgba(25, 109, 255, 0.2);
    transform: translateX(-50%);
    z-index: 0;
  }
`;

const ProcessCard = styled.div<{ isHighlighted?: boolean; isOffset?: boolean }>`
  background-color: ${props => props.isHighlighted ? 'var(--primary-color)' : 'var(--light-color)'};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.isHighlighted ? 'var(--primary-color)' : 'rgba(25, 109, 255, 0.1)'};
  position: relative;
  z-index: 10;
  transition: all 0.3s ease;
  
  ${props => props.isOffset && `
    @media (min-width: 768px) {
      transform: translateY(64px);
    }
  `}
  
  ${props => props.isHighlighted && `
    @media (min-width: 768px) {
      grid-column: span 2;
      max-width: 400px;
      margin: 48px auto 0;
    }
  `}
  
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    border-color: ${props => props.isHighlighted ? 'var(--primary-color)' : 'rgba(25, 109, 255, 0.3)'};
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const StepNumber = styled.div<{ isHighlighted?: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${props => props.isHighlighted ? 'var(--light-color)' : 'var(--primary-color)'};
  color: ${props => props.isHighlighted ? 'var(--primary-color)' : 'var(--light-color)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  margin-right: 16px;
  flex-shrink: 0;
`;

const CardTitle = styled.h3<{ isHighlighted?: boolean }>`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.isHighlighted ? 'var(--light-color)' : 'var(--primary-color)'};
  margin: 0;
  padding-right: 40px;
  text-align: left;
  
  @media (max-width: 767px) {
    padding-right: 0;
  }
`;

const CardContent = styled.div`
  padding-left: 64px;
`;

const CardDescription = styled.p<{ isHighlighted?: boolean }>`
  color: ${props => props.isHighlighted ? 'rgba(255, 255, 255, 0.8)' : 'var(--dark-gray)'};
  line-height: 1.6;
  margin: 0;
`;

const CardLink = styled.a`
  color: var(--primary-color);
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const CardIcon = styled.div<{ isHighlighted?: boolean }>`
  position: absolute;
  top: 24px;
  right: 24px;
  color: ${props => props.isHighlighted ? 'var(--light-color)' : 'var(--primary-color)'};
  
  svg {
    width: 40px;
    height: 40px;
  }
`;

const Process: React.FC = () => {
  return (
    <ProcessSection id="advantages">
      <div className="container">
        <SectionTitle>Процесс <span>покупки мотоцикла</span></SectionTitle>
        
        <ProcessContainer>
          <ConnectingLine />
          
          <ProcessGrid>
            {/* Шаг 1 */}
            <ProcessCard>
              <CardHeader>
                <StepNumber>1</StepNumber>
                <CardTitle>Оставьте заявку</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Оставьте заявку на сайте или позвоните нам по телефону.
                </CardDescription>
              </CardContent>
              <CardIcon>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </CardIcon>
            </ProcessCard>

            {/* Шаг 2 */}
            <ProcessCard isOffset>
              <CardHeader>
                <StepNumber>2</StepNumber>
                <CardTitle>Бесплатная консультация</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Наш специалист поможет вам с выбором и ответит на все вопросы.
                </CardDescription>
              </CardContent>
              <CardIcon>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </CardIcon>
            </ProcessCard>

            {/* Шаг 3 */}
            <ProcessCard>
              <CardHeader>
                <StepNumber>3</StepNumber>
                <CardTitle>Заключаем договор</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Заключаем договор с предоплатой всего 10%.{' '}
                  <CardLink href="/placeholder/download/contract.pdf" download>
                    Скачать образец договора
                  </CardLink>
                </CardDescription>
              </CardContent>
              <CardIcon>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </CardIcon>
            </ProcessCard>

            {/* Шаг 4 */}
            <ProcessCard isOffset>
              <CardHeader>
                <StepNumber>4</StepNumber>
                <CardTitle>Мы берем на себя все заботы</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Берём на себя доставку и все документы: Евросоюз, Россия, Таможня и регистрация.
                </CardDescription>
              </CardContent>
              <CardIcon>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </CardIcon>
            </ProcessCard>

            {/* Шаг 5 */}
            <ProcessCard isHighlighted>
              <CardHeader>
                <StepNumber isHighlighted>5</StepNumber>
                <CardTitle isHighlighted>Получите ваш мотоцикл</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription isHighlighted>
                  Всего 3 недели — и мотоцикл у вас!
                </CardDescription>
              </CardContent>
            </ProcessCard>
          </ProcessGrid>
        </ProcessContainer>
      </div>
    </ProcessSection>
  );
};

export default Process;