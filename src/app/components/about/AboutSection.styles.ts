// src/components/about/AboutSection.styles.ts
"use client";

import styled from "styled-components";

export const Section = styled.section`
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1rem;
  margin-bottom: 3rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 cards por linha em desktop */
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 cards em tablets */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 card em mobile */
  }
`;

export const ServiceCard = styled.article`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const ServiceDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
`;
