import React from "react";
import { Routes, Route } from "react-router-dom";
import WikiLandingPage from "./pages/wikiLandingsPage";
import DetailPage from "./pages/wikiDetailPage";
import ParallaxPage from "./pages/parallaxPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WikiLandingPage />} />
      <Route path="detailpage/:id" element={<DetailPage />} />
      <Route path="parallax" element={<ParallaxPage />} />
    </Routes>
  );
}

export default App;
