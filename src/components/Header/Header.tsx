import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import JumpWhatsApp from '../../assets/Animation/Jump-WhatsApp.json';

const HeaderContainer = styled.header`
  background-color: var(--light-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 0;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: var(--secondary-color);

  span {
    color: var(--primary-color);
  }
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.li`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-color);
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 4px 14px;
  background: none;
  color: var(--primary-color);
  border-radius: 30px;
  font-weight: 600;
  font-size: 18px;
  transition: color 0.3s;
  text-decoration: none;
  margin-left: 8px;
  border: none;
  box-shadow: none;
  &:hover {
    color: #007d2f;
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 15px;
    padding: 2px 8px;
  }
`;

const ShopButton = styled.a`
  display: inline-block;
  margin-left: 16px;
  padding: 8px 20px;
  background-color: var(--light-color);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: var(--primary-color);
    color: var(--light-color);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: var(--secondary-color);

  @media (max-width: 768px) {
    display: block;
  }
`;

const LottieWrapper = styled.div`
  width: 62px;
  height: 62px;
  min-width: 62px;
  min-height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border-radius: 50%;
  box-shadow: none;
  margin-right: -20px;
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    min-width: 36px;
    min-height: 36px;
    margin-right: 2px;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <HeaderInner>
          <Logo>
            ProTech<span>Moto</span>
          </Logo>
          <Nav>
            <NavList>
              <NavItem><a href="#catalog">Каталог</a></NavItem>
              <NavItem><a href="#advantages">Преимущества</a></NavItem>
              <NavItem><a href="#cases">Кейсы</a></NavItem>
              <NavItem><a href="#reviews">Отзывы</a></NavItem>
            </NavList>
          </Nav>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <LottieWrapper>
              <Lottie animationData={JumpWhatsApp} loop={true} style={{ width: '100%', height: '100%' }} />
            </LottieWrapper>
            <ContactButton href="tel:+79203083324">+7 920 308-33-24</ContactButton>
          </div>
          <MobileMenuButton aria-label="Меню">
            ☰
          </MobileMenuButton>
        </HeaderInner>
      </div>
    </HeaderContainer>
  );
};

export default Header; 