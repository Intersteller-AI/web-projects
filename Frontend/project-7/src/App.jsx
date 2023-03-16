import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { Feed, VideoDetail, ChannelDetail, SearchFeed } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full relative">
        <Sidebar />
        <div className="w-full">
          <Navbar />
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
