import styled, { css } from "styled-components";

/* ================= HEADER PRINCIPAL ================= */
export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    width: 100%;
    top: 0;
    z-index: 100;
    background: linear-gradient(
      rgb(245, 255, 251) 31.04%,
      rgb(255, 255, 255) 100%
    );
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: none;

    @media (max-width: ${theme.breakpoints.tablet}) {
      height: 4.5rem;
      padding: 0 1rem;
    }
  `}
`;

/* ================= CONTEÚDO INTERNO ================= */
export const HeaderInner = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0 7.625rem;

    @media (max-width: 1280px) {
      padding: 0 4rem;
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      padding: 0 1.25rem;
    }
  `}
`;

/* ================= BARRA FIXA VERDE SUPERIOR ================= */
export const TopBar = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: -3.5rem;
    left: 0;
    width: 100%;
    height: 48px;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-weight: ${theme.fonts.weights.bold};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    margin: 0.25rem;
    box-sizing: border-box;
    transition: top 0.2s ease;
  `}
`;

/* ================= BLOCO DE AÇÕES AO LADO ================= */
export const HeaderActions = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

/* ================= BRAND / LOGO ================= */
export const Brand = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 130px;
    height: auto;
  }
`;

/* ================= NAVEGAÇÃO DESKTOP ================= */
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const List = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 1.25rem;

    @media (max-width: ${theme.breakpoints.tablet}) {
      display: none;
    }
  `}
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  position: relative;
`;

export const NavLink = styled.a`
  ${({ theme }) => css`
    font-weight: ${theme.fonts.weights.semibold};
    text-decoration: none;
    padding: 0.5rem 1rem;
    color: ${theme.colors.primary};
    transition: color 0.2s ease;

    &:hover,
    &:focus-visible {
      color: ${theme.colors.primaryDark};
      outline: none;
    }
  `}
`;

/* ================= BOTÃO "ENTRAR" ================= */
export const EnterButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.borderRadius.md};
    padding: 0.75rem 1.5rem;
    font-size: ${theme.fonts.sizes.medium};
    font-weight: ${theme.fonts.weights.bold};
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: ${theme.colors.primaryDark};
    }

    svg {
      color: ${theme.colors.white};
      margin-left: ${theme.spacings.xxs};
      width: 18px;
      height: 18px;
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      display: none;
    }
  `}
`;

/* ================= DROPDOWN DO USUÁRIO ================= */
export const UserMenu = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 0;
    top: calc(100% + 10px);
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.sm};
    box-shadow: ${theme.shadows.medium};
    min-width: 180px;
    z-index: 50;
    display: flex;
    flex-direction: column;
  `}
`;

export const UserMenuItem = styled.button`
  ${({ theme }) => css`
    width: 100%;
    padding: 0.75rem 1rem;
    background: transparent;
    border: none;
    text-align: left;
    cursor: pointer;
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.text};
    font-weight: ${theme.fonts.weights.semibold};

    &:hover {
      background: ${theme.colors.grayLight};
      color: ${theme.colors.primaryDark};
    }

    &[as="a"] {
      display: block;
    }
  `}
`;

/* ================= MENU MOBILE ================= */
export const MenuButton = styled.button`
  ${({ theme }) => css`
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 6px;
    color: ${theme.colors.primary};
    transition: background 0.2s ease;

    &:hover,
    &:focus-visible {
      background: rgba(1, 131, 131, 0.1);
      outline: none;
    }

    @media (min-width: ${Number(theme.breakpoints.tablet.replace("px", "")) + 1}px) {
      display: none;
    }
  `}
`;

export const MobilePanel = styled.div<{ open: boolean }>`
  ${({ theme, open }) => css`
    position: absolute;
    right: ${theme.spacings.md};
    top: 100%;
    background: ${theme.colors.white};
    border-radius: ${theme.borderRadius.lg};
    box-shadow: ${theme.shadows.strong};
    padding: ${theme.spacings.sm};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xs};
    z-index: 120;

    opacity: ${open ? 1 : 0};
    visibility: ${open ? "visible" : "hidden"};
    transform: translateY(${open ? "0" : "-10px"});
    transition: opacity 0.2s ease-out, transform 0.2s ease-out, visibility 0.2s;

    ${NavLink} {
      padding: ${theme.spacings.xs} ${theme.spacings.sm};
      border-bottom: 1px solid ${theme.colors.border};
      width: 100%;

      &:last-child {
        border-bottom: none;
      }
    }

    @media (min-width: ${Number(theme.breakpoints.tablet.replace("px", "")) + 1}px) {
      display: none !important;
    }
  `}
`;
