import { Box, Button, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
  const style = {
    titleText: {
      display: 'inline-block',
      pb: '5px',
      color: 'primary.main',
      borderBottom: '2px solid #F5B041',
    },
  };
  return (
    <Box
      sx={{
        pt: '48px',
        pr: { xs: '16px', sm: '24px' },
        pl: { xs: '16px', sm: '24px' },
        m: '0 auto',
        maxWidth: '900px',
      }}
    >
      <ul>
        <Button
          variant='outlined'
          sx={{
            fontSize: '16px',
            backgroundColor: '#f5f5f5',
            mb: '16px',
          }}
        >
          <GitHubIcon sx={{ pr: '8px' }} />
          Check my Code Source
        </Button>
      </ul>
      <ul>
        <Typography sx={style.titleText} variant='h5'>
          Technologies
        </Typography>
        <Typography variant='h6' component={'div'}>
          <li>React, React-Router</li>
          <li>
            Firebase: Login/Logout, Authentication, Fetch/Store user's crypto
            information, Database
          </li>
          <li>HighCharts: Draw 24hr crypto history chart</li>
          <li>MUI: UI library</li>
        </Typography>
      </ul>
      <ul>
        <Typography variant='h5' sx={style.titleText}>
          API use
        </Typography>
        <Typography variant='h6' component={'div'}>
          <li>Binance Api: Fetch USDT trading pairs</li>
          <li>Coinbase Api: USDT/TWD ratio</li>
          <li>Rapid Api/ Bing News Search Api: Crypto news</li>
        </Typography>
      </ul>
      <ul>
        <Typography variant='h5' sx={style.titleText}>
          構想與使用
        </Typography>
        <Typography variant='h6'>
          以前用Google sheet串聯Binance Api來計算，因此學習後希望能製作一個web
          app計算外，並且能有更多功能，所以後面加上紀錄保存、即時消息、存取最愛等使用。
        </Typography>
      </ul>
    </Box>
  );
};

export default About;
