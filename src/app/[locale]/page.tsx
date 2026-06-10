import Clients from "@/components/Clients";
import Consultants from "@/components/Consultants";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import { setRequestLocale } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Consultants />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
