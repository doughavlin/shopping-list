import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import ItemList from "./components/ItemList";
import ListItem from "./components/ListItem";
import TopBar from "./components/TopBar";

const THEME = createTheme({
  typography: {
    fontFamily: `"Nunio", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default function App({ defaultList = [] }) {
  const [list, setList] = useState(defaultList);

  return (
    <BrowserRouter>
      <ThemeProvider theme={THEME}>
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
      </ThemeProvider>
    </BrowserRouter>
  );
}
