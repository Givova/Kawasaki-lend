import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ReviewItem } from '../../types';

const ReviewsSection = styled.section`
  padding: 80px 0;
  background-color: var(--light-color);
  overflow: hidden;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  
  span {
    color: var(--primary-color);
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: var(--primary-color);
      border-radius: 2px;
    }
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
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
    padding: 0 20px;
  }
`;

const ReviewsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  padding: 0 20px;
`;

const ReviewsWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
  border-radius: 15px;
`;

const ReviewsSlider = styled.div<{ offset: number; count: number }>`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${props => props.offset}px);
  ${props => props.count === 1 && 'justify-content: center;'}
  padding-left: 5px;
`;

const ReviewCard = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  flex: 0 0 auto;
  width: calc(100% - 20px);
  max-width: 800px;
  box-sizing: border-box;
  margin-right: 15px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
  
  @media (min-width: 768px) {
    width: calc(100% - 20px);
    padding: 35px;
  }
  
  @media (max-width: 480px) {
    padding: 25px;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border: 3px solid white;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const DefaultAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color) 0%, #38b2ac 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: white;
  font-size: 24px;
  font-weight: 500;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const ReviewInfo = styled.div`
  flex: 1;
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const AuthorName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--text-color);
  
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ReviewDate = styled.p`
  font-size: 14px;
  color: var(--dark-gray);
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const ReviewRating = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const Star = styled.span<{ filled: boolean }>`
  color: ${props => props.filled ? '#FFD700' : '#e0e0e0'};
  font-size: 18px;
  margin-right: 2px;
  
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ReviewText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-color);
  margin-bottom: 20px;
  
  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.5;
  }
`;

const SourceLogo = styled.div`
  display: flex;
  align-items: center;
  
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 8px 12px;
    border-radius: 8px;
    background-color: #f8f8f8;
    
    &:hover {
      background-color: #f0f0f0;
    }
  }
  
  img {
    height: 24px;
  }
  
  span {
    font-size: 14px;
    color: var(--dark-gray);
    margin-left: 8px;
  }
  
  @media (max-width: 480px) {
    img {
      height: 20px;
    }
    
    span {
      font-size: 12px;
    }
  }
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 15px;
`;

const SliderButton = styled.button<{ disabled?: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${props => props.disabled ? '#f5f5f5' : 'white'};
  border: 1px solid ${props => props.disabled ? '#e0e0e0' : '#ddd'};
  color: ${props => props.disabled ? '#ccc' : 'var(--text-color)'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.disabled ? 'none' : '0 4px 10px rgba(0, 0, 0, 0.05)'};
  
  &:hover:not(:disabled) {
    background-color: var(--primary-color);
    color: var(--light-color);
    border-color: var(--primary-color);
    transform: translateY(-2px);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
`;

const SliderDot = styled.button<{ active: boolean }>`
  width: ${props => props.active ? '12px' : '10px'};
  height: ${props => props.active ? '12px' : '10px'};
  border-radius: 50%;
  background-color: ${props => props.active ? 'var(--primary-color)' : '#e0e0e0'};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-color)' : '#ccc'};
    transform: ${props => props.active ? 'scale(1.2)' : 'scale(1.1)'};
  }
