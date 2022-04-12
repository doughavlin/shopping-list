import React, { useState } from "react";
import ItemList from "./components/ItemList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListItem from "./components/ListItem";
import TopBar from "./components/TopBar";

export default function App({ defaultList = [] }) {
  const [list, setList] = useState(defaultList);

  return (
    <BrowserRouter>
      <TopBar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<ItemList list={list} setList={setList} />}
          />
          <Route
            path="/add"
            element={<ListItem list={list} setList={setList} />}
          />
          <Route
            path="/edit/:item"
            element={<ListItem list={list} setList={setList} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
