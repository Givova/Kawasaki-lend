import React, { useState } from 'react';
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

const Nav = styled.nav<{ isOpen: boolean }>`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    max-width: 80%;
    height: 100%;
    background-color: var(--light-color);
    padding-top: 80px;
    z-index: 999;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-out;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    width: 100%;
    text-align: left;
    padding: 20px 30px;
    flex-grow: 1;
  }
`;

const NavItem = styled.li`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color);
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }

  a {
    display: block;
    padding: 10px 0;
    font-size: 20px ;
    font-weight: 600;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 4px 14px;
  background: none;
  color: #196dff;
  border-radius: 30px;
  font-weight: 600;
  font-size: 18px;
  transition: color 0.3s;
  text-decoration: none;
  margin-left: 8px;
  border: none;
  box-shadow: none;
  &:hover {
    color: #2563eb;
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    display: none;
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
  cursor: pointer;
  z-index: 1001;
  outline: none;
  -webkit-tap-highlight-color: transparent;

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
    display: none;
  }
`;

const MenuDivider = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: calc(100% - 60px);
    height: 1px;
    background-color: #e0e0e0;
    margin: 20px 0;
  }
`;

const MenuContactInfo = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 30px 20px;
    width: 100%;
    box-sizing: border-box;
  }
`;

const ContactLabel = styled.p`
  font-size: 18px;
  color: var(--primary-color);
  margin-bottom: 5px;
`;

const PhoneNumberLink = styled.a`
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <HeaderContainer>
      <div className="container">
        <HeaderInner>
          <Logo>
            ProTech<span>Moto</span>
          </Logo>
          <Nav isOpen={isMenuOpen}>
            <NavList>
              <NavItem onClick={closeMenu}><a href="#catalog">Каталог</a></NavItem>
              <NavItem onClick={closeMenu}><a href="#advantages">Преимущества</a></NavItem>
              {/* <NavItem onClick={closeMenu}><a href="#cases">Кейсы</a></NavItem> */}
              <NavItem onClick={closeMenu}><a href="#reviews">Отзывы</a></NavItem>
            </NavList>
            <MenuDivider />
            <MenuContactInfo>
              <ContactLabel>Позвоните нам</ContactLabel>
              <PhoneNumberLink href="tel:+79203383324">+7 920 338-33-24</PhoneNumberLink>
            </MenuContactInfo>
          </Nav>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <LottieWrapper>
              <Lottie animationData={JumpWhatsApp} loop={true} style={{ width: '100%', height: '100%' }} />
            </LottieWrapper>
            <ContactButton href="tel:+79203383324">+7 920 338-33-24</ContactButton>
          </div>
          <MobileMenuButton onClick={toggleMenu} aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{width: '30px', height: '30px'}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{width: '30px', height: '30px'}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </MobileMenuButton>
        </HeaderInner>
      </div>
    </HeaderContainer>
  );
};

export default Header; 