// src/app/sobre/SobrePage.styles.ts
"use client";

import styled from "styled-components";

export const MainContent = styled.main`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;

  /* Garantir espaçamento entre seções */
  & > section {
    margin-bottom: 4rem;

    @media (max-width: 768px) {
      margin-bottom: 3rem;
    }
  }
`;
