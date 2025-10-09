// src/components/layout/UserPanelLazy.styles.ts

import styled from "styled-components";

export const UserPanelContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 8px 28px rgba(2,6,23,0.12);
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  z-index: 150;
`;

export const UserPanelLink = styled.a`
  padding: 0.5rem 1rem;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: background 0.2s ease;

  &:hover,
  &:focus-visible {
    background: rgba(1,131,131,0.1);
    color: ${({ theme }) => theme.colors.primaryDark};
    outline: none;
  }
`;
