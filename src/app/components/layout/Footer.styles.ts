// src/components/layout/Footer.styles.ts
import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: clamp(1.5rem, 3vw, 2.5rem) 1rem;
  background: ${({ theme }) => theme.colors.white};
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const FooterInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Column = styled.div`
  min-width: 180px;
  flex: 1;
`;

export const Brand = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  font-size: clamp(1rem, 2vw, 1.25rem);
  margin: 0;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const Tagline = styled.p`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.75;
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  margin: 0.5rem 0;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.25rem 0.35rem;
  border-radius: 6px;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.primaryDark};
    background: rgba(1, 131, 131, 0.08);
    outline: none;
  }
`;

export const Legal = styled.small`
  display: block;
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.85rem;
  line-height: 1.4;
`;
