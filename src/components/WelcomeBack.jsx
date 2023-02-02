import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';
import { onGetData } from './Login/auth';
import FormContext from '../store/form-context';

const style = {
  box: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
  },
  router: {
    color: '#0071f2',
    textDecoration: 'none',
  },
};

const WelcomeBack = () => {
  const [userName, setUserName] = useState('');
  const { initHandler } = useContext(FormContext);

  useEffect(() => {
    onGetData().then((res) => {
      const { inputData, outputData, searchData } = res.data;
      setUserName(res.user_name);
      initHandler(inputData, outputData, searchData);
    });
  }, []);

  return (
    <Box sx={style.box}>
      <img src='/images/Personal-finance.svg' width='40%' alt='welcome back' />
      <Typography lineHeight='1' fontWeight='900' variant='h1'>
        WelcomeBack! {userName}
      </Typography>
      <Button>
        <Typography variant='h3'>
          <Link style={style.router} to={'/home'}>
            Go back to Account
          </Link>
        </Typography>
      </Button>
    </Box>
  );
};

export default WelcomeBack;
