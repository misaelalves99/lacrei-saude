// page.tsx
"use client";

import { Hero } from "./components/home/Hero";
import { CTASection } from "./components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CTASection />
    </>
  );
}
