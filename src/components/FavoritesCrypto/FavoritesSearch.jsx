import * as React from 'react';
import { useContext, useState } from 'react';
import { Box, Button, Tooltip } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import FormContext from '../../store/form-context';
import CryptoSearchInput from '../../UI/CryptoSearchInput';

const FavoritesSearch = () => {
  const { searchItemHandler } = useContext(FormContext);
  const [searchCoin, setSearchCoin] = useState('');
  const submitSearchHandler = (e) => {
    e.preventDefault();
    searchItemHandler(searchCoin);
  };
  const descriptText = `搜尋並增加您所感興趣的貨幣。前一頁中所輸入的貨幣會自動幫您加入`;

  const style = {
    display: 'flex',
    mb: 2,
    gap: [1, 2, null],
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <h2>我的貨幣表</h2>
        <Tooltip title={descriptText} placement='right'>
          <HelpIcon sx={{ color: 'primary.main', fontSize: '18px' }} />
        </Tooltip>
      </Box>
      <Box component='form' sx={style} onSubmit={submitSearchHandler}>
        <CryptoSearchInput setEnteredCoin={setSearchCoin} value={searchCoin} />
        <Button type='submit'>確定</Button>
      </Box>
    </>
  );
};

export default FavoritesSearch;
