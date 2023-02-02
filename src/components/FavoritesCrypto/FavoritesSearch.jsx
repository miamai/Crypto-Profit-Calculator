import * as React from 'react';
import { useContext, useState } from 'react';
import { Box, Button } from '@mui/material';
import FormContext from '../../store/form-context';
import CryptoSearchInput from '../../UI/CryptoSearchInput';

const FavoritesSearch = () => {
  const { searchItemHandler } = useContext(FormContext);
  const [searchCoin, setSearchCoin] = useState('');
  const submitSearchHandler = (e) => {
    e.preventDefault();
    searchItemHandler(searchCoin);
  };

  const style = {
    display: 'flex',
    mt: [1, 2, null],
    mb: 2,
    gap: [1, 2, null],
  };

  return (
    <div>
      <Box component='form' sx={style} onSubmit={submitSearchHandler}>
        <CryptoSearchInput setEnteredCoin={setSearchCoin} value={searchCoin} />
        <Button type='submit'>確定</Button>
      </Box>
    </div>
  );
};

export default FavoritesSearch;
