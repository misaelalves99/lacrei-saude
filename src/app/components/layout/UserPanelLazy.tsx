// src/components/Header/UserPanelLazy.tsx
"use client";

import Link from "next/link";
import * as S from "./Header.styles";

interface Props {
  onClose: () => void;
}

export default function UserPanelLazy({ onClose }: Props) {
  return (
    <S.UserPanel role="menu" aria-label="Opções do usuário">
      <Link href="/login" passHref legacyBehavior>
        <S.NavLink onClick={onClose}>Login</S.NavLink>
      </Link>
      <Link href="/register" passHref legacyBehavior>
        <S.NavLink onClick={onClose}>Cadastrar</S.NavLink>
      </Link>
    </S.UserPanel>
  );
}
