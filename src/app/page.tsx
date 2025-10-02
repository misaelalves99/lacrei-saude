// src/app/page.tsx

"use client";

import React from "react";
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
