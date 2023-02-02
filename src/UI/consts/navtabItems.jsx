import React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SavingsIcon from '@mui/icons-material/Savings';
import MyCurrency from '../../components/FavoritesCrypto/MyCurrency';
import MyProfit from '../../components/CaculatorForms/MyProfit';
import RealizedProfit from '../../components/CheckedData/RealizedProfit';

export const navtabItems = [
  {
    id: 0,
    icon: <AccountBoxIcon />,
    label: '我的頁面',
    value: '/account',
    route: 'account',
    to: <MyProfit />,
  },
  {
    id: 1,
    icon: <CurrencyExchangeIcon />,
    label: '我的貨幣',
    value: '/mycurrency',
    route: 'mycurrency',
    to: <MyCurrency />,
  },
  {
    id: 2,
    icon: <SavingsIcon />,
    label: '已實現交易',
    value: '/realized-profit',
    route: 'realized-profit',
    to: <RealizedProfit />,
  },
];
