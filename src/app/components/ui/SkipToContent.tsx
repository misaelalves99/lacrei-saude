// src/components/ui/SkipToContent.tsx

"use client";

import React from "react";
import { SkipLink } from "./SkipToContent.styles";

export const SkipToContent: React.FC = () => {
  return (
    <SkipLink href="#main-content">
      Pular para o conteúdo principal
    </SkipLink>
  );
};
