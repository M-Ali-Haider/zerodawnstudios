import Header from "../Header";
import Landing from "../Landing";
import MaskScroll from "../MaskScroll";
import Projects from "../Projects";

const Home = () => {
  return (
    <>
      <Header />
      <Landing />
      <Projects />
      <MaskScroll />
      <div className="bg-purple-500 h-screen"></div>
    </>
  );
};

export default Home;
