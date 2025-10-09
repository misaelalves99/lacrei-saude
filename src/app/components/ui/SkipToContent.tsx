// src/components/ui/SkipToContent.tsx

import React from "react";

export const SkipToContent: React.FC = () => {
  return (
    <a href="#main-content" id="skip-to-content" tabIndex={0}>
      Pular para o Conteúdo Principal
    </a>
  );
};
