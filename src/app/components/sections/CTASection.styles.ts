// src/components/sections/CTASection.styles.ts
"use client";

import styled from "styled-components";

export const CTAWrapper = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  margin: 3rem auto;
  max-width: 900px;
  box-shadow: 0 8px 20px rgba(1, 131, 131, 0.25);
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

export const Action = styled.div`
  display: flex;
  justify-content: center;
`;
