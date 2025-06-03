import React, { useState } from 'react';
import styled from 'styled-components';
import { CaseItem } from '../../types';

const CasesSection = styled.section`
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

const CasesTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 10px;
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  background-color: ${props => props.active ? 'var(--primary-color)' : 'var(--light-color)'};
  color: ${props => props.active ? 'var(--light-color)' : 'var(--text-color)'};
  border: 1px solid ${props => props.active ? 'var(--primary-color)' : '#ddd'};
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-color)' : '#f0f0f0'};
  }
`;

const CasesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const CaseCard = styled.div`
  background-color: var(--light-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const CaseImage = styled.div<{ noOverlay?: boolean }>`
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
  }
  ${CaseCard}:hover & img {
    transform: scale(1.05);
  }
  ${({ noOverlay }) =>
    !noOverlay && `
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%);
      }
    `}
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: all 0.3s ease;
  
  svg {
    width: 24px;
    height: 24px;
    color: var(--light-color);
  }
  
  ${CaseCard}:hover & {
    background-color: var(--primary-color);
  }
`;

const CaseInfo = styled.div`
  padding: 20px;
`;

const CaseTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const CaseDescription = styled.p`
  font-size: 14px;
  color: var(--dark-gray);
  line-height: 1.5;
`;

const Modal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  max-width: 90vw;
  max-height: 90vh;
  position: relative;
  
  img {
    max-width: 100%;
    max-height: 90vh;
    display: block;
    border-radius: 4px;
  }
  
  iframe {
    max-width: 100%;
    width: 800px;
    height: 450px;
    border: none;
    border-radius: 4px;
    
    @media (max-width: 992px) {
      height: 400px;
    }
    
    @media (max-width: 768px) {
      height: 350px;
    }
    
    @media (max-width: 576px) {
      height: 250px;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: var(--light-color);
  font-size: 30px;
  cursor: pointer;
  z-index: 1001;
`;

const casesData: CaseItem[] = [
  {
    id: '1',
    title: 'Как выглядит завод мототехники KAYO изнутри? И как собирают мотоциклы? Технологии, которые поражают',
    description: 'Экскурсия на крупнейший завод эндуро мотоциклов KAYO в Китае.',
    image: '/images/case1.webp',
    type: 'video',
    videoUrl: 'https://rutube.ru/play/embed/31774f3901e6499df858e484ef368fdc'
  },
  {
    id: '4',
    title: 'Как выглядит завод мототехники KAYO изнутри?',
    description: 'Фото с завода KAYO. Производственный процесс и детали.',
    image: '/images/case1.webp',
    type: 'photo'
  },
  {
    id: '3',
    title: 'KAYO K6R KYB – KAYO RACING TEAM и Роман Курбатов на эндуро гонке «Four Seasons» в Беларуси',
    description: 'Выступление команды KAYO RACING TEAM на гонке в Беларуси.',
    image: '/images/case3.webp',
    type: 'video',
    videoUrl: 'https://rutube.ru/play/embed/6acafe7c883273903620a69bfa370a1a'
  },
  {
    id: '6',
    title: 'KAYO K6R KYB – KAYO RACING TEAM и Роман Курбатов на эндуро гонке «Four Seasons» в Беларуси',
    description: 'Фото с гонки «Four Seasons» в Беларуси.',
    image: '/images/case3.webp',
    type: 'photo'
  },
  {
    id: '2',
    title: 'KAYO K2 Pro на самой сложной гонке в горах',
    description: 'Хард эндуро гонка «Skhauat» и победа на KAYO K2 Pro.',
    image: '/images/case2.webp',
    type: 'video',
    videoUrl: 'https://rutube.ru/play/embed/5b6effb88960733a728914d9b77c151c'
  },
  {
    id: '5',
    title: 'KAYO K2 Pro на самой сложной гонке в горах',
    description: 'Фото с хард эндуро гонки на KAYO K2 Pro.',
    image: '/images/case2.webp',
    type: 'photo'
  }
];

