"use client";

import { useState, useEffect, useRef, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import * as S from "./Header.styles";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

// Lazy load do painel de usuário
const UserPanelLazy = dynamic(() => import("./UserPanelLazy"), { ssr: false });

function HeaderComponent() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const userRef = useRef<HTMLDivElement | null>(null);

  // Fecha menus ao clicar fora
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (openMenu && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(false);
      }
      if (openUser && userRef.current && !userRef.current.contains(e.target as Node)) {
        setOpenUser(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [openMenu, openUser]);

  // Fecha menus com Esc
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(false);
        setOpenUser(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <S.HeaderContainer role="banner" aria-label="Cabeçalho da Lacrei Saúde">
      {/* Logo */}
      <S.Brand>
        <Link href="/" aria-label="Lacrei Saúde — Início">
          <Image src="/logo.svg" alt="Lacrei Saúde" width={140} height={36} priority />
        </Link>
      </S.Brand>

      {/* Navegação */}
      <S.Nav aria-label="Navegação principal">
        {/* Links desktop */}
        <S.DesktopList role="menubar">
          {NAV_LINKS.map((link) => (
            <S.NavItem key={link.href} role="none">
              <Link href={link.href} role="menuitem" passHref legacyBehavior>
                <S.NavLink>{link.label}</S.NavLink>
              </Link>
            </S.NavItem>
          ))}

          {/* Ícone de usuário */}
          <S.NavItem style={{ position: "relative" }}>
            <div ref={userRef}>
              <S.UserButton
                aria-label="Menu do usuário"
                aria-haspopup="true"
                aria-expanded={openUser}
                onClick={() => setOpenUser((prev) => !prev)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    fill="currentColor"
                  />
                </svg>
              </S.UserButton>

              {openUser && <UserPanelLazy onClose={() => setOpenUser(false)} />}
            </div>
          </S.NavItem>
        </S.DesktopList>

        {/* Botão mobile */}
        <S.MenuButton
          aria-controls="mobile-menu"
          aria-expanded={openMenu}
          aria-label={openMenu ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </S.MenuButton>

        {/* Menu mobile */}
        <S.MobilePanel id="mobile-menu" role="menu" aria-label="Menu móvel" open={openMenu} ref={menuRef}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} role="menuitem" passHref legacyBehavior>
              <S.NavLink onClick={() => setOpenMenu(false)}>{link.label}</S.NavLink>
            </Link>
          ))}
          <Link href="/login" passHref legacyBehavior>
            <S.NavLink onClick={() => setOpenMenu(false)}>Login</S.NavLink>
          </Link>
          <Link href="/register" passHref legacyBehavior>
            <S.NavLink onClick={() => setOpenMenu(false)}>Cadastrar</S.NavLink>
          </Link>
        </S.MobilePanel>
      </S.Nav>
    </S.HeaderContainer>
  );
}

// Memoiza o Header
export default memo(HeaderComponent);
