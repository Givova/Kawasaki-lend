import React from 'react';
import styled from 'styled-components';

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
  padding: 15px 0;
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
  padding: 8px 20px;
  background-color: var(--primary-color);
  color: var(--light-color);
  border-radius: 30px;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00a844;
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

  @media (max-width: 768px) {
    display: block;
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
            <ContactButton href="tel:+78001234567">+7 800 123-45-67</ContactButton>
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