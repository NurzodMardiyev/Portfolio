import { Route, Router, Routes } from "react-router-dom";
import "./App.css";

import "./fonts/satoshi.css";
import LandingPage from "./pages/LandingPage";
import Landing from "./pages/Landing";
import AllProjects from "./components/AllProjects";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<LandingPage />}>
          <Route path="" element={<Landing />} />
          <Route path="/works" element={<AllProjects />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
