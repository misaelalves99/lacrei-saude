// src/components/layout/Footer.styles.ts
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 2rem 1rem;
  background: ${({ theme }) => theme.colors.background};
  border-top: 1px solid rgba(16, 24, 40, 0.08);
`

export const FooterInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
`

export const Column = styled.div`
  min-width: 180px;
  flex: 1;
`

export const Brand = styled.h2`
  font-weight: 700;
  font-size: 1.1rem;
  margin: 0;
`

export const Tagline = styled.p`
  margin-top: 0.5rem;
  color: rgba(17, 24, 39, 0.72);
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Item = styled.li`
  margin: 0.35rem 0;
`

export const FooterLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.25rem 0.35rem;
  border-radius: 6px;

  &:hover,
  &:focus {
    text-decoration: underline;
    outline: none;
  }
`

export const Legal = styled.small`
  display: block;
  margin-top: 0.5rem;
  color: rgba(17, 24, 39, 0.6);
  font-size: 0.875rem;
`
