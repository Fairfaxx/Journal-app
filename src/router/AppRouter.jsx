import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthRoutes from '../auth/routes/AuthRoutes';
import JournalRoutes from '../journal/routes/JournalRoutes';
import CheckingAuth from '../ui/components/CheckingAuth';

const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);

  if (status === 'checking') {
    return <CheckingAuth />;
  }

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
