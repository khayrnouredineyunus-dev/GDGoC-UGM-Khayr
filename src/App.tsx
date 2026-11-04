import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Overview from "./pages/Overview";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/overview" element={<Overview />} />
    </Routes>
  );
}
