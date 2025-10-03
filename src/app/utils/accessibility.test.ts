// src/utils/accessibility.test.ts

import { focusElement, getContrastRatio, isAccessibleContrast } from "./accessibility";

describe("accessibility utils", () => {
  describe("focusElement", () => {
    it("deve focar o elemento pelo seletor e adicionar tabindex", () => {
      document.body.innerHTML = `<div id="main-content">Conteúdo</div>`;
      const element = document.getElementById("main-content")!;
      
      focusElement("#main-content");

      expect(document.activeElement).toBe(element);
      expect(element.getAttribute("tabindex")).toBe("-1");
    });

    it("não deve lançar erro se o elemento não existir", () => {
      expect(() => focusElement("#inexistente")).not.toThrow();
    });
  });

  describe("getContrastRatio", () => {
    it("deve calcular a razão de contraste corretamente", () => {
      const ratio = getContrastRatio("#000000", "#ffffff"); // preto e branco
      expect(ratio).toBeCloseTo(21); // contraste máximo
    });

    it("deve retornar 1 para cores iguais", () => {
      const ratio = getContrastRatio("#123456", "#123456");
      expect(ratio).toBeCloseTo(1);
    });
  });

  describe("isAccessibleContrast", () => {
    it("deve retornar true se a razão de contraste >= 4.5", () => {
      expect(isAccessibleContrast("#000000", "#ffffff")).toBe(true);
    });

    it("deve retornar false se a razão de contraste < 4.5", () => {
      expect(isAccessibleContrast("#777777", "#999999")).toBe(false);
    });
  });
});
