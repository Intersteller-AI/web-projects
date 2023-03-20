import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Navigation, Sidebar } from "./components";
import { Feed, VideoDetail, ChannelDetail, SearchFeed } from "./pages";

const App = () => {

  // Outputs: 'https://timmousk.com/blog/react-get-current-url/'
  // console.log(window.location.href);

  // Outputs: 'https:'
  // console.log(window.location.protocol);

  // Outputs: 'timmousk.com'
  // console.log(window.location.hostname);

  // Outputs: '/blog/react-get-current-url/'

  return (
    <BrowserRouter>
      <div className="w-full relative">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <Navigation />
          <div className="w-full min-h-screen mt-14 bg-pureBlack text-white">
            <Routes>
              <Route path="/" exact element={<Feed />} />
              <Route path="/video/:id" element={<VideoDetail />} />
              <Route path="/channel/:id" element={<ChannelDetail />} />
              <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
