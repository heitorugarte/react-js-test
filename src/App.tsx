import "./App.css";

import { Routes, Route } from "react-router-dom";

import { LoginPage, SignUpPage } from "./pages";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}
