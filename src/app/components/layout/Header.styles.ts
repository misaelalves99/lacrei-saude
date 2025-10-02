import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;      
  justify-content: space-between;
  padding: clamp(0.75rem, 2vw, 1rem) 1rem;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;      
  gap: 0.75rem;
  font-weight: 700;
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;      
  gap: 1rem;
`;

export const DesktopList = styled.ul`
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

export const NavItem = styled.li`
  display: flex;
  align-items: center;      
  position: relative;
`;

export const NavLink = styled.a`
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  transition: background 0.2s ease, color 0.2s ease;
  color: ${({ theme }) => theme.colors.text};

  &:hover,
  &:focus-visible {
    background: rgba(1, 131, 131, 0.1);
    color: ${({ theme }) => theme.colors.primaryDark};
    outline: none;
  }
`;

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
  z-index: 120;

  a {
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    font-weight: 600;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    transition: background 0.2s ease, color 0.2s ease;

    &:hover,
    &:focus-visible {
      background: rgba(1, 131, 131, 0.1);
      color: ${({ theme }) => theme.colors.primaryDark};
      outline: none;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

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

export const UserPanel = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 8px 28px rgba(2, 6, 23, 0.12);
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  z-index: 150;

  a {
    padding: 0.5rem 1rem;
    font-weight: 600;
    border-radius: 6px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    transition: background 0.2s ease;

    &:hover,
    &:focus-visible {
      background: rgba(1, 131, 131, 0.1);
      color: ${({ theme }) => theme.colors.primaryDark};
      outline: none;
    }
  }
`;
