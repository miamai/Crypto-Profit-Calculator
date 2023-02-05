import { Outlet } from 'react-router-dom';
import HeaderBar from './components/Home/HeaderBar';

const AuthLayout = () => {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  );
};

export default AuthLayout;
