import styled, { css } from 'styled-components'

/* Container principal */
export const PatientsContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6rem 1rem;
    margin: 3rem 0;

    @media (max-width: ${theme.breakpoints.tablet}) {
      padding: 4rem 1rem;
    }

    @media (max-width: 480px) {
      padding: 3rem 0.75rem;
    }
  `}
`;

/* Card principal */
export const CardWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.white};
    border-radius: 2rem;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    max-width: 69.75rem;
    width: 100%;
    position: relative;
    z-index: 1;
    overflow: visible;

    @media (max-width: ${theme.breakpoints.desktop}) {
      flex-wrap: wrap;
      gap: ${theme.spacings.lg};
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column;
      border-radius: 1.5rem;
      gap: ${theme.spacings.md};
    }

    @media (max-width: 480px) {
      padding: 1rem 0;
    }
  `}
`;

/* Imagem dentro do container verde com máscara */
export const ImageWrapper = styled.div`
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
    overflow: hidden; /* impede a imagem de sair do contêiner */
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
      mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,1));
      -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,1));
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


/* Conteúdo */
export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    padding: 3rem 4rem;
    font-family: 'Nunito', sans-serif;

    @media (max-width: ${theme.breakpoints.tablet}) {
      padding: 2rem 1.5rem;
      text-align: center;
    }

    @media (max-width: 480px) {
      padding: 1.5rem 1rem;
    }

    h2 {
      font-size: ${theme.fonts.sizes.xxxl};
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.text};
      margin-bottom: 1rem;

      @media (max-width: ${theme.breakpoints.tablet}) {
        font-size: ${theme.fonts.sizes.xxl};
      }

      @media (max-width: 480px) {
        font-size: ${theme.fonts.sizes.xl};
      }
    }

    p {
      color: ${theme.colors.textLight};
      font-size: ${theme.fonts.sizes.large};
      line-height: 1.6;
      border-left: 3px solid ${theme.colors.primary};
      padding-left: 1rem;
      margin-bottom: 2rem;
      max-width: 520px;
      margin-left: auto;
      margin-right: auto;

      @media (max-width: ${theme.breakpoints.tablet}) {
        border-left: none;
        padding-left: 0;
      }

      @media (max-width: 480px) {
        font-size: ${theme.fonts.sizes.medium};
        line-height: 1.5;
        max-width: 100%;
      }
    }

    a.button-description {
      display: inline-block;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      padding: 0.875rem 2rem;
      border-radius: 8px;
      font-weight: 700;
      font-size: 1.05rem;
      text-align: center;
      box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
      width: fit-content;

      &:hover {
        background-color: ${theme.colors.primaryDark};
        transform: translateY(-2px);
      }

      @media (max-width: ${theme.breakpoints.tablet}) {
        width: 100%;
      }

      @media (max-width: 480px) {
        font-size: ${theme.fonts.sizes.medium};
        padding: 0.75rem 1.5rem;
      }
    }
  `}
`;
