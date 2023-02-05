import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';
import FormContext from '../store/form-context';
import { authFirebase, onGetData } from './Login/auth';

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

const NotFound = () => {
  const [backLink, setBackLink] = useState(null);
  const { initHandler } = useContext(FormContext);

  useEffect(() => {
    if (authFirebase.currentUser !== null) {
      onGetData().then((res) => {
        const { inputData, outputData, searchData } = res.data;
        initHandler(inputData, outputData, searchData);
        console.log(inputData, outputData, searchData);
      });

      setBackLink(
        <Link style={style.router} to={'/home'}>
          Go Back to Account
        </Link>
      );
    } else
      setBackLink(
        <Link style={style.router} to={'/'}>
          Go Back Login
        </Link>
      );
  }, []);

  return (
    <Box sx={style.box}>
      <img src='/images/404NotFound.svg' width='40%' alt='404' />
      <Typography lineHeight='1' fontWeight='900' variant='h1'>
        404
      </Typography>
      <Button>
        <Typography variant='h3'>{backLink}</Typography>
      </Button>
    </Box>
  );
};

export default NotFound;
