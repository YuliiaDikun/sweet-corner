import "./App.css";
import { ThemeProvider } from 'styled-components';
import { GlobalStyleComponent } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { Main, Cart, Login, Register, SweetsPage, SweetDetails } from "./pages";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
            <Route index element={<Main />} />
            <Route path="sweets" element={<SweetsPage />} />
            <Route path="sweets/:id" element={<SweetDetails />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        </Routes>
        <GlobalStyleComponent />
        <ToastContainer
            autoClose={2000}
            hideProgressBar={true}
            position="top-right"
          />
      </ThemeProvider>
    </>
  );
}

export default App;
