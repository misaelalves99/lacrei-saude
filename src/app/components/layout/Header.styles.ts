import styled from "styled-components";

// ---------- CONTAINER PRINCIPAL ----------
export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.white};
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 2px solid #018383;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

// ---------- CONTAINER INTERNO ----------
export const HeaderInner = styled.div`
  max-width: 1200px; // largura máxima
  margin: 0 auto; // centraliza
  padding: clamp(0.75rem, 2vw, 1.25rem) 2rem; // padding lateral responsivo
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

// ---------- LOGO ----------
export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  color: ${({ theme }) => theme.colors.primaryDark};
  flex-shrink: 0;
`;

// ---------- NAV ----------
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: nowrap;
`;

// ---------- LISTA DESKTOP ----------
export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  position: relative;
`;

// ---------- LINK ----------
export const NavLink = styled.a`
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.text};
  transition: background 0.2s ease, color 0.2s ease;

  &:hover,
  &:focus-visible {
    background: rgba(1, 131, 131, 0.1);
    color: ${({ theme }) => theme.colors.primaryDark};
    outline: none;
  }
`;

// ---------- BOTÃO MENU MOBILE ----------
export const MenuButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.primaryDark};
  transition: background 0.2s ease;

  &:hover,
  &:focus-visible {
    background: rgba(1, 131, 131, 0.1);
    outline: none;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

// ---------- MENU MOBILE ----------
export const MobilePanel = styled.div<{ open: boolean }>`
  position: absolute;
  right: 1.5rem;
  top: 72px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  box-shadow: 0 8px 28px rgba(2, 6, 23, 0.12);
  padding: 1rem;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  gap: 0.5rem;
  z-index: 120;

  @media (min-width: 769px) {
    display: none !important;
  }
`;

// ---------- BOTÃO USUÁRIO ----------
export const UserButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.primaryDark};
  display: flex;
  align-items: center;
  transition: background 0.2s ease;

  &:hover,
  &:focus-visible {
    background: rgba(1, 131, 131, 0.1);
    outline: none;
  }
`;
