import React, { useState, useEffect } from 'react';
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
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }

  span {
    color: var(--primary-color);
  }
`;

const Nav = styled.nav`
  @media (max-width: 992px) {
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

const MobileNav = styled.nav<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  background-color: var(--light-color);
  padding: 80px 10px 20px;
  box-shadow: -4px 0 6px rgba(0, 0, 0, 0.1);
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform 0.3s ease-in-out;
  z-index: 998;
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    display: flex;
  }
`;

const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;
  padding: 0 10px;
  flex: 1;
`;

const MobileContactBlock = styled.div`
  padding: 20px 10px;
  border-top: 1px solid #eee;
  text-align: left;
`;

const MobileContactLabel = styled.p`
  color: var(--text-color);
  font-size: 14px;
  margin-bottom: 8px;
`;

const MobileContactNumber = styled.a`
  color: #196dff;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &:hover {
    color: #2563eb;
  }
`;

const MobileNavItem = styled.li`
  font-size: 20px;
  font-weight: 500;
  color: var(--text-color);
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    display: block;
    width: 100%;
    padding-left: 5px;

    &:hover {
      color: var(--primary-color);
    }
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease-in-out;
  z-index: 997;

  @media (max-width: 992px) {
    display: block;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: var(--secondary-color);
  cursor: pointer;
  padding: 5px;
  z-index: 1000;

  @media (max-width: 992px) {
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
   
  @media (max-width: 992px) {
    display: none;
  }
`;

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const whatsappMessage = "Здравствуйте, интересует каталог мотоциклов Kawasaki";
  const whatsappLink = `https://wa.me/79203383324?text=${encodeURIComponent(whatsappMessage)}`;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    closeMobileMenu();
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  return (
    <HeaderContainer>
      <div className="container">
        <HeaderInner>
          <Logo onClick={scrollToTop}>
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
            <LottieWrapper as="a" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Lottie animationData={JumpWhatsApp} loop={true} style={{ width: '100%', height: '100%' }} />
            </LottieWrapper>
            <ContactButton href={whatsappLink} target="_blank" rel="noopener noreferrer">+7 920 338-33-24</ContactButton>
          </div>
          <MobileMenuButton 
            onClick={toggleMobileMenu} 
            aria-label="Меню"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </HeaderInner>
      </div>
      <Overlay isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />
      <MobileNav isOpen={isMobileMenuOpen}>
        <MobileNavList>
          <MobileNavItem><a href="#catalog" onClick={handleNavLinkClick}>Каталог</a></MobileNavItem>
          <MobileNavItem><a href="#advantages" onClick={handleNavLinkClick}>Преимущества</a></MobileNavItem>
          <MobileNavItem><a href="#cases" onClick={handleNavLinkClick}>Кейсы</a></MobileNavItem>
          <MobileNavItem><a href="#reviews" onClick={handleNavLinkClick}>Отзывы</a></MobileNavItem>
        </MobileNavList>
        <MobileContactBlock>
          <MobileContactLabel>Позвоните нам</MobileContactLabel>
          <MobileContactNumber href={whatsappLink} target="_blank" rel="noopener noreferrer">+7 920 338-33-24</MobileContactNumber>
        </MobileContactBlock>
      </MobileNav>
    </HeaderContainer>
  );
};

export default Header; 