`;

const reviewsData: ReviewItem[] = [
  {
    id: '1',
    author: 'Дмитрий',
    text: 'Спасибо компании за возможность заказать тягач из Европы, пришёл через месяц, забрал, все отлично. Менеджер подробно ответил на все вопросы, в любое время дня и ночи был на связи, за что отдельное спасибо. Советую к работе.',
    rating: 5,
    date: '22.09.2023',
    link: 'https://www.avito.ru/brands/i312214092/all/mototsikly_i_mototehnika#reviews'
  },
  {
    id: '2',
    author: 'Азамат',
    text: 'Рад что нашел вашу компанию, приобрел тягач SCANIA под заказ из Европы до Ростовской области, пришел ко мне через месяц. Тягач отличный, техническое состояние идеальное, компания не подвела! Большое вам спасибо.',
    rating: 5,
    date: '30.08.2023',
    link: 'https://www.avito.ru/brands/i312214092/all/mototsikly_i_mototehnika#reviews'
  },
  {
    id: '3',
    author: 'максим',
    text: 'Приобретал тягач из Германии через данную компанию, пришёл спустя месяц, в заявленные сроки. Компания отличная, делают свою работу на уровне, всегда обо всём оповещали и ответили на все интересующие вопросы, спасибо!',
    rating: 5,
    date: '14.08.2023',
    link: 'https://www.avito.ru/brands/i312214092/all/mototsikly_i_mototehnika#reviews'
  },
  {
    id: '4',
    author: 'Григорий Румянцев',
    text: 'Заказал в этой компании тягач. Пришёл примерно через месяц, в отличном состоянии, все рабочее, как и рассказывал дилер. Компанией доволен, как и тягачом. Спасибо.',
    rating: 5,
    date: '26.06.2023',
    link: 'https://www.avito.ru/brands/i312214092/all/mototsikly_i_mototehnika#reviews'
  },
  {
    id: '5',
    author: 'Морозова Татьяна',
    text: 'Отличный тягач, компания просто супер! Доставили в отличном состоянии, все хорошо. Спасибо.',
    rating: 5,
    date: '06.06.2023',
    link: 'https://www.avito.ru/brands/i312214092/all/mototsikly_i_mototehnika#reviews'
  }
];

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Определение мобильного устройства
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Обновление ширины слайдера
  useEffect(() => {
    const updateWidth = () => {
      if (cardRef.current) {
        const cardWidth = cardRef.current.clientWidth;
        setSliderWidth(cardWidth + 5);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Обновление смещения при изменении текущего индекса
  useEffect(() => {
    if (currentIndex === 0) {
      setOffset(0);
    } else {
      setOffset(-currentIndex * sliderWidth);
    }
  }, [currentIndex, sliderWidth]);

  const nextSlide = () => {
    if (currentIndex < reviewsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star key={index} filled={index < rating}>★</Star>
    ));
  };

  // Добавляем свайп-жесты для мобильных устройств
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let startX = 0;
    let isDragging = false;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const currentX = e.touches[0].clientX;
      const diff = startX - currentX;

      // Определяем направление свайпа
      if (diff > 50) { // Свайп влево
        nextSlide();
        isDragging = false;
      } else if (diff < -50) { // Свайп вправо
        prevSlide();
        isDragging = false;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchmove', handleTouchMove);
    slider.addEventListener('touchend', handleTouchEnd);

    return () => {
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchmove', handleTouchMove);
      slider.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex]);

  const getInitialLetter = (name: string): string => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <ReviewsSection id="reviews">
      <div className="container">
        <SectionTitle>Отзывы <span>наших клиентов</span></SectionTitle>
        <SectionSubtitle>
          Более 200 положительных отзывов на площадке Авито и в других сервисах
        </SectionSubtitle>

        <ReviewsContainer>
          <ReviewsWrapper ref={sliderRef}>
            <ReviewsSlider offset={offset} count={reviewsData.length}>
              {reviewsData.map((review, index) => (
                <ReviewCard
                  key={review.id}
                  className="review-card"
                  ref={index === 0 ? cardRef : undefined}
                >
                  <ReviewHeader>
                    {review.avatar ? (
                      <Avatar>
                        <img src={review.avatar} alt={review.author} />
                      </Avatar>
                    ) : (
                      <DefaultAvatar>
                        {getInitialLetter(review.author)}
                      </DefaultAvatar>
                    )}
                    <ReviewInfo>
                      <AuthorName>{review.author}</AuthorName>
                      <ReviewDate>{review.date}</ReviewDate>
                    </ReviewInfo>
                  </ReviewHeader>
                  <ReviewRating>
                    {renderStars(review.rating)}
                  </ReviewRating>
                  <ReviewText>{review.text}</ReviewText>
                  <SourceLogo>
                    <a href={review.link} target="_blank" rel="noopener noreferrer">
                      <img src="/avito-logo.webp" alt="Авито" />
                      <span>Отзыв с Авито</span>
                    </a>
                  </SourceLogo>
                </ReviewCard>
              ))}
            </ReviewsSlider>
          </ReviewsWrapper>

          <SliderControls>
            <SliderButton
              onClick={prevSlide}
              disabled={currentIndex === 0}
              aria-label="Предыдущий отзыв"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
              </svg>
            </SliderButton>
            <SliderButton
              onClick={nextSlide}
              disabled={currentIndex === reviewsData.length - 1}
              aria-label="Следующий отзыв"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </SliderButton>
          </SliderControls>

          <SliderDots>
            {reviewsData.map((_, index) => (
              <SliderDot
                key={index}
                active={currentIndex === index}
                onClick={() => goToSlide(index)}
                aria-label={`Перейти к отзыву ${index + 1}`}
              />
            ))}
          </SliderDots>
        </ReviewsContainer>
      </div>
    </ReviewsSection>
  );
};

export default Reviews; 