import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--secondary-color);
  color: var(--light-color);
  padding: 50px 0 30px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 60px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 220px;
  max-width: 280px;
  
  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`;

const FooterLogo = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  
  span {
    color: var(--primary-color);
  }
`;

const FooterTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 2px;
    background-color: var(--primary-color);
    
    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterList = styled.ul`
  margin: 0;
  padding: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 10px;
  
  a {
    color: #ccc;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    color: var(--primary-color);
  }
`;

const InnLink = styled.a`
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 14px;
  
  &:hover {
    color: var(--primary-color-hover);
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  svg {
    width: 20px;
    height: 20px;
    color: var(--light-color);
  }
  
  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #333;
  color: #888;
  font-size: 14px;
`;

const CompanyInfo = styled.div`
  margin-top: 0;
`;

const CompanyName = styled.div`
  color: #888;
  margin-bottom: 15px;
  font-size: 14px;
`;

const CompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CompanyBlock = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 12px 15px;
  border-radius: 8px;
  
  p {
    margin: 0;
    color: #ccc;
    font-size: 14px;
    line-height: 1.4;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterColumn>
            <FooterLogo>
              ProTech<span>Moto</span>
            </FooterLogo>
            <p>Официальный импортер мотоциклов Kawasaki в России. Продажа и обслуживание мотоциклов.</p>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Информация</FooterTitle>
            <FooterList>
              <FooterListItem><a href="#advantages">О нас</a></FooterListItem>
              <FooterListItem><a href="#cases">Кейсы</a></FooterListItem>
              <FooterListItem><a href="#reviews">Отзывы</a></FooterListItem>
            </FooterList>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Контакты</FooterTitle>
            <ContactInfo>
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-3,3.41A19,19,0,0,0,18.53,21.91l.38,0a3,3,0,0,0,2-.76,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.44,13Zm.5,6a1,1,0,0,1-.34.75,1.05,1.05,0,0,1-.82.25A17,17,0,0,1,4.07,5.22a1.09,1.09,0,0,1,.25-.82,1,1,0,0,1,.75-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.57-.52l.62-1.4a13.69,13.69,0,0,0,1.58.46q.4.09.81.15a1,1,0,0,1,.79,1Z" />
              </svg>
              <a href="tel:+79203383324">+7 (920) 338-33-24</a>
            </ContactInfo>
            <ContactInfo>
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z" />
              </svg>
              <a href="mailto:info@protechmoto.ru">info@protechmoto.ru</a>
            </ContactInfo>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Реквизиты</FooterTitle>
            <CompanyInfo>
              <CompanyBlock>
                <p>ООО "Новые решения"</p>
                <InnLink 
                  href="/images/Реквизиты Новые решения_Точка.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  ИНН: 6732243595
                </InnLink>
              </CompanyBlock>
            </CompanyInfo>
          </FooterColumn>
        </FooterContent>

        <Copyright>
          &copy; {new Date().getFullYear()} ProTechMoto. Все права защищены.
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer; 