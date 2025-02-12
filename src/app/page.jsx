"use client";

import BurgerMenu from "@/components/BurgerMenu";
import ContactUs from "@/components/ContactUs";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import MobileTestimonials from "@/components/MobileTestimonials.jsx";
import Projects from "@/components/Projects";
import ServicesWeProvide from "@/components/ServicesWeProvide";

export default function Homepage() {
  return (
    <>
      <Header />
      <BurgerMenu />
      <Landing />
      <Projects />
      <MobileTestimonials />
      <ServicesWeProvide />
      <ContactUs />
    </>
  );
}
