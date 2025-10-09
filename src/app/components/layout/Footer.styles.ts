// src/components/layout/Footer.styles.ts

import styled, { css } from "styled-components";
import Link from "next/link"; // ✅ Import adicionado

const maxContentWidth = "1100px";

/* --- Container principal do Footer --- */
export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    position: relative;
    padding-bottom: ${theme.spacings.lg};

    @media (max-width: ${theme.breakpoints.tablet}) {
      padding-bottom: ${theme.spacings.md};
    }
  `}
`;

/* --- Divisores (Linhas verdes) --- */
const dividerStyle = css`
  ${({ theme }) => css`
    width: 100%;
    height: 2px;
    background-color: ${theme.colors.primary};
    opacity: 0.5;
    margin: ${theme.spacings.xxl} 0;

    @media (max-width: ${theme.breakpoints.tablet}) {
      margin: ${theme.spacings.lg} 0;
    }
  `}
`;

export const TopDivider = styled.div`${dividerStyle}`;
export const BottomDivider = styled.div`${dividerStyle}`;

/* --- Seção principal (Logo + Navegação) --- */
export const MainContent = styled.div`
  ${({ theme }) => css`
    max-width: ${maxContentWidth};
    margin: 0 auto;
    padding: 0 ${theme.spacings.md};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${theme.spacings.lg};

    @media (max-width: 1024px) {
      flex-wrap: wrap;
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 0 ${theme.spacings.lg};
    }
  `}
`;

/* --- Coluna da Logo --- */
export const LogoColumn = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1.5;
    min-width: 250px;

    @media (max-width: ${theme.breakpoints.tablet}) {
      align-items: center;
      width: 100%;
      min-width: auto;
    }
  `}
`;

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.lg};
  `}
`;

export const SocialIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.md};
    margin-bottom: ${theme.spacings.xl};
  `}
`;

/* --- Link de redes sociais --- */
export const SocialLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: 24px;
    transition: color 0.3s;

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`;

/* --- Colunas de navegação --- */
export const NavWrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex: 2;
    gap: ${theme.spacings.xl};

    @media (max-width: 1024px) {
      flex-wrap: wrap;
      justify-content: space-around;
      margin-top: ${theme.spacings.lg};
      width: 100%;
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column;
      align-items: center;
      gap: ${theme.spacings.lg};
    }
  `}
`;

export const NavColumn = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    @media (max-width: ${theme.breakpoints.tablet}) {
      align-items: center;
    }
  `}
`;

export const ColumnTitle = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.large};
    color: ${theme.colors.text};
    font-weight: ${theme.fonts.weights.bold};
    margin-bottom: ${theme.spacings.md};
  `}
`;

export const List = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xs};
    padding: 0;
    margin: 0;
    list-style: none;
  `}
`;

export const Item = styled.li`
  padding: 0;
`;

export const FooterLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.textLight};
    font-size: ${theme.fonts.sizes.medium};
    transition: color 0.3s;

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`;

/* --- Conteúdo legal (texto e direitos autorais) --- */
export const LegalContent = styled.div`
  ${({ theme }) => css`
    max-width: ${maxContentWidth};
    margin: 0 auto;
    padding: 0 ${theme.spacings.md};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.sm};
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors.textLight};
    line-height: 1.6;

    @media (max-width: ${theme.breakpoints.tablet}) {
      text-align: center;
      padding: 0 ${theme.spacings.lg};
    }
  `}
`;

export const Disclaimer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors.textLight};
  `}
`;

export const Copyright = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors.textLight};
  `}
`;

/* --- Botão Voltar ao Topo --- */
export const ScrollToTopButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    bottom: ${theme.spacings.lg};
    right: ${theme.spacings.xl};
    width: 40px;
    height: 40px;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
    border-radius: 4px;
    color: ${theme.colors.primary};
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};

      img {
        filter: brightness(0) invert(1);
      }
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      right: ${theme.spacings.lg};
      bottom: ${theme.spacings.md};
    }
  `}
`;
