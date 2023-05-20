import { useRef, useContext, useState } from 'react';
import { useNavigate } from 'react-router';

import {
  Box,
  Grid,
  FormControl,
  Hidden,
  Typography,
  Button,
  TextField,
  CircularProgress,
} from '@mui/material';
import { landingTheme } from '../../UI/consts/themeOption';
import { onAuth, isAuthStateChanged } from './auth';
import FormContext from '../../store/form-context';

const LandingPage = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [buttonLoading, setButtonLoading] = useState(false);
  const { initHandler } = useContext(FormContext);
  const navigate = useNavigate();

  const signInHandler = async (e) => {
    e.preventDefault();
    setButtonLoading(true);
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const res = await onAuth(enteredEmail, enteredPassword);
    if (res) {
      const { inputData, outputData, searchData } = res.data;
      initHandler(inputData, outputData, searchData);
    }

    const user = await new Promise((resolve) => {
      isAuthStateChanged((user) => {
        resolve(user);
      });
    });
    if (user) {
      navigate('/home');
    }
  };

  return (
    <Grid sx={landingTheme.gridContainer} container>
      <Hidden smUp>
        <Box sx={landingTheme.mobileBox}>
          <Typography
            variant={'h3'}
            sx={landingTheme.brand}
            color='primary.main'
            gutterBottom
          >
            CRYPTO PROFITS
          </Typography>
          <Typography>
            Start calculate your profit\loss when investing in cryptos!
          </Typography>
        </Box>
      </Hidden>
      <Hidden only={'xs'}>
        <Grid
          container
          alignItems='center'
          item
          // Grid container 12 by default
          sm={6}
          sx={landingTheme.gridItemBanner}
        >
          <Box sx={landingTheme.content}>
            <Typography variant={'h3'} sx={landingTheme.brand} gutterBottom>
              CRYPTO PROFITS
            </Typography>
            <Typography>
              Start calculate your profit\loss when investing in cryptos!
            </Typography>
            <br />
            <Typography>
              串聯幣安API，計算你台幣買賣損益外，可幫你保存紀錄
            </Typography>
            <br />
            <img
              src='/images/TransactionalSMS.svg'
              width='65%'
              alt='trader picture'
            />
          </Box>
        </Grid>
      </Hidden>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        direction='column'
        textAlign='center'
        item
        xs={12}
        sm={6}
        md={5}
      >
        <Box component='form' sx={landingTheme.form} onSubmit={signInHandler}>
          <TextField
            fullWidth
            label='信箱'
            margin='normal'
            variant='filled'
            type='text'
            id='email'
            placeholder='test123@testmail.com'
            required
            inputRef={emailInputRef}
          />
          <TextField
            fullWidth
            label='密碼'
            margin='normal'
            variant='filled'
            type='password'
            id='password'
            placeholder='test123'
            required
            inputRef={passwordInputRef}
          />
          <FormControl
            margin={'normal'}
            fullWidth
            sx={{ position: 'relative' }}
          >
            <Button type='submit' variant='contained' disabled={buttonLoading}>
              登入 / 註冊
            </Button>
            {buttonLoading && (
              <CircularProgress
                size='24px'
                thickness={6}
                sx={{
                  color: 'primary.main',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
            )}
          </FormControl>
          <Typography sx={{ mt: 8 }}>
            Test account: test123@testmail.com
            <br />
            password: test123
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
