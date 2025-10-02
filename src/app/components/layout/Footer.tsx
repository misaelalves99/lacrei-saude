// src/components/layout/Footer.tsx

"use client";

import React from "react";
import Link from "next/link";
import * as S from "./Footer.styles";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <S.FooterContainer role="contentinfo" aria-label="Rodapé da Lacrei Saúde">
      <S.FooterInner>
        <S.Column>
          <S.Brand>Lacrei Saúde</S.Brand>
          <S.Tagline>Acolhendo pessoas para cuidar melhor.</S.Tagline>
        </S.Column>

        <S.Column>
          <nav aria-label="Navegação do rodapé">
            <S.List>
              <S.Item>
                <Link href="/politica-privacidade" passHref legacyBehavior>
                  <S.FooterLink>Política de privacidade</S.FooterLink>
                </Link>
              </S.Item>
              <S.Item>
                <Link href="/termos" passHref legacyBehavior>
                  <S.FooterLink>Termos de uso</S.FooterLink>
                </Link>
              </S.Item>
              <S.Item>
                <Link href="/contato" passHref legacyBehavior>
                  <S.FooterLink>Contato</S.FooterLink>
                </Link>
              </S.Item>
            </S.List>
          </nav>
        </S.Column>

        <S.Column>
          <S.Legal role="contentinfo">
            © {year} Lacrei Saúde — Todos os direitos reservados.
          </S.Legal>
        </S.Column>
      </S.FooterInner>
    </S.FooterContainer>
  );
}
