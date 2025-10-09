// src/app/styles/layout.ts
"use client";

import styled, { css } from "styled-components";

/* Page wrapper atualizado */
export const PageContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    
    /* Remove qualquer padding automático de sections */
    > section {
      padding: 0 !important;
    }

    /* Se quiser adicionar padding uniforme para todo conteúdo interno */
    padding: ${theme.spacings.xxl} 0;

    @media (max-width: ${theme.breakpoints.tablet}) {
      padding: ${theme.spacings.xl} 0;
    }
  `}
`;
