// src/components/layout/Header.tsx
"use client";

import { useState, useEffect, useRef, memo } from "react";
import Link from "next/link";
import * as S from "./Header.styles";
import { useAuth } from "../../hooks/useAuth";

interface NavLink {
  href: string;
  label: string;
}

// LINKS PRINCIPAIS
const NAV_LINKS: NavLink[] = [
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/ajuda", label: "Ajuda" },
];

const HeaderComponent: React.FC = () => {
  const { user, logout } = useAuth();
  const [openMenu, setOpenMenu] = useState(false);
  const [openUser, setOpenUser] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const userRef = useRef<HTMLDivElement | null>(null);

  // Fechar menus ao clicar fora
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (openMenu && menuRef.current && !menuRef.current.contains(e.target as Node))
        setOpenMenu(false);
      if (openUser && userRef.current && !userRef.current.contains(e.target as Node))
        setOpenUser(false);
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [openMenu, openUser]);

  // Fechar menus com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(false);
        setOpenUser(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const handleLogout = async () => {
    await logout();
    setOpenUser(false);
  };

  // Retorna o primeiro nome do usuário
  const getFirstName = () => {
    if (!user?.displayName) return "Usuário";
    return user.displayName.split(" ")[0];
  };

  return (
    <S.HeaderContainer role="banner" aria-label="Cabeçalho da Lacrei Saúde">
      <S.HeaderInner>
        {/* LOGO */}
        <S.Brand>
          <Link href="/" aria-label="Lacrei Saúde — Início">
            {/* Substituímos o componente Image pelo <img> nativo */}
            <img
              alt="Logo da Lacrei Saúde que redireciona para a página principal"
              loading="lazy"
              decoding="async"
              width="187"
              height="24"
              style={{ color: "transparent" }}
              src="/assets/header/logo_lacrei_desktop.7ae004ab.svg"
            />
          </Link>
        </S.Brand>

        {/* NAVEGAÇÃO */}
        <S.Nav aria-label="Navegação principal">
          <S.List role="menubar">
            {NAV_LINKS.map((link) => (
              <S.Item key={link.href} role="none">
                <Link href={link.href} passHref legacyBehavior>
                  <S.NavLink role="menuitem">{link.label}</S.NavLink>
                </Link>
              </S.Item>
            ))}

            {/* MENU USUÁRIO */}
            <S.Item style={{ position: "relative" }}>
              <div ref={userRef}>
                <S.EnterButton
                  aria-label="Menu de login ou usuário"
                  aria-haspopup="true"
                  aria-expanded={openUser}
                  onClick={() => setOpenUser((prev) => !prev)}
                >
                  {user ? getFirstName() : "Entrar"}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginLeft: "4px" }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </S.EnterButton>

                {openUser && (
                  <S.UserMenu role="menu">
                    {user ? (
                      <S.UserMenuItem onClick={handleLogout}>Sair</S.UserMenuItem>
                    ) : (
                      <>
                        <Link href="/auth/login-patient" passHref legacyBehavior>
                          <S.UserMenuItem as="a" onClick={() => setOpenUser(false)}>
                            Paciente
                          </S.UserMenuItem>
                        </Link>
                        <Link href="/auth/login-professionals" passHref legacyBehavior>
                          <S.UserMenuItem as="a" onClick={() => setOpenUser(false)}>
                            Profissional
                          </S.UserMenuItem>
                        </Link>
                      </>
                    )}
                  </S.UserMenu>
                )}
              </div>
            </S.Item>
          </S.List>

          {/* BOTÃO MOBILE */}
          <S.MenuButton
            aria-controls="mobile-menu"
            aria-expanded={openMenu}
            aria-label={openMenu ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
              />
            </svg>
          </S.MenuButton>

          {/* MENU MOBILE */}
          <S.MobilePanel open={openMenu} ref={menuRef} role="menu" aria-label="Menu móvel">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} passHref legacyBehavior>
                <S.NavLink onClick={() => setOpenMenu(false)}>{link.label}</S.NavLink>
              </Link>
            ))}

            {/* Dropdown usuário mobile */}
            <S.NavLink as="div" style={{ borderBottom: "none" }}>
              {user ? (
                <S.UserMenuItem onClick={handleLogout}>Sair ({getFirstName()})</S.UserMenuItem>
              ) : (
                <>
                  <Link href="/auth/login-patient" passHref legacyBehavior>
                    <S.UserMenuItem as="a" onClick={() => setOpenMenu(false)}>
                      Paciente
                    </S.UserMenuItem>
                  </Link>
                  <Link href="/auth/login-professionals" passHref legacyBehavior>
                    <S.UserMenuItem as="a" onClick={() => setOpenMenu(false)}>
                      Profissional
                    </S.UserMenuItem>
                  </Link>
                </>
              )}
            </S.NavLink>
          </S.MobilePanel>
        </S.Nav>
      </S.HeaderInner>
    </S.HeaderContainer>
  );
};

HeaderComponent.displayName = "HeaderComponent";

export default memo(HeaderComponent);
