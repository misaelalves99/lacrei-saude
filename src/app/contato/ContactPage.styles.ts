// src/contato/ContactPage.styles.ts
"use client";

import styled from "styled-components";

export const ContactPageWrapper = styled.main`
  max-width: 900px;
  margin: 4rem auto;
  padding: 0 1rem;
`;

export const PageTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const PageSubtitle = styled.p`
  text-align: center;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 2.5rem auto;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
`;
