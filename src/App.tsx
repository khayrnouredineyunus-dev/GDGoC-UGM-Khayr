import { Routes, Route } from "react-router";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
