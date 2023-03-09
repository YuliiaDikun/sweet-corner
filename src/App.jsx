import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyleComponent } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const MainPage = lazy(() => import("./pages/Main"));
const SweetsPage = lazy(() => import("./pages/SweetsPages/Sweets"));
const SweetDetails = lazy(() => import("./pages/SweetsPages/Sweet"));
const LoginPage = lazy(() => import("./pages/authPages/Login"));
const RegisterPage = lazy(() => import("./pages/authPages/Register"));
const CartPage = lazy(() => import("./pages/Cart/Cart"));

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route path="sweets" element={<SweetsPage />} />
            <Route path="sweets/:id" element={<SweetDetails />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
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
