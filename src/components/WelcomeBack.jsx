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
      <Typography lineHeight='1' variant='h3' p='16px'>
        WelcomeBack | {userName}
      </Typography>
      <Button>
        <Typography variant='h4'>
          <Link style={style.router} to={'/home'}>
            Go back to Account
          </Link>
        </Typography>
      </Button>
    </Box>
  );
};

export default WelcomeBack;
