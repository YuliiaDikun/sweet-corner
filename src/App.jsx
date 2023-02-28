import "./App.css";
import { ThemeProvider } from 'styled-components';
import { GlobalStyleComponent } from './styles/GlobalStyles';
import { theme } from './styles/theme';

import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { Main, Cart, Login } from "./pages";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        </Routes>
        <GlobalStyleComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
