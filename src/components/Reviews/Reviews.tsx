import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ReviewItem } from '../../types';

const ReviewsSection = styled.section`
  padding: 40px 0;
  background-color: var(--light-color);
  overflow: hidden;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 40px 0;
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
    margin-bottom: 20px;
    padding: 0 20px;
  }
`;

const ReviewsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  @media (min-width: 769px) {
    max-width: 900px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ReviewsWrapper = styled.div`
  overflow: hidden;
  padding: 0;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
  border-radius: 15px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 20px 0;
  }
  @media (max-width: 480px) {
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
    margin-bottom: 5px;
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

const Star = styled.span<{ $filled: boolean }>`
  color: ${props => props.$filled ? '#FFD700' : '#e0e0e0'};
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

const SliderAndControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    padding: 0 20px;
  }
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
  
  @media (max-width: 768px) {
    display: none !important;
  }
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const SliderControl = styled.button<{ $active?: boolean }>`
  width: ${props => props.$active ? '12px' : '10px'};
  height: ${props => props.$active ? '12px' : '10px'};
  border-radius: 50%;
  background-color: ${props => props.$active ? 'var(--primary-color)' : '#e0e0e0'};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.$active ? 'var(--primary-color)' : '#ccc'};
    transform: ${props => props.$active ? 'scale(1.2)' : 'scale(1.1)'};
  }
`;

const reviewsData: ReviewItem[] = [
 
  {
    id: '4',
    author: 'Дмитрий',
    date: '22.09.2023',
    rating: 5,
    text: 'Спасибо компании за возможность заказать тягач из Европы, пришёл через месяц, забрал, все отлично. Менеджер подробно ответил на все вопросы, в любое время дня и ночи был на связи, за что отдельное спасибо. Советую к работе.',
    source: 'Avito',
    sourceUrl: 'https://www.avito.ru/brands/i312214092/all/transport?sellerId=0b17a20654f8f463808c4b91f3e7323c'
  },
  {
    id: '5',
    author: 'Дмитрий',
    date: '16.09.2023',
    rating: 5,
    text: 'Покупал у данной компании тягач. Сразу бросается в глаза профессионализм персонала. Сделали шикарное предложение. Быстро подготовили автомобиль. Доставили в срок. Спасибо.',
    source: 'Avito',
    sourceUrl: 'https://www.avito.ru/brands/i312214092/all/transport?sellerId=0b17a20654f8f463808c4b91f3e7323c'
  },
  {
    id: '6',
    author: 'Азамат',
    date: '30.08.2023',
    rating: 5,
    text: 'Рад что нашел вашу компанию, приобрел тягач SCANIA под заказ из Европы до Ростовской области, пришел ко мне через месяц. Тягач отличный, техническое состояние идеальное, компания не подвела! Большое вам спасибо.',
    source: 'Avito',
    sourceUrl: 'https://www.avito.ru/brands/i312214092/all/transport?sellerId=0b17a20654f8f463808c4b91f3e7323c'
  },
  {
    id: '7',
    author: 'максим',
    date: '14.08.2023',
    rating: 5,
    text: 'Приобретал тягач из Германии через данную компанию, пришёл спустя месяц, в заявленные сроки. Компания отличная, делают свою работу на уровне, всегда обо всём оповещали и ответили на все интересующие вопросы, спасибо!',
    source: 'Avito',
    sourceUrl: 'https://www.avito.ru/brands/i312214092/all/transport?sellerId=0b17a20654f8f463808c4b91f3e7323c'
  },
  {
    id: '8',
    author: 'Григорий Румянцев',
    date: '26.06.2023',
    rating: 5,
    text: 'Заказал в этой компании тягач. Пришёл примерно через месяц, в отличном состоянии, все рабочее, как и рассказывал дилер. Компанией доволен, как и тягачом. Спасибо.',
    source: 'Avito',
    sourceUrl: 'https://www.avito.ru/brands/i312214092/all/transport?sellerId=0b17a20654f8f463808c4b91f3e7323c'
  },
  {
    id: '9',
    author: 'Морозова Татьяна',
    date: '06.06.2023',
    rating: 5,
    text: 'Отличный тягач, компания просто супер! Доставили в отличном состоянии, все хорошо. Спасибо.',
    source: 'Avito',
    sourceUrl: 'https://www.avito.ru/brands/i312214092/all/transport?sellerId=0b17a20654f8f463808c4b91f3e7323c'
  },
  {
    id: '10',
    author: 'Денис',
    date: '26.05.2023',
    rating: 5,
    text: 'Отличный тягач за такую стоимость, доставили в обещанные сроки, все как на фото, спасибо!',
    source: 'Avito',
    sourceUrl: 'https://www.avito.ru/brands/i312214092/all/transport?sellerId=0b17a20654f8f463808c4b91f3e7323c'
  },
  {
    id: '11',
    author: 'Тимур Бекмамбетов',
    date: '17.05.2023',
    rating: 5,
    text: 'Отличный тягач, мощный, доставку из Европы ждал около месяца, в общем недолго, не пришлось доплачивать компании за доставку транспорта и прочих услуг, порадовало конечно. Компания супер, отличные специалисты 👍, ответили на все интересующие вопросы, помогли с покупкой, спасибо.',
    source: 'Avito',
    sourceUrl: 'https://www.avito.ru/brands/i312214092/all/transport?sellerId=0b17a20654f8f463808c4b91f3e7323c'
  },
  {
    id: '12',
    author: 'Анастасия Глинкина',
    date: '03.05.2023',
    rating: 5,
    text: 'Всё отлично) ребята супер профессионалы своего дела. Проконсультировали по интересующим вопросам и помогли. Услуга была оказана в полном объеме.',
    source: 'Avito',
    sourceUrl: 'https://www.avito.ru/brands/i312214092/all/transport?sellerId=0b17a20654f8f463808c4b91f3e7323c'
  },
  {
    id: '13',
    author: 'Максим Глинкин',
    date: '28.04.2023',
    rating: 5,
    text: 'Приятно общаться , много разных услуг , хороший сервис',
    source: 'Avito',
    sourceUrl: 'https://www.avito.ru/brands/i312214092/all/transport?sellerId=0b17a20654f8f463808c4b91f3e7323c'
  }
];