const shortsData: CaseItem[] = [
  {
    id: 's1',
    title: 'KAYO Enduro Shorts',
    description: 'Короткое вертикальное видео о KAYO Enduro.',
    image: '/images/short1.webp',
    type: 'video',
    videoUrl: 'https://rutube.ru/play/embed/365ca669e1c5d15a0dd35a81ddca0523'
  },
  {
    id: 's2',
    title: 'KAYO K2 Pro Shorts',
    description: 'Вертикальный обзор KAYO K2 Pro.',
    image: '/images/short2.webp',
    type: 'video',
    videoUrl: 'https://rutube.ru/play/embed/5b6effb88960733a728914d9b77c151c'
  },
  {
    id: 's3',
    title: 'KAYO K6R KYB Shorts',
    description: 'Короткое видео с гонки на KAYO K6R KYB.',
    image: '/images/short3.webp',
    type: 'video',
    videoUrl: 'https://rutube.ru/play/embed/6acafe7c883273903620a69bfa370a1a'
  }
];

const AutoPlayVideo: React.FC<{ src: string; poster: string }> = ({ src, poster }) => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);
  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      width="100%"
      height="auto"
      controls
      muted
      playsInline
      preload="auto"
      style={{ borderRadius: 8 }}
    />
  );
};

const Cases: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'shorts' | 'photo' | 'video'>('shorts');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);

  const filteredCases = casesData.filter(item => item.type === activeTab);

  const openModal = (caseItem: CaseItem) => {
    setSelectedCase(caseItem);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <CasesSection id="cases">
      <div className="container">
        <SectionTitle>Наши <span>кейсы</span></SectionTitle>
        <SectionSubtitle>
          Посмотрите фото и видео наших мотоциклов в действии
        </SectionSubtitle>

        <CasesTabs>
          <TabButton
            active={activeTab === 'shorts'}
            onClick={() => setActiveTab('shorts')}
          >
            Вертикальные видео
          </TabButton>
          <TabButton
            active={activeTab === 'photo'}
            onClick={() => setActiveTab('photo')}
          >
            Фото
          </TabButton>
          <TabButton
            active={activeTab === 'video'}
            onClick={() => setActiveTab('video')}
          >
            Видео
          </TabButton>
        </CasesTabs>

        {activeTab === 'shorts' ? (
          <CasesGrid style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {shortsData.map((caseItem, idx) => (
              <CaseCard key={caseItem.id} style={{ maxWidth: 220, aspectRatio: '9/16', margin: '0 auto' }} onClick={() => openModal(caseItem)}>
                <CaseImage noOverlay={idx === 0}>
                  {idx === 0 ? (
                    <AutoPlayVideo src="/images/KAYO%20BASIC%20K125%20–%20Базовый%20питбайк%20для%20бездорожья%20_%20Универсальная%20мототехника.mp4" poster={caseItem.image} />
                  ) : (
                    <>
                      <img src={caseItem.image} alt={caseItem.title} style={{ objectFit: 'cover', aspectRatio: '9/16' }} />
                      <PlayButton>
                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                        </svg>
                      </PlayButton>
                    </>
                  )}
                </CaseImage>
              </CaseCard>
            ))}
          </CasesGrid>
        ) : (
          <CasesGrid>
            {filteredCases.map((caseItem) => (
              <CaseCard key={caseItem.id} onClick={() => openModal(caseItem)}>
                <CaseImage>
                  <img src={caseItem.image} alt={caseItem.title} />
                  {caseItem.type === 'video' && (
                    <PlayButton>
                      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                      </svg>
                    </PlayButton>
                  )}
                </CaseImage>
                <CaseInfo>
                  <CaseTitle>{caseItem.title}</CaseTitle>
                  <CaseDescription>{caseItem.description}</CaseDescription>
                </CaseInfo>
              </CaseCard>
            ))}
          </CasesGrid>
        )}

        <Modal isOpen={modalOpen} onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            {selectedCase?.type === 'video' ? (
              <iframe
                src={selectedCase.videoUrl ? `${selectedCase.videoUrl}${selectedCase.videoUrl.includes('?') ? '&' : '?'}autoplay=1` : ''}
                title={selectedCase.title}
                width="720"
                height="405"
                frameBorder="0"
                allow="clipboard-write; autoplay"
                allowFullScreen
              />
            ) : (
              <img src={selectedCase?.image} alt={selectedCase?.title} />
            )}
          </ModalContent>
        </Modal>
      </div>
    </CasesSection>
  );
};

export default Cases; 