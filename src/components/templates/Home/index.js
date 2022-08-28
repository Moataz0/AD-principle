import React from "react";
import "./style.css"
import { Nav, Header, Content,Footer } from "../../";

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <div className="homeContainer">
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
