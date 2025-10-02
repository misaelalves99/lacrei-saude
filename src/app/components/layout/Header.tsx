// src/components/layout/Header.tsx

'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as S from './Header.styles'

const NAV_LINKS = [
  { href: '/servicos', label: 'Serviços' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (!panelRef.current) return
      if (open && !panelRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [open])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <S.HeaderContainer role="banner" aria-label="Cabeçalho da Lacrei Saúde">
      <S.Brand>
        <Link href="/" aria-label="Lacrei Saúde — Início">
          <Image src="/logo.svg" alt="Lacrei Saúde" width={140} height={36} priority />
        </Link>
      </S.Brand>

      <S.Nav aria-label="Navegação principal">
        <S.DesktopList role="menubar">
          {NAV_LINKS.map((link) => (
            <S.NavItem key={link.href} role="none">
              <Link href={link.href} role="menuitem" passHref legacyBehavior>
                <S.NavLink>{link.label}</S.NavLink>
              </Link>
            </S.NavItem>
          ))}
        </S.DesktopList>

        <S.MenuButton
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </S.MenuButton>

        <S.MobilePanel id="mobile-menu" role="menu" aria-label="Menu móvel" open={open} ref={panelRef}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} role="menuitem" passHref legacyBehavior>
              <S.NavLink onClick={() => setOpen(false)}>{link.label}</S.NavLink>
            </Link>
          ))}
        </S.MobilePanel>
      </S.Nav>
    </S.HeaderContainer>
  )
}
