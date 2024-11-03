import Header from "@/components/Header";
import Landing from "@/components/Landing";
import MaskScroll from "@/components/MaskScroll";
import Projects from "@/components/Projects";
import ServicesWeProvide from "@/components/ServicesWeProvide";

export default function Homepage() {
  return (
    <>
      <Header />
      <Landing />
      <Projects />
      <MaskScroll />
      <ServicesWeProvide />
      <div className="h-screen bg-black"></div>
    </>
  );
}
