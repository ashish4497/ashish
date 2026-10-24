import type { Metadata } from "next";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Experience — Ashish Kumar, Frontend Developer",
  description:
    "Explore Ashish Kumar’s frontend development experience, selected roles at WebHopers, TechChefs, and LDT Technologies, technical skills, and education.",
};

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <Experience />
      <Footer />
    </>
  );
}
