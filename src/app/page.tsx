// page.tsx
"use client";

import { Hero } from "./components/sections/Hero";
import { CTASection } from "./components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CTASection />
    </>
  );
}
