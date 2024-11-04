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
      <div className="h-screen bg-black"></div>
    </>
  );
}
