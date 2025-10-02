// src/components/ui/IconButton.styles.ts

"use client";

import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radius.full};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.grayLight};
    outline: none;
  }
`;

export const IconWrapper = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;
