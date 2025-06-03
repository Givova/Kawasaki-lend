import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Catalog from './components/Catalog';
import CatalogRequest from './components/CatalogRequest';
import Cases from './components/Cases';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Catalog />
        <Cases />
        <Reviews />
        <CatalogRequest />
      </main>
      <Footer />
    </>
  );
};

export default App;
