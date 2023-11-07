
import { Outlet } from "react-router-dom";
import Header from "../src/Header";
import Nav from "../src/Nav";
import Footer from "../src/Footer";

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