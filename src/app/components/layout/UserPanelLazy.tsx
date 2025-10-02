// src/components/layout/UserPanelLazy.tsx
"use client";

import Link from "next/link";
import { UserPanelContainer, UserPanelLink } from "./UserPanelLazy.styles";

interface Props {
  onClose: () => void;
}

export default function UserPanelLazy({ onClose }: Props) {
  return (
    <UserPanelContainer role="menu" aria-label="Opções do usuário">
      <Link href="/login" passHref legacyBehavior>
        <UserPanelLink onClick={onClose}>Login</UserPanelLink>
      </Link>
      <Link href="/register" passHref legacyBehavior>
        <UserPanelLink onClick={onClose}>Cadastrar</UserPanelLink>
      </Link>
    </UserPanelContainer>
  );
}
