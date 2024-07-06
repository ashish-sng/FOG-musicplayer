import React from "react";
import Header from "./Header";
import Herobar from "./Herobar";
import Songs from "./Songs";

const Main = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-gray-800 w-screen">
      <Header />
      <Herobar />
      <Songs />
    </div>
  );
};

export default Main;
