import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CardsSection from "@/components/CardsSection";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <CardsSection />
    </>
  );
}
