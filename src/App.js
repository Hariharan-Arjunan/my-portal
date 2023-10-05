import { ThemeProvider } from "styled-components";
import "./App.css";
import LightColorPalette from "./themes/light/LightColorPalette";
import FullPage from "./pages/FullPage/FullPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Crud from "./pages/Crud/Crud";

function App() {
  return (
    <>
      <ThemeProvider theme={LightColorPalette}>
        <BrowserRouter>
          <Routes>
            <Route element={<FullPage />}>
              <Route path="/" element={<Crud />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
