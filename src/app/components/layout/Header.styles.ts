// src/components/layout/Header.styles.ts
import styled from 'styled-components'

// 🔹 Header principal
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1rem;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid rgba(16, 24, 40, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
`

// 🔹 Marca (logo + nome)
export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

// 🔹 Navegação desktop
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const DesktopList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li``

export const NavLink = styled.a`
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 6px;
  transition: background 0.2s ease;

  &:hover,
  &:focus {
    background: rgba(108, 0, 255, 0.08);
    outline: none;
  }
`

// 🔹 Botão mobile
export const MenuButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(108, 0, 255, 0.3);
  }

  @media (min-width: 769px) {
    display: none;
  }
`

// 🔹 Painel mobile (hamburger menu aberto)
export const MobilePanel = styled.div<{ open: boolean }>`
  position: absolute;
  right: 1rem;
  top: 72px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  box-shadow: 0 8px 28px rgba(2, 6, 23, 0.1);
  padding: 0.75rem;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 769px) {
    display: none;
  }
`