const Reviews: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const updateSliderWidth = () => {
      if (sliderRef.current) {
        setSlideWidth(sliderRef.current.offsetWidth);
      }
    };

    checkMobile();
    updateSliderWidth();

    window.addEventListener('resize', checkMobile);
    window.addEventListener('resize', updateSliderWidth);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', updateSliderWidth);
    };
  }, []);

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
      <Star key={i} $filled={i < rating}>★</Star>
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
  }, [touchStart, touchEnd, nextSlide, prevSlide]);

  const getInitialLetter = (name: string): string => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <ReviewsSection id="reviews">
      <div className="container">
        <SectionTitle>Отзывы <span>наших клиентов</span></SectionTitle>
        <SectionSubtitle>
          Узнайте, что говорят о нас владельцы мотоциклов Kayo
        </SectionSubtitle>
        <SliderAndControlsWrapper>
          <SliderButton onClick={prevSlide} disabled={currentSlide === 0}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </SliderButton>

          <ReviewsContainer>
            <ReviewsWrapper ref={sliderRef}>
              <ReviewsSlider offset={-currentSlide * slideWidth} count={reviewsData.length}>
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
                          <img src={review.source === 'Avito' ? '/images/avito.png' : `/images/${review.source}.svg`} alt={review.source} />
                          <span>{review.source}</span>
                        </a>
                      </SourceLogo>
                    )}
                  </ReviewCard>
                ))}
              </ReviewsSlider>
            </ReviewsWrapper>
          </ReviewsContainer>

          <SliderButton onClick={nextSlide} disabled={currentSlide === reviewsData.length - 1}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </SliderButton>
        </SliderAndControlsWrapper>

        <SliderDots>
          {reviewsData.map((_, index) => (
            <SliderControl
              key={index}
              $active={index === currentSlide}
              onClick={() => goToSlide(index)}
            />
          ))}
        </SliderDots>

      </div>
    </ReviewsSection>
  );
};

export default Reviews; 