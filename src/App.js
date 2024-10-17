import React from "react";
import Navbar from "./componenets/navbar";
import Hero from "./componenets/Hero";
import About from "./componenets/about";
import Experience from "./componenets/experience";
import './styles.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Projects from "./componenets/project";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
<Experience/>
<Projects/>
      {/* Add Projects, Education, and Contact Components here */}
    </>
  );
}

export default App;
