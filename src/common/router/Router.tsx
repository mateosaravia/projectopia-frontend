import { Routes, Route } from 'react-router-dom';

import LoginForm from '../../pages/Auth/login/components/LoginForm';
import SignupForm from '../../pages/Auth/signup/components/SignupForm';
import HomeLayout from '../../pages/Home/HomeLayout';

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/home" element={<HomeLayout />} />
    </Routes>
  );
};

export default Router;
