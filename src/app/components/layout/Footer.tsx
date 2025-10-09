// src/components/layout/Footer.tsx

"use client";

import React from "react";
import Image from "next/image";
import * as S from "./Footer.styles";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi"; 

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaEnvelope, href: "#", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <S.FooterContainer role="contentinfo" aria-label="Rodapé Lacrei Saúde">
      <S.TopDivider />

      <S.MainContent>
        {/* Coluna 1: Logo e Ícones sociais */}
        <S.LogoColumn>
          <S.LogoWrapper>
            <Image
              src="/assets/header/logo_lacrei_desktop.7ae004ab.svg"
              alt="Lacrei Saúde Logo"
              width={160}
              height={60}
              priority
            />
          </S.LogoWrapper>

          <S.SocialIcons>
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <S.SocialLink key={index} href={href} aria-label={`Link para ${label}`}>
                <Icon />
              </S.SocialLink>
            ))}
          </S.SocialIcons>
        </S.LogoColumn>

        {/* Colunas de Navegação */}
        <S.NavWrapper>
          <S.NavColumn aria-labelledby="lacrei-saude-nav-title">
            <S.ColumnTitle id="lacrei-saude-nav-title">Lacrei Saúde</S.ColumnTitle>
            <S.List>
              <li>
                <S.FooterLink href="/quem-somos">Quem Somos</S.FooterLink>
              </li>
              <li>
                <S.FooterLink href="/proposito">Nosso Propósito</S.FooterLink>
              </li>
              <li>
                <S.FooterLink href="/missao">Missão, Visão e Valor</S.FooterLink>
              </li>
              <li>
                <S.FooterLink href="/acessibilidade">Acessibilidade</S.FooterLink>
              </li>
            </S.List>
          </S.NavColumn>

          <S.NavColumn aria-labelledby="saude-nav-title">
            <S.ColumnTitle id="saude-nav-title">Saúde</S.ColumnTitle>
            <S.List>
              <li>
                <S.FooterLink href="/busca">Buscar atendimento</S.FooterLink>
              </li>
              <li>
                <S.FooterLink href="/profissional/cadastro">Oferecer atendimento</S.FooterLink>
              </li>
            </S.List>
          </S.NavColumn>

          <S.NavColumn aria-labelledby="seguranca-nav-title">
            <S.ColumnTitle id="seguranca-nav-title">Segurança e Privacidade</S.ColumnTitle>
            <S.List>
              <li>
                <S.FooterLink href="/politica-privacidade">Política de Privacidade</S.FooterLink>
              </li>
              <li>
                <S.FooterLink href="/termos-de-uso">Termos de Uso</S.FooterLink>
              </li>
              <li>
                <S.FooterLink href="/direitos-titular">Direitos de Titular</S.FooterLink>
              </li>
            </S.List>
          </S.NavColumn>
        </S.NavWrapper>
      </S.MainContent>

      <S.BottomDivider />

      {/* Rodapé Legal */}
      <S.LegalContent>
        <S.Disclaimer>
          A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de emergência, procure o hospital mais próximo.
          <br />
          Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o site{" "}
          <a href="https://www.cvv.org.br" target="_blank" rel="noopener noreferrer">
            www.cvv.org.br
          </a>.
        </S.Disclaimer>

        <S.Copyright>
          © {year} Lacrei Saúde. Todos os direitos reservados. CNPJ: 51.265.351.0001-85
        </S.Copyright>
      </S.LegalContent>

      {/* Botão Voltar ao Topo */}
      <S.ScrollToTopButton onClick={scrollToTop} aria-label="Voltar para o topo">
        <FiArrowUp size={28} color="#018762" />
      </S.ScrollToTopButton>
    </S.FooterContainer>
  );
}
