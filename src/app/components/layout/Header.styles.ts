// src/components/layout/Header.styles.ts
import styled from "styled-components";

// 🔹 Header principal
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1rem;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  position: sticky;
  top: 0;
  z-index: 100;
`;

// 🔹 Marca (logo + nome)
export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

// 🔹 Navegação desktop
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const DesktopList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  transition: background 0.2s ease, color 0.2s ease;
  color: ${({ theme }) => theme.colors.text};

  &:hover,
  &:focus {
    background: rgba(1, 131, 131, 0.1);
    color: ${({ theme }) => theme.colors.primaryDark};
    outline: none;
  }
`;

// 🔹 Botão mobile
export const MenuButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.primaryDark};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(1, 131, 131, 0.35);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

// 🔹 Painel mobile (hamburger menu aberto)
export const MobilePanel = styled.div<{ open: boolean }>`
  position: absolute;
  right: 1rem;
  top: 72px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  box-shadow: 0 8px 28px rgba(2, 6, 23, 0.12);
  padding: 0.75rem;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  gap: 0.5rem;

  a {
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    font-weight: 600;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    transition: background 0.2s ease, color 0.2s ease;

    &:hover,
    &:focus {
      background: rgba(1, 131, 131, 0.1);
      color: ${({ theme }) => theme.colors.primaryDark};
      outline: none;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
