import "@testing-library/jest-dom";

// Mock do Next.js navigation
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
  }),
}));

// Mock do next/image
import React from "react";
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => React.createElement("img", props),
}));
