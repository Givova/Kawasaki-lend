import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background-image: url('/images/baner.jpg'); /* Ваше фоновое изображение */
  background-size: cover;
  background-position: center 100%; 
  background-repeat: no-repeat;
  background-attachment: fixed; /* Эффект параллакса */
  color: var(--light-color);
  padding: 200px 0 170px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    background-position: 80% center;
    background-attachment: scroll;
    padding: 150px 0 120px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный оверлей */
    z-index: 0;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
  z-index: 1;
  
  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
  
  span {
    color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
  color: #ccc;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }
`;

const HeroImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  z-index: 1;
  
  img {
    max-width: 100%;
    object-fit: contain;
    border-radius: 8px;
  }
`;

const WhatsAppButton = styled.a`
  display: inline-block;
  background-color: #196dff;
  color: var(--light-color);
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
  }
`;

const CatalogButton = styled.a`
  display: inline-block;
  background-color: transparent;
  color: var(--light-color);
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: 500;
  border: 2px solid var(--light-color);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--light-color);
    color: var(--secondary-color);
    transform: translateY(-2px);
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <div className="container">
        <HeroContainer>
          <HeroContent>
            <HeroTitle>
              Мотоциклы <span>Kawasaki</span> - легендарное качество
            </HeroTitle>
            <HeroSubtitle>
              Kawasaki - это более 100 лет инноваций и страсти к мотоциклам. Выберите свой идеальный мотоцикл из линейки легендарного японского бренда.
            </HeroSubtitle>
            <ButtonGroup>
              <WhatsAppButton href="https://wa.me/79203383324?text=Здравствуйте,%20интересует%20каталог%20мотоциклов%20Kawasaki">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.4054 3.5875C18.1607 1.3425 15.1714 0.0525 11.9946 0.0525C5.4375 0.0525 0.0964286 5.3925 0.0964286 12C0.0964286 14.1 0.6375 16.1475 1.6607 17.9475L0 24L6.2089 22.3725C7.94464 23.3025 9.95357 23.7975 11.9946 23.7975C18.5518 23.7975 24 18.4575 24 11.85C24 8.6325 22.65 5.8325 20.4054 3.5875ZM11.9946 21.7875C10.2214 21.7875 8.4482 21.315 6.9375 20.4675L6.58393 20.2575L2.85 21.195L3.80893 17.565L3.57321 17.1975C2.63036 15.63 2.11607 13.8525 2.11607 12C2.11607 6.4575 6.50357 2.0625 12 2.0625C14.6571 2.0625 17.1536 3.12 19.0286 5.01C20.9036 6.9 21.9804 9.3975 21.9804 11.85C21.9804 17.3925 17.4857 21.7875 11.9946 21.7875ZM17.4321 14.5275C17.1429 14.3775 15.675 13.6575 15.4286 13.5825C15.1714 13.5 15 13.4625 14.7857 13.755C14.5714 14.0475 14.0036 14.7 13.8321 14.9175C13.6607 15.1275 13.4893 15.15 13.2 15C11.3786 14.0925 10.1893 13.3875 8.99464 11.34C8.67321 10.8 9.3 10.8375 9.88393 9.69C9.96429 9.4725 9.92678 9.2925 9.87321 9.1425C9.81964 8.9925 9.18214 7.53 8.93036 6.9375C8.67857 6.3675 8.42679 6.45 8.25536 6.45C8.08393 6.45 7.875 6.4125 7.66071 6.4125C7.44643 6.4125 7.1143 6.4725 6.85714 6.7575C6.6 7.0425 5.84464 7.7625 5.84464 9.225C5.84464 10.6875 6.89464 12.1125 7.03393 12.33C7.18929 12.54 9.16071 15.555 12.1607 16.8375C14.1214 17.6925 14.9143 17.7675 15.9 17.625C16.4893 17.5425 17.6893 16.9125 17.9411 16.2075C18.1929 15.5025 18.1929 14.91 18.1393 14.8125C18.0857 14.7075 17.8714 14.6475 17.5821 14.4975L17.4321 14.5275Z" />
                </svg>
                Получить каталог в WhatsApp
              </WhatsAppButton>
            </ButtonGroup>
          </HeroContent>
          <HeroImageWrapper>
            
          </HeroImageWrapper>
        </HeroContainer>
      </div>
    </HeroSection>
  );
};

export default Hero; 