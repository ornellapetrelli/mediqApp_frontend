import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterChoicePage from "./pages/RegisterChoicePage/RegisterChoicePage";
import RegisterPatientPage from "./pages/RegisterPatientPage/RegisterPatientPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route
        path="/registro"
        element={<RegisterChoicePage />}
      />

      <Route
        path="/registro/paciente"
        element={<RegisterPatientPage />}
      />

    </Routes>
  );
}

export default App;