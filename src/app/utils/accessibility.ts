// src/utils/accessibility.ts

/**
 * Funções utilitárias para acessibilidade (a11y)
 */

/**
 * Move o foco para um seletor CSS específico (ex.: "#main-content").
 */
export function focusElement(selector: string): void {
  const element = document.querySelector<HTMLElement>(selector);
  if (element) {
    element.setAttribute("tabindex", "-1"); // garante foco em elementos não focáveis
    element.focus();
  }
}

/**
 * Verifica contraste entre duas cores em hexadecimal.
 * Retorna a razão de contraste.
 */
export function getContrastRatio(hex1: string, hex2: string): number {
  function luminance(hex: string) {
    const rgb = hex
      .replace("#", "")
      .match(/.{2}/g)!
      .map((c) => parseInt(c, 16) / 255)
      .map((v) =>
        v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
      );
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  }

  const lum1 = luminance(hex1);
  const lum2 = luminance(hex2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Verifica se a razão de contraste atende o WCAG AA (mínimo 4.5).
 */
export function isAccessibleContrast(hex1: string, hex2: string): boolean {
  return getContrastRatio(hex1, hex2) >= 4.5;
}
