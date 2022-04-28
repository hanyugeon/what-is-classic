import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Baroque from "./components/Baroque";
import Claussicus from "./components/Claussicus";
import Romanticism from "./components/Romanticism";
import Chopin from "./components/Chopin";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/baroque" element={<Baroque />} />
        <Route path="/claussicus" element={<Claussicus />} />
        <Route path="/romanticism" element={<Romanticism />}>
          <Route path="/romanticism/chopin" element={<Chopin />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
