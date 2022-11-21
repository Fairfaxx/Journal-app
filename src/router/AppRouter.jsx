import { Navigate, Route, Routes } from "react-router-dom";
import AuthRoutes from "../auth/routes/AuthRoutes";
import JournalRoutes from "../journal/routes/JournalRoutes";

const AppRouter = () => {
  return (
    <Routes>
      {/* For Login and Register */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* For the Journal */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};

export default AppRouter;
