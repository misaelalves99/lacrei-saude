// src/components/home/Professionals.styles.ts
import styled, { css } from 'styled-components';
import {
  PatientsContainer,
  CardWrapper,
  ImageWrapper as BaseImageWrapper,
  ContentWrapper as BaseContentWrapper,
} from './Patients.styles';

/* Container externo da seção */
export const ProfessionalsContainer = styled(PatientsContainer)`
  font-family: 'Nunito', sans-serif;
  margin: 3rem 0;
`;

/* Card principal */
export const CardWrapperProfessionals = styled(CardWrapper)`
  ${({ theme }) => css`
    flex-direction: row; /* mesma ordem do Patients no desktop */

    @media (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column;
      gap: ${theme.spacings.md};
    }

    @media (max-width: 480px) {
      gap: ${theme.spacings.sm};
      padding: 1rem 0;
    }
  `}
`;

/* Imagem dentro do container verde degradê */
export const ImageWrapper = styled(BaseImageWrapper)`
  ${({ theme }) => css`
    position: relative;
    width: 40%;
    min-width: 320px;
    height: 420px;
    flex-shrink: 0;
    border-radius: 2rem 15rem 15rem 2rem;
    background: linear-gradient(
      135deg,
      ${theme.colors.primary} 0%,
      ${theme.colors.darkBlue} 100%
    );
    overflow: hidden; /* impede imagem de sair */
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${theme.breakpoints.tablet}) {
      width: 100%;
      height: 300px;
      border-radius: 1.5rem 1.5rem 0 0;
    }

    @media (max-width: 480px) {
      height: 250px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
      mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1));
      -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1));
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }

      @media (max-width: ${theme.breakpoints.tablet}) {
        border-radius: 1.5rem 1.5rem 0 0;
      }

      @media (max-width: 480px) {
        object-position: center top;
      }
    }
  `}
`;

/* Conteúdo textual */
export const ContentWrapper = styled(BaseContentWrapper)`
  padding: 3rem 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2rem 1.5rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.sizes.xxxl};
    margin-bottom: ${({ theme }) => theme.spacings.md};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.fonts.sizes.xxl};
    }

    @media (max-width: 480px) {
      font-size: ${({ theme }) => theme.fonts.sizes.xl};
    }
  }

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.large};
    line-height: 1.6;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
    border-left: 3px solid ${({ theme }) => theme.colors.primary};
    padding-left: 1rem;
    margin-bottom: 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      border-left: none;
      padding-left: 0;
    }

    @media (max-width: 480px) {
      font-size: ${({ theme }) => theme.fonts.sizes.medium};
      line-height: 1.5;
      max-width: 100%;
    }
  }

  a.button-description {
    padding: 0.875rem 2rem;
    font-size: 1.05rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 100%;
    }

    @media (max-width: 480px) {
      font-size: ${({ theme }) => theme.fonts.sizes.medium};
      padding: 0.75rem 1.5rem;
    }
  }
`;
