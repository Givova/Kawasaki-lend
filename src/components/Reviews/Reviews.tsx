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
  padding: 0;
`;

const ReviewsWrapper = styled.div`
  overflow: hidden;
  padding: 0;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
  border-radius: 15px;
  @media (max-width: 600px) {
    padding: 20px 0;
  }
`;

const ReviewsSlider = styled.div<{ offset: number; count: number }>`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${props => props.offset}px);
  ${props => props.count === 1 && 'justify-content: center;'}
  width: 100%;
`;

const ReviewCard = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  flex: 0 0 100%;
  width: 100%;
  min-width: 100%;
  box-sizing: border-box;
  margin-right: 0;
  margin-left: 0;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  @media (min-width: 768px) {
    padding: 35px;
  }
  @media (max-width: 480px) {
    padding: 15px 15px;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
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
  word-break: break-word;
  
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
    author: 'Александр К.',
    date: '15.03.2024',
    rating: 5,
    text: 'Приобрел Kawasaki Ninja 400 в этом салоне. Отличный сервис, профессиональные консультации и быстрая доставка. Мотоцикл превзошел все ожидания - идеальное сочетание мощности и управляемости.',
    source: 'vk',
    sourceUrl: '#'
  },
  {
    id: '2',
    author: 'Елена М.',
    date: '10.03.2024',
    rating: 5,
    text: 'Купила Kawasaki Versys 650 для путешествий. Персонал помог подобрать идеальную модель, все документы оформили быстро. Мотоцикл просто замечательный - комфортный и надежный.',
    source: 'telegram',
    sourceUrl: '#'
  },
  {
    id: '3',
    author: 'Дмитрий В.',
    date: '05.03.2024',
    rating: 5,
    text: 'Обратился за Kawasaki Z900. Отличный выбор моделей, грамотные консультации и приятные цены. Мотоцикл просто супер - мощный, стильный и с отличной электроникой.',
    source: 'instagram',
    sourceUrl: '#'
  }
];

const Reviews: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const updateWidth = () => {
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth;
      return width;
    }
    return 0;
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % reviewsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} filled={i < rating}>★</Star>
    ));
  };

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;

      if (isLeftSwipe) {
        nextSlide();
      }
      if (isRightSwipe) {
        prevSlide();
      }

      setTouchStart(null);
      setTouchEnd(null);
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('touchstart', handleTouchStart);
      slider.addEventListener('touchmove', handleTouchMove);
      slider.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (slider) {
        slider.removeEventListener('touchstart', handleTouchStart);
        slider.removeEventListener('touchmove', handleTouchMove);
        slider.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [touchStart, touchEnd]);

  const getInitialLetter = (name: string): string => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <ReviewsSection id="reviews">
      <div className="container">
        <SectionTitle>Отзывы <span>наших клиентов</span></SectionTitle>
        <SectionSubtitle>
          Узнайте, что говорят о нас владельцы мотоциклов Kawasaki
        </SectionSubtitle>
        <ReviewsContainer>
          <ReviewsWrapper ref={sliderRef}>
            <ReviewsSlider offset={-currentSlide * updateWidth()} count={reviewsData.length}>
              {reviewsData.map((review) => (
                <ReviewCard key={review.id}>
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
                  {review.source && (
                    <SourceLogo>
                      <a href={review.sourceUrl || '#'} target="_blank" rel="noopener noreferrer">
                        <img src={`/images/${review.source}.svg`} alt={review.source} />
                        <span>{review.source}</span>
                      </a>
                    </SourceLogo>
                  )}
                </ReviewCard>
              ))}
            </ReviewsSlider>
          </ReviewsWrapper>
        </ReviewsContainer>
      </div>
    </ReviewsSection>
  );
};

export default Reviews; 