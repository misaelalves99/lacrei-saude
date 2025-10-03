// src/app/servicos/Servicos.styles.ts
"use client";

import styled from "styled-components";

// ---------- HERO PRINCIPAL ----------
export const HeroWrapper = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundGradient};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0; /* gradiente ocupa full width, sem arredondar */
  padding: 3rem 1rem;
`;

// Container interno para alinhar como Header
export const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between; /* texto à esquerda, imagem à direita */
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column; /* imagem abaixo do texto no mobile */
    justify-content: center;
    align-items: center;
  }
`;

export const HeroText = styled.div`
  max-width: 600px;
  flex: 1;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const TitleHero = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primaryDark};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SubtitleHero = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// ---------- SEÇÕES ----------

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

// ---------- GRID DE SERVIÇOS ----------

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

// ---------- CARTÕES DE SERVIÇOS ----------

export const ServiceCard = styled.article`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const ServiceDescription = styled.p`
  flex: 1;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

// ---------- BOTÃO DOS CARTÕES ----------

export const CardButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  padding: 0.75rem 1.25rem;
  border-radius: ${({ theme }) => theme.radius.md};
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  text-align: center;
  transition: background 0.25s ease, transform 0.15s ease;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-1px);
    outline: none;
    box-shadow: 0 0 0 3px rgba(1, 131, 131, 0.35);
  }
`;
