import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--secondary-color);
  color: var(--light-color);
  padding: 50px 0 30px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px;
  
  @media (max-width: 768px) {
    text-align: center;
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

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterColumn>
            <FooterLogo>
              Kawasaki<span>Moto</span>
            </FooterLogo>
            <p>Официальный дилер мотоциклов Kawasaki в России. Продажа и обслуживание мотоциклов.</p>
            <SocialLinks>
              <SocialLink href="#" aria-label="Вконтакте">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2ZM18.15 16.27H16.69C16.14 16.27 15.97 15.82 14.86 14.72C13.86 13.77 13.49 13.64 13.27 13.64C12.93 13.64 12.83 13.74 12.83 14.17V15.62C12.83 16.08 12.71 16.27 11.83 16.27C10.11 16.27 8.22 15.24 6.92 13.38C5.14 10.82 4.63 8.85 4.63 8.34C4.63 8.07 4.73 7.82 5.19 7.82H6.66C7.14 7.82 7.29 8.03 7.44 8.51C8.24 10.89 9.6 12.95 10.16 12.95C10.37 12.95 10.47 12.85 10.47 12.35V9.77C10.42 8.84 9.97 8.78 9.97 8.32C9.97 8.11 10.14 7.89 10.41 7.89H12.66C13.07 7.89 13.21 8.08 13.21 8.54V11.86C13.21 12.28 13.38 12.42 13.5 12.42C13.71 12.42 13.9 12.28 14.28 11.91C15.41 10.66 16.2 8.77 16.2 8.77C16.3 8.56 16.48 8.37 16.96 8.37H18.42C19.05 8.37 19.14 8.63 19.05 8.95C18.87 9.74 17.25 11.99 17.25 11.99C17.11 12.22 17.04 12.34 17.25 12.6C17.4 12.8 17.9 13.23 18.22 13.59C18.83 14.26 19.29 14.83 19.43 15.26C19.56 15.7 19.33 16.27 18.15 16.27Z" />
                </svg>
              </SocialLink>
              <SocialLink href="#" aria-label="Telegram">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22,6.55a.5.5,0,0,0-.33-.44,1.06,1.06,0,0,0-.65,0A22.47,22.47,0,0,0,3,18.1a1,1,0,0,0,.18.87A.94.94,0,0,0,4,19.4a.49.49,0,0,0,.24-.06,15.9,15.9,0,0,1,6.24-1,16.5,16.5,0,0,1,5.47.93,5.32,5.32,0,0,0,1.12.33,1.29,1.29,0,0,0,1.29-.37A17.52,17.52,0,0,0,22,6.55ZM19,17.34a.37.37,0,0,1-.33.27,3.12,3.12,0,0,1-.83-.26,18.5,18.5,0,0,0-6.08-1,17.62,17.62,0,0,0-6.86,1.08l-.19.06a20.7,20.7,0,0,1,2.14-5.58A22.84,22.84,0,0,1,19,7.36a.4.4,0,0,1,.36.4A16.38,16.38,0,0,1,19,17.34Z" />
                  <path d="M10.85,15.28A1,1,0,0,0,12,14.48l1.72-3.52a.47.47,0,0,0-.65-.63L9.47,12.26a1,1,0,0,0-.15,1.54Z" />
                </svg>
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,.42-2.27C22,15.64,22,15.26,22,12S22,8.36,21.93,7.07Zm-2.54,8A5.73,5.73,0,0,1,19,16.87,3.86,3.86,0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35c-.79,0-1,0-3.06,0s-2.27,0-3.06,0A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81c0-.79,0-1,0-3.06s0-2.27,0-3.06A5.49,5.49,0,0,1,5,7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h0c.79,0,1,0,3.06,0s2.27,0,3.06,0A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81c0,.79,0,1,0,3.06S19.42,14.27,19.39,15.06Zm-1.6-7.44a2.38,2.38,0,0,0-1.41-1.41A4,4,0,0,0,15,6c-.78,0-1,0-3,0s-2.22,0-3,0a4,4,0,0,0-1.38.26A2.38,2.38,0,0,0,6.21,7.62,4.27,4.27,0,0,0,6,9c0,.78,0,1,0,3s0,2.22,0,3a4.27,4.27,0,0,0,.26,1.38,2.38,2.38,0,0,0,1.41,1.41A4.27,4.27,0,0,0,9,18.05H9c.78,0,1,0,3,0s2.22,0,3,0a4,4,0,0,0,1.38-.26,2.38,2.38,0,0,0,1.41-1.41A4,4,0,0,0,18.05,15c0-.78,0-1,0-3s0-2.22,0-3A3.78,3.78,0,0,0,17.79,7.62ZM12,15.82A3.81,3.81,0,0,1,8.19,12h0A3.82,3.82,0,1,1,12,15.82Zm4-6.89a.9.9,0,0,1,0-1.79h0a.9.9,0,0,1,0,1.79Z" />
                </svg>
              </SocialLink>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Модели</FooterTitle>
            <FooterList>
              <FooterListItem><a href="#catalog">Спортивные</a></FooterListItem>
              <FooterListItem><a href="#catalog">Туристические</a></FooterListItem>
              <FooterListItem><a href="#catalog">Стритфайтеры</a></FooterListItem>
              <FooterListItem><a href="#catalog">Эндуро</a></FooterListItem>
            </FooterList>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Информация</FooterTitle>
            <FooterList>
              <FooterListItem><a href="#advantages">О нас</a></FooterListItem>
              <FooterListItem><a href="#cases">Кейсы</a></FooterListItem>
              <FooterListItem><a href="#reviews">Отзывы</a></FooterListItem>
              <FooterListItem><a href="#">Доставка и оплата</a></FooterListItem>
            </FooterList>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Контакты</FooterTitle>
            <ContactInfo>
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-3,3.41A19,19,0,0,0,18.53,21.91l.38,0a3,3,0,0,0,2-.76,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.44,13Zm.5,6a1,1,0,0,1-.34.75,1.05,1.05,0,0,1-.82.25A17,17,0,0,1,4.07,5.22a1.09,1.09,0,0,1,.25-.82,1,1,0,0,1,.75-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.57-.52l.62-1.4a13.69,13.69,0,0,0,1.58.46q.4.09.81.15a1,1,0,0,1,.79,1Z" />
              </svg>
              <a href="tel:+79203083324">+7 (920) 308-33-24</a>
            </ContactInfo>
            <ContactInfo>
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z" />
              </svg>
              <a href="mailto:info@kawasaki.ru">info@kawasaki.ru</a>
            </ContactInfo>
            <ContactInfo>
              <svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z" />
              </svg>
              <span>214012, г. Смоленск, Ново-Московская улица, 2/8</span>
            </ContactInfo>
          </FooterColumn>
        </FooterContent>

        <Copyright>
          &copy; {new Date().getFullYear()} Kawasaki. Все права защищены.
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer; 