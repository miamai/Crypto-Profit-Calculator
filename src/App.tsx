import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { theme } from './UI/consts/themeOption';
import RealizedProfit from './components/CheckedData/RealizedProfit';
import MyCurrency from './components/FavoritesCrypto/MyCurrency';
import MyProfit from './components/CaculatorForms/MyProfit';
import LandingPage from './components/Login/LandingPage';
import NotFound from './components/NotFound';
import { isAuthStateChanged } from './components/Login/auth';
import HomeTabs from './components/Home/HomeTabs';
import WelcomeBack from './components/WelcomeBack';
import News from './components/Home/News';
import FormProvider from './store/FormProvider';
import AuthLayout from './AuthLayout';
import About from './components/Home/About';

const setDefaultBody = (color, margin) => {
  document.body.style.backgroundColor = color;
  document.body.style.margin = margin;
};

function App() {
  setDefaultBody(theme.palette.background.default, 0);

  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(true);

  const style = {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    color: 'text.primary',
  };

  useEffect(() => {
    const ifIsLogginIn = isAuthStateChanged((user) => {
      if (user) {
        setAuthed(true);
        setLoading(false);
      } else {
        setAuthed(false);
        setLoading(false);
      }
    });
    return () => ifIsLogginIn();
  }, []);

  return loading ? (
    <Box
      sx={{
        ...style,
        gap: '16px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h5'>Loading...</Typography>
      <img src='/images/loading-1-200px.svg' alt='Loading...' width='64' />
    </Box>
  ) : (
    <Box sx={{ ...style }}>
      <FormProvider>
        <BrowserRouter>
          <Routes>
            {authed ? (
              <>
                <Route path='/' element={<WelcomeBack />} />
                <Route path='/' element={<AuthLayout />}>
                  <Route path='/home' element={<HomeTabs />}>
                    <Route path='account' element={<MyProfit />} />
                    <Route path='mycurrency' element={<MyCurrency />} />
                    <Route
                      path='realized-profit'
                      element={<RealizedProfit />}
                    />
                  </Route>
                  <Route path='/news' element={<News />} />
                  <Route path='/about' element={<About />} />
                </Route>
              </>
            ) : (
              <Route path='/' element={<LandingPage />} />
            )}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </FormProvider>
    </Box>
  );
}

export default App;
