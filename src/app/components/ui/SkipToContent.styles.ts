// src/components/ui/SkipToContent.styles.ts

"use client";

import styled from "styled-components";

export const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.75rem 1.25rem;
  z-index: 100;
  transition: top 0.3s ease;

  &:focus {
    top: 10px;
  }
`;
