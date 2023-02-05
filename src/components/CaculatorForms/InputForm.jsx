import { useContext, useState } from 'react';
import { Paper, TextField, Button, Box } from '@mui/material';
import CryptoSearchInput from '../../UI/CryptoSearchInput';
import FormContext from '../../store/form-context';

const InputForm = () => {
  const { addItemHandler } = useContext(FormContext);
  const [enteredCoin, setEnteredCoin] = useState('');
  const [enteredCost, setEnteredCost] = useState('');
  const [enteredQuantity, setEnteredQuantity] = useState('');

  const style = {
    display: 'flex',
    flexDirection: ['column', 'row', null],
    m: [1, 2, null],
    gap: [1, 2, null],
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    addItemHandler(enteredCoin, enteredCost, enteredQuantity);
    setEnteredCost('');
    setEnteredQuantity('');
  };

  return (
    <Paper variant='outlined'>
      <Box component='form' sx={style} onSubmit={submitFormHandler}>
        <CryptoSearchInput
          setEnteredCoin={setEnteredCoin}
          value={enteredCoin}
        />
        <TextField
          id='buy-value'
          variant='filled'
          placeholder=''
          onChange={(e) => {
            setEnteredCost(e.target.value);
          }}
          value={enteredCost}
          label='成本價格 USDT'
        />
        <TextField
          id='buy-quantity'
          variant='filled'
          placeholder=''
          onChange={(e) => setEnteredQuantity(e.target.value)}
          value={enteredQuantity}
          label='成本數量'
        />
        <Button type='submit' variant='contained'>
          確定
        </Button>
      </Box>
    </Paper>
  );
};

export default InputForm;
