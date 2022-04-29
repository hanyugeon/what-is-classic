import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Baroque from "./components/Baroque";
import Claussicus from "./components/Claussicus";
import Romanticism from "./components/Romanticism";
import Bach from "./components/Bach";
import Handel from "./components/Handel";
import Vivaldi from "./components/Vivaldi";
import Mozart from "./components/Mozart";
import Beethoven from "./components/Beethoven";
import Chopin from "./components/Chopin";
import Liszt from "./components/Liszt";
import Rachmaninoff from "./components/Rachmaninoff";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/baroque" element={<Baroque />}>
          <Route path="/baroque/bach" element={<Bach />} />
          <Route path="/baroque/handel" element={<Handel />} />
          <Route path="/baroque/vivaldi" element={<Vivaldi />} />
        </Route>
        <Route path="/claussicus" element={<Claussicus />}>
          <Route path="/claussicus/mozart" element={<Mozart />} />
          <Route path="/claussicus/beethoven" element={<Beethoven />} />
        </Route>
        <Route path="/romanticism" element={<Romanticism />}>
          <Route path="/romanticism/chopin" element={<Chopin />} />
          <Route path="/romanticism/liszt" element={<Liszt />} />
          <Route path="/romanticism/rachmaninoff" element={<Rachmaninoff />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
