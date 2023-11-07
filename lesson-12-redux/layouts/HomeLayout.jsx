
import { Outlet } from "react-router-dom";
import Header from "../src/components/Header";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";

const HomeLayout = () => {
  return (
    <div className="App">
      <Header title="DLT Student Blog" />
      <Nav  />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;