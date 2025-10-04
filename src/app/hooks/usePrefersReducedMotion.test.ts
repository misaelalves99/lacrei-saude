// src/hooks/usePrefersReducedMotion.test.ts

import { renderHook, act } from "@testing-library/react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

describe("usePrefersReducedMotion hook", () => {
  const listeners: Record<string, (event: MediaQueryListEvent) => void> = {};
  let addEventListenerMock: jest.Mock;
  let removeEventListenerMock: jest.Mock;

  beforeAll(() => {
    addEventListenerMock = jest.fn((event, handler) => {
      listeners[event] = handler;
    });
    removeEventListenerMock = jest.fn((event) => {
      delete listeners[event];
    });

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: (query: string) => ({
        matches: query === "(prefers-reduced-motion: reduce)" ? false : false,
        media: query,
        addEventListener: addEventListenerMock,
        removeEventListener: removeEventListenerMock,
        dispatchEvent: (event: MediaQueryListEvent) => {
          if (listeners[event.type]) listeners[event.type](event);
        },
      } as unknown as MediaQueryList),
    });
  });

  it("inicialmente retorna false quando não prefere reduzir animações", () => {
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(false);
  });

  it("retorna true quando preferências do sistema mudam para reduzir animações", () => {
    const { result } = renderHook(() => usePrefersReducedMotion());

    act(() => {
      const event = { matches: true, type: "change" } as MediaQueryListEvent;
      listeners.change(event);
    });

    expect(result.current).toBe(true);
  });

  it("remove listener ao desmontar o hook", () => {
    const { unmount } = renderHook(() => usePrefersReducedMotion());
    unmount();
    expect(removeEventListenerMock).toHaveBeenCalledWith("change", expect.any(Function));
  });
});
