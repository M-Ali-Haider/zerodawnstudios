import Header from "@/components/Header";
import Landing from "@/components/Landing";
import MaskScroll from "@/components/MaskScroll";
import Projects from "@/components/Projects";

export default function Homepage() {
  return (
    <>
      <Header />
      <Landing />
      <Projects />
      <MaskScroll />
      <div className="bg-purple-500 h-screen"></div>
    </>
  );
}
