import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SignInPage";
import HomePage from "./pages/HomePage/HomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signIn" element={<SignInPage />} />
    </Routes>
  );
}

export default App;
