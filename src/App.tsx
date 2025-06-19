import React, { Component, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Advantages';
import Catalog from './components/Catalog';
import CatalogRequest from './components/CatalogRequest';
import Cases from './components/Cases';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('Error:', error);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '20px', 
          textAlign: 'center',
          color: 'var(--text-color)'
        }}>
          <h1>Что-то пошло не так</h1>
          <p>Пожалуйста, обновите страницу или попробуйте позже</p>
        </div>
      );
    }

    return this.props.children;
  }
}

const App = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <Helmet>
        <title>Kawasaki Moto - Официальный дилер мотоциклов Kawasaki</title>
        <meta name="description" content="Официальный дилер мотоциклов Kawasaki в России. Широкий выбор моделей, гарантия качества, сервисное обслуживание." />
        <meta name="keywords" content="Kawasaki, мотоциклы, дилер, официальный дилер, мотоциклы Kawasaki" />
        <link rel="canonical" href="https://kawasaki-moto.ru" />
      </Helmet>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <Process />
        <Catalog />
        <Cases />
        <Reviews />
        <CatalogRequest />
      </main>
      <Footer />
    </ErrorBoundary>
  );
};

export default App;
