import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { reviews } from './reviewsData';

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
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  padding: 0 20px;
`;

const ReviewsWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0;
  position: relative;
`;

const ReviewsSlider = styled.div<{ offset: number }>`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${props => props.offset}px);
  gap: 30px;
`;

const ReviewCard = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  flex: 0 0 calc(50% - 15px);
  min-width: calc(50% - 15px);
  box-sizing: border-box;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    min-width: 100%;
    padding: 20px;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const AvitoBadge = styled.a`
  position: absolute;
  top: 25px;
  right: 15px;
  background: linear-gradient(135deg, #00AAFF 0%, #0088FF 100%);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 136, 255, 0.3);
  }

  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    padding: 8px;
    border-radius: 50%;
    
    span {
      display: none;
    }
    
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const DefaultAvatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color) 0%, #38b2ac 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  margin-top: -15px;
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

const ReviewInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 3px;
  color: var(--text-color);
`;

const ReviewDate = styled.p`
  font-size: 13px;
  color: var(--dark-gray);
`;

const ReviewRating = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const Star = styled.span<{ filled: boolean }>`
  color: ${props => props.filled ? '#FFD700' : '#e0e0e0'};
  font-size: 16px;
  margin-right: 2px;
`;

const ReviewText = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: var(--text-color);
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProductName = styled.div`
  font-size: 13px;
  color: var(--dark-gray);
  padding-top: 12px;
  border-top: 1px solid #eee;
`;

const ReplyContainer = styled.div`
  margin-top: 12px;
  padding: 12px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const ReplyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 13px;
  
  span:first-child {
    font-weight: 600;
    color: var(--primary-color);
  }
  
  span:last-child {
    color: var(--dark-gray);
  }
`;

const ReplyText = styled.p`
  font-size: 13px;
  color: var(--text-color);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
`;

const SliderButton = styled.button<{ direction?: 'prev' | 'next' }>`
  background-color: white;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      background-color: white;
      color: var(--primary-color);
    }
  }
  
  &::before {
    content: ${props => props.direction === 'prev' ? '"←"' : '"→"'};
    font-size: 20px;
  }
`;

const Reviews: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getItemsPerSlide = () => {
    if (window.innerWidth <= 768) return 1;
    return 2;
  };

  const totalSlides = Math.ceil(reviews.length / getItemsPerSlide());

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
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

    setTouchStart(0);
    setTouchEnd(0);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star key={index} filled={index < rating}>★</Star>
    ));
  };

  const getInitialLetter = (name: string): string => {
    return name.charAt(0).toUpperCase();
  };

  const getSlideOffset = () => {
    if (!sliderRef.current) return 0;
    const itemsPerSlide = getItemsPerSlide();
    const containerWidth = sliderRef.current.offsetWidth;
    const itemWidth = (containerWidth - (itemsPerSlide - 1) * 30) / itemsPerSlide;
    return -(currentSlide * (itemWidth + 30));
  };

  // Автоматическое переключение слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <ReviewsSection id="reviews">
      <div className="container">
        <SectionTitle>
          Узнайте, что говорят о нас владельцы мотоциклов <span>Kawasaki</span>
        </SectionTitle>
        <SectionSubtitle>
          Здесь собраны отзывы о наших услугах и работе с нами
        </SectionSubtitle>
        <ReviewsContainer>
          <ReviewsWrapper
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <ReviewsSlider ref={sliderRef} offset={getSlideOffset()}>
              {reviews.map((review) => (
                <ReviewCard key={review.id}>
                  <AvitoBadge 
                    href="https://www.avito.ru/brands/i312214092/all/mototsikly_i_mototehnika?gdlkerfdnwq=101&page_from=from_item_card&iid=7337863272&sellerId=0b17a20654f8f463808c4b91f3e7323c" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img src="/images/avito.png" alt="Avito" />
                    <span> Avito</span>
                  </AvitoBadge>
                  <ReviewHeader>
                    <DefaultAvatar>
                      {getInitialLetter(review.author)}
                    </DefaultAvatar>
                    <ReviewInfo>
                      <AuthorName>{review.author}</AuthorName>
                      <ReviewDate>{review.date}</ReviewDate>
                    </ReviewInfo>
                  </ReviewHeader>
                  <ReviewRating>
                    {renderStars(review.rating)}
                  </ReviewRating>
                  <ReviewText>{review.text}</ReviewText>
                  {review.productName && (
                    <ProductName>{review.productName}</ProductName>
                  )}
                  {review.reply && (
                    <ReplyContainer>
                      <ReplyHeader>
                        <span>{review.reply.author}</span>
                        <span>{review.reply.date}</span>
                      </ReplyHeader>
                      <ReplyText>{review.reply.text}</ReplyText>
                    </ReplyContainer>
                  )}
                </ReviewCard>
              ))}
            </ReviewsSlider>
          </ReviewsWrapper>
        </ReviewsContainer>

        <SliderControls>
          <SliderButton
            direction="prev"
            onClick={prevSlide}
            disabled={isTransitioning}
          />
          <SliderButton
            direction="next"
            onClick={nextSlide}
            disabled={isTransitioning}
          />
        </SliderControls>
      </div>
    </ReviewsSection>
  );
};

export default Reviews; 