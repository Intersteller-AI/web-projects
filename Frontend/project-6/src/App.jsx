import React from "react";
import { Hero, Sidebar } from "./components";


const App = () => {
  return (
    <div className="w-full flex justify-between bg-darkBlue md:pl-[250px]">
      <Sidebar />
      <Hero />
    </div>
  );
};

export default App;
