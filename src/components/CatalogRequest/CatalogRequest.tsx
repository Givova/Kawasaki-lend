import React, { useState } from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import PhoneAnimation from '../../assets/Animation/Phone-animation.json';

const RequestSection = styled.section`
  padding: 80px 0;
  background-color: #f7f7f7;
`;

const RequestContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.10);
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 0;
  }
`;

const RequestContent = styled.div`
  flex: 1;
  padding: 40px;
  background: none;
  border-radius: 0;
  box-shadow: none;
  @media (max-width: 576px) {
    padding: 30px 20px;
  }
`;

const RequestTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  
  span {
    color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const RequestDescription = styled.p`
  font-size: 16px;
  color: var(--dark-gray);
  margin-bottom: 30px;
  line-height: 1.6;
`;

const RequestForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 200, 83, 0.2);
  }
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--primary-color);
  color: var(--light-color);
  border: none;
  padding: 14px 20px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #00a844;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const RequestImage = styled.div`
  flex: 1;
  height: 400px;
  background: none;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  @media (max-width: 992px) {
    width: 100%;
    height: 300px;
  }
`;

const SuccessMessage = styled.div`
  background-color: rgba(0, 200, 83, 0.1);
  border-left: 4px solid var(--primary-color);
  padding: 15px;
  border-radius: 4px;
  margin-top: 20px;
  
  p {
    color: var(--text-color);
    font-weight: 500;
  }
`;

// Стили для модального окна
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 12px;
  max-width: 400px;
  width: 100%;
  padding: 32px 24px 24px 24px;
  position: relative;
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: #888;
  cursor: pointer;
  transition: color 0.2s;
  &:hover { color: var(--primary-color); }
`;

const OpenModalButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: var(--primary-color);
  color: var(--light-color);
  border: none;
  padding: 16px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  &:hover { background-color: #00a844; }
`;

const CatalogRequest: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
    setSubmitted(false);
    setName('');
    setPhone('');
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <RequestSection id="catalog-request">
      <div className="container">
        <RequestContainer>
          <RequestContent>
            <RequestTitle>
              Запросить <span>каталог мотоциклов Kawasaki</span> в WhatsApp
            </RequestTitle>
            <RequestDescription>
              В каталоге представлены все модели мотоциклов Kawasaki с подробными характеристиками, ценами и комплектациями
            </RequestDescription>
            <a
              href="https://wa.me/79203083324?text=Здравствуйте,%20интересует%20каталог%20мотоциклов%20Kawasaki"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <SubmitButton as="div" style={{ width: '100%', marginTop: 24, marginBottom: 0, fontSize: 18, cursor: 'pointer' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.4054 3.5875C18.1607 1.3425 15.1714 0.0525 11.9946 0.0525C5.4375 0.0525 0.0964286 5.3925 0.0964286 12C0.0964286 14.1 0.6375 16.1475 1.6607 17.9475L0 24L6.2089 22.3725C7.94464 23.3025 9.95357 23.7975 11.9946 23.7975C18.5518 23.7975 24 18.4575 24 11.85C24 8.6325 22.65 5.8325 20.4054 3.5875ZM11.9946 21.7875C10.2214 21.7875 8.4482 21.315 6.9375 20.4675L6.58393 20.2575L2.85 21.195L3.80893 17.565L3.57321 17.1975C2.63036 15.63 2.11607 13.8525 2.11607 12C2.11607 6.4575 6.50357 2.0625 12 2.0625C14.6571 2.0625 17.1536 3.12 19.0286 5.01C20.9036 6.9 21.9804 9.3975 21.9804 11.85C21.9804 17.3925 17.4857 21.7875 11.9946 21.7875ZM17.4321 14.5275C17.1429 14.3775 15.675 13.6575 15.4286 13.5825C15.1714 13.5 15 13.4625 14.7857 13.755C14.5714 14.0475 14.0036 14.7 13.8321 14.9175C13.6607 15.1275 13.4893 15.15 13.2 15C11.3786 14.0925 10.1893 13.3875 8.99464 11.34C8.67321 10.8 9.3 10.8375 9.88393 9.69C9.96429 9.4725 9.92678 9.2925 9.87321 9.1425C9.81964 8.9925 9.18214 7.53 8.93036 6.9375C8.67857 6.3675 8.42679 6.45 8.25536 6.45C8.08393 6.45 7.875 6.4125 7.66071 6.4125C7.44643 6.4125 7.1143 6.4725 6.85714 6.7575C6.6 7.0425 5.84464 7.7625 5.84464 9.225C5.84464 10.6875 6.89464 12.1125 7.03393 12.33C7.18929 12.54 9.16071 15.555 12.1607 16.8375C14.1214 17.6925 14.9143 17.7675 15.9 17.625C16.4893 17.5425 17.6893 16.9125 17.9411 16.2075C18.1929 15.5025 18.1929 14.91 18.1393 14.8125C18.0857 14.7075 17.8714 14.6475 17.5821 14.4975L17.4321 14.5275Z" />
                </svg>
                Запросить каталог в WhatsApp
              </SubmitButton>
            </a>
          </RequestContent>
          <RequestImage>
            <Lottie animationData={PhoneAnimation} loop={true} style={{ width: '100%', height: '100%' }} />
          </RequestImage>
        </RequestContainer>
        {modalOpen && (
          <ModalOverlay onClick={handleOverlayClick}>
            <ModalContent>
              <CloseButton onClick={handleCloseModal} aria-label="Закрыть окно">×</CloseButton>
              <RequestTitle>
                Запросить <span>каталог мотоциклов Kawasaki</span> в WhatsApp
              </RequestTitle>
              <RequestDescription>
                В каталоге представлены все модели мотоциклов Kawasaki с подробными характеристиками, ценами и комплектациями
              </RequestDescription>
              {!submitted ? (
                <RequestForm onSubmit={handleSubmit}>
                  <InputWrapper>
                    <Input
                      type="text"
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <Input
                      type="tel"
                      placeholder="Ваш телефон"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </InputWrapper>
                  <SubmitButton type="submit">
                    Получить каталог
                  </SubmitButton>
                </RequestForm>
              ) : (
                <SuccessMessage>
                  <p>Спасибо! Мы получили ваш запрос. В ближайшее время мы свяжемся с вами в WhatsApp и пришлём каталог.</p>
                </SuccessMessage>
              )}
            </ModalContent>
          </ModalOverlay>
        )}
      </div>
    </RequestSection>
  );
};

export default CatalogRequest; 