import React from 'react';
import styled from 'styled-components';
import { ProductModel } from '../../types';

const CatalogSection = styled.section`
  padding: 80px 0;
  background-color: var(--gray-color);
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  
  span {
    color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  text-align: center;
  color: var(--dark-gray);
  margin-bottom: 50px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  background-color: var(--light-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProductCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProductInfo = styled.div`
  padding: 20px;
`;

const ProductName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  color: var(--dark-gray);
  margin-bottom: 15px;
  line-height: 1.5;
`;

const ProductPrice = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 15px;
`;

const ProductFeatures = styled.ul`
  margin-bottom: 20px;
  
  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 5px;
    color: var(--dark-gray);
    
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 8px;
      width: 8px;
      height: 8px;
      background-color: var(--primary-color);
      border-radius: 50%;
    }
  }
`;

const MoreInfoButton = styled.a`
  display: inline-block;
  background-color: var(--primary-color);
  color: var(--light-color);
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #00a844;
  }
`;

const CatalogButtonWrapper = styled.div`
  text-align: center;
`;

const CatalogButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: var(--light-color);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 18px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color);
    color: var(--light-color);
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const productsData: ProductModel[] = [
  {
    id: '1',
    name: 'KAYO K2 Enduro',
    description: 'Надежный эндуро мотоцикл для бездорожья и повседневного использования.',
    price: 'от 169 900 ₽',
    features: [
      'Объем двигателя: 249 см³',
      'Мощность: 22 л.с.',
      'Трансмиссия: 6-ступенчатая',
      'Вес: 115 кг'
    ],
    image: '/placeholder-k2.webp'
  },
  {
    id: '2',
    name: 'KAYO T4 Motard',
    description: 'Супермото для города и трека, сочетающий управляемость и мощность.',
    price: 'от 209 900 ₽',
    features: [
      'Объем двигателя: 249 см³',
      'Мощность: 25 л.с.',
      'Трансмиссия: 6-ступенчатая',
      'Вес: 120 кг'
    ],
    image: '/placeholder-t4.webp'
  },
  {
    id: '3',
    name: 'KAYO K6 Adventure',
    description: 'Универсальный туристический эндуро для дальних путешествий.',
    price: 'от 249 900 ₽',
    features: [
      'Объем двигателя: 450 см³',
      'Мощность: 45 л.с.',
      'Трансмиссия: 6-ступенчатая',
      'Вес: 150 кг'
    ],
    image: '/placeholder-k6.webp'
  }
];

const Catalog: React.FC = () => {
  return (
    <CatalogSection id="catalog">
      <div className="container">
        <SectionTitle>Каталог <span>мотоциклов KAYO</span></SectionTitle>
        <SectionSubtitle>
          В нашем каталоге более 30 моделей мотоциклов KAYO для различных целей и условий эксплуатации
        </SectionSubtitle>
        <CatalogGrid>
          {productsData.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage>
                <img src={product.image} alt={product.name} />
              </ProductImage>
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductFeatures>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ProductFeatures>
                <MoreInfoButton href="https://wa.me/79203083324?text=Здравствуйте,%20хочу%20узнать%20больше%20о%20мотоцикле%20KAYO%20${encodeURIComponent(product.name)}">Узнать больше</MoreInfoButton>
              </ProductInfo>
            </ProductCard>
          ))}
        </CatalogGrid>
        <CatalogButtonWrapper>
          <CatalogButton href="https://wa.me/79203083324?text=Здравствуйте,%20можете%20предоставить%20актуальный%20каталог">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.4054 3.5875C18.1607 1.3425 15.1714 0.0525 11.9946 0.0525C5.4375 0.0525 0.0964286 5.3925 0.0964286 12C0.0964286 14.1 0.6375 16.1475 1.6607 17.9475L0 24L6.2089 22.3725C7.94464 23.3025 9.95357 23.7975 11.9946 23.7975C18.5518 23.7975 24 18.4575 24 11.85C24 8.6325 22.65 5.8325 20.4054 3.5875ZM11.9946 21.7875C10.2214 21.7875 8.4482 21.315 6.9375 20.4675L6.58393 20.2575L2.85 21.195L3.80893 17.565L3.57321 17.1975C2.63036 15.63 2.11607 13.8525 2.11607 12C2.11607 6.4575 6.50357 2.0625 12 2.0625C14.6571 2.0625 17.1536 3.12 19.0286 5.01C20.9036 6.9 21.9804 9.3975 21.9804 11.85C21.9804 17.3925 17.4857 21.7875 11.9946 21.7875ZM17.4321 14.5275C17.1429 14.3775 15.675 13.6575 15.4286 13.5825C15.1714 13.5 15 13.4625 14.7857 13.755C14.5714 14.0475 14.0036 14.7 13.8321 14.9175C13.6607 15.1275 13.4893 15.15 13.2 15C11.3786 14.0925 10.1893 13.3875 8.99464 11.34C8.67321 10.8 9.3 10.8375 9.88393 9.69C9.96429 9.4725 9.92678 9.2925 9.87321 9.1425C9.81964 8.9925 9.18214 7.53 8.93036 6.9375C8.67857 6.3675 8.42679 6.45 8.25536 6.45C8.08393 6.45 7.875 6.4125 7.66071 6.4125C7.44643 6.4125 7.1143 6.4725 6.85714 6.7575C6.6 7.0425 5.84464 7.7625 5.84464 9.225C5.84464 10.6875 6.89464 12.1125 7.03393 12.33C7.18929 12.54 9.16071 15.555 12.1607 16.8375C14.1214 17.6925 14.9143 17.7675 15.9 17.625C16.4893 17.5425 17.6893 16.9125 17.9411 16.2075C18.1929 15.5025 18.1929 14.91 18.1393 14.8125C18.0857 14.7075 17.8714 14.6475 17.5821 14.4975L17.4321 14.5275Z" />
            </svg>
            Запросить каталог в WhatsApp
          </CatalogButton>
        </CatalogButtonWrapper>
      </div>
    </CatalogSection>
  );
};

export default Catalog; 