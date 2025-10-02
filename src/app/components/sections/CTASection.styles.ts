// src/components/sections/CTASection.styles.ts

"use client";

import styled from "styled-components";

export const CTAWrapper = styled.section`
  text-align: center;
  padding: 3rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  margin: 2rem auto;
  max-width: 900px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const Action = styled.div`
  display: flex;
  justify-content: center;
`;
