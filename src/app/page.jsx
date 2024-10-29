import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";

export default function Homepage() {
  return (
    <>
      <Header />
      <Landing />
      <Projects />
      <div className="h-screen"></div>
    </>
  );
}
