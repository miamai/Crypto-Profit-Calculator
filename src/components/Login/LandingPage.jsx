import React from 'react';
import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router';

import {
  Box,
  Grid,
  FormControl,
  Hidden,
  Typography,
  Button,
  TextField,
} from '@mui/material';
import { landingTheme } from '../../UI/consts/themeOption';
import { onAuth, isAuthStateChanged } from './auth';
import FormContext from '../../store/form-context';

const LandingPage = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const { initHandler } = useContext(FormContext);
  const navigate = useNavigate();

  const signInHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let emailRegex =
      /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(String(enteredEmail).toLowerCase())) {
      alert('請輸入正確信箱');
    }
    if (enteredPassword.length < 6) {
      alert('密碼至少6位');
    }

    onAuth(enteredEmail, enteredPassword).then((res) => {
      const { inputData, outputData, searchData } = res.data;
      initHandler(inputData, outputData, searchData);
    });

    isAuthStateChanged((user) => {
      if (user) {
        navigate('/home');
      }
    });
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
          sm={6}
          md={7}
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
            <img src='/images/TransactionalSMS.svg' width='70%' />
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
          <FormControl margin={'normal'} fullWidth>
            <Button type='submit' variant='contained'>
              登入 / 註冊
            </Button>
          </FormControl>
          <Typography sx={{ mt: 8 }}>
            Test account: test123@testmail.com
            <br />
            password: test123
          </Typography>
          {/* {isLoading ? (
            <img src='/images/loading-200px.svg' alt='Loading...' width='24' />
          ) : (
            <div>{msg}</div>
          )} */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
