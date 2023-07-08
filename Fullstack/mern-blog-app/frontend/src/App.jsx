// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Footer, Header } from "./components";
import { ArticleDetailPage, EditorPage, HomePage, LoginPage, ProfilePage, RegisterPage } from './pages'

function App() {
  return (
    <div className="App font-opensans">
      <Header />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/editor" element={<EditorPage/>}/>
        <Route path="/articles/:slug" element={<ArticleDetailPage />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
