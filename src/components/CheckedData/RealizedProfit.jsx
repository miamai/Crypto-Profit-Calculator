import { Box, Tooltip } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

import CheckedProfitForm from './CheckedProfitForm';

const RealizedProfit = () => {
  const descriptText = `賣出的價格和損益`;

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <h2>結算表</h2>
        <Tooltip title={descriptText} placement='right'>
          <HelpIcon sx={{ color: 'primary.main', fontSize: '18px' }} />
        </Tooltip>
      </Box>
      <CheckedProfitForm />
    </>
  );
};

export default RealizedProfit;
