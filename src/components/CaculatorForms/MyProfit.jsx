import { useContext } from 'react';
import { Tooltip, Box } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import FormContext from '../../store/form-context';
import InputForm from './InputForm';
import ProfitForm from './ProfitForm';

const MyProfit = () => {
  const { inputList } = useContext(FormContext);
  const descriptText = `一鍵輸入!以USDT貨幣交易對，計算您的台幣損益`;
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <h2>損益計算表</h2>
        <Tooltip title={descriptText} placement='right'>
          <HelpIcon sx={{ color: 'primary.main', fontSize: '18px' }} />
        </Tooltip>
      </Box>
      <InputForm />
      {inputList.length > 0 && <ProfitForm />}
    </>
  );
};

export default MyProfit;
