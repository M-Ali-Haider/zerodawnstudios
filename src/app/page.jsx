import ContactUs from "@/components/ContactUs";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import ServicesWeProvide from "@/components/ServicesWeProvide";

export default function Homepage() {
  return (
    <>
      <Header />
      <Landing />
      <Projects />
      <ServicesWeProvide />
      <ContactUs />
    </>
  );
}
