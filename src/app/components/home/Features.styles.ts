// src/components/home/Features.styles.ts
import styled, { css } from "styled-components";

const LIGHT_PURPLE_BG = "#F9F3FF";
const GRADIENT_START = "#018383";
const GRADIENT_END = "#014687";
const PRIMARY_COLOR = "#018762";
const TEXT_DARK = "#2D2D2D";
const TEXT_MUTED = "#666666";

export const FeaturesContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xxl} ${theme.spacings.md};
    font-family: 'Nunito', sans-serif;
    margin: 3rem auto;
    width: 100%;
    
    @media (max-width: ${theme.breakpoints.tablet}) {
      padding: ${theme.spacings.lg} ${theme.spacings.sm};
      margin: 2rem 0;
    }
  `}
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin-bottom: ${theme.spacings.lg};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3rem;
    color: ${TEXT_DARK};

    @media (max-width: ${theme.breakpoints.desktop}) {
      font-size: 2.25rem;
      line-height: 2.75rem;
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 2rem;
      line-height: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.75rem;
      line-height: 2.25rem;
    }
  `}
`;

export const TitleDivider = styled.div`
  ${({ theme }) => css`
    width: 10rem;
    height: 0.125rem;
    background: ${PRIMARY_COLOR};
    border-radius: 4px;
    margin: 0.5rem auto;
  `}
`;

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.25rem;
    color: ${TEXT_DARK};
    margin: 1rem 0 1.5rem;
    background-color: ${theme.colors.white};

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 1.25rem;
      line-height: 1.75rem;
      margin: 0.75rem 0 1.25rem;
    }

    @media (max-width: 480px) {
      font-size: 1.1rem;
      line-height: 1.5rem;
    }
  `}
`;

export const CardGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 70rem;
    justify-items: center;

    @media (max-width: ${theme.breakpoints.tablet}) {
      gap: 1.5rem;
    }

    @media (max-width: 480px) {
      gap: 1rem;
    }
  `}
`;

export const FeatureCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem 1.5rem;
    border-radius: 12px;
    background-color: ${LIGHT_PURPLE_BG};
    height: 100%;
    min-height: 280px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.12);
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      min-height: auto;
      padding: 1.5rem 1rem;
      width: 100%;
    }

    @media (max-width: 480px) {
      padding: 1rem;
    }
  `}
`;

export const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CardTitle = styled.h4`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;
    margin-top: 0.5rem;
    background: linear-gradient(105.43deg, ${GRADIENT_START} 14.39%, ${GRADIENT_END} 84.69%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 1.75rem;
      line-height: 2.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  `}
`;

export const CardDescription = styled.p`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${TEXT_MUTED};
    max-width: 280px;
    margin: 0.5rem auto;

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 0.95rem;
      line-height: 1.4rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      line-height: 1.35rem;
      max-width: 100%;
    }
  `}
`;
