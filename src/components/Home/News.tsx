import { useState } from 'react';
import moment from 'moment';
import {
  Grid,
  Typography,
  Avatar,
  Card,
  CardActionArea,
  Autocomplete,
  Box,
  TextField,
} from '@mui/material';
import { useFetchNews } from '../../hook/fetchNews';
import { cryptoList } from '../../UI/CryptoSearchInput';

const style = {
  loadingBox: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBox: { display: 'flex', flexDirection: 'column', gap: '12px' },
};

const News = () => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const newsData = useFetchNews(newsCategory);
  const cryptoNews = [
    ...cryptoList,
    {
      symbol: 'Cryptos',
      name: 'Cryptocurrency',
      color: '',
    },
  ];

  if (!newsData)
    return (
      <Box sx={style.loadingBox}>
        <Typography variant='h5'>抓取新聞中...請稍後</Typography>
        <img src='/images/loading-1-200px.svg' alt='Loading...' width='64' />
      </Box>
    );

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={3} padding='24px'>
        <Grid item xs={12} pt='24px' pl='24px'>
          <Autocomplete
            sx={{ width: '220px' }}
            id='news-select'
            options={cryptoNews}
            // value={newsCategory}
            onChange={(event, newValue) => {
              event.preventDefault();
              setNewsCategory(newValue.name);
            }}
            getOptionLabel={(option) => option.symbol || 'Cryptocurrency'}
            renderOption={(props, option) => (
              <Box component='li' sx={{ mr: 2, flexShrink: 0 }} {...props}>
                {option.symbol} {option.name}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                variant='filled'
                placeholder='Cryptocurrency'
                label='新聞搜尋'
              />
            )}
          />
        </Grid>

        {newsData.map((news, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              sx={{
                bgcolor: 'background.paper',
                p: '12px',
              }}
            >
              <CardActionArea>
                <a
                  href={news.url}
                  target='_blank'
                  rel='noreferrer'
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                  }}
                >
                  <Box sx={style.cardBox}>
                    <Box
                      sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                      <Avatar
                        src={news.provider[0]?.image?.thumbnail?.contentUrl}
                        alt='news'
                      />
                      <Typography color='primary.main'>
                        {news.provider[0]?.name}
                      </Typography>
                    </Box>
                    <Typography variant='h5'>{news.name}</Typography>
                    <Typography fontSize='14px'>
                      {news.description.length > 100
                        ? `${news.description.substring(0, 100)}...`
                        : news.description}
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '6px',
                      }}
                    >
                      <img
                        alt='news picture'
                        src={news?.image?.thumbnail?.contentUrl}
                      />

                      <Typography
                        color='text.disabled'
                        fontSize='14px'
                        alignSelf='flex-end'
                      >
                        {moment(news.dataPublished).startOf('s').fromNow()}
                      </Typography>
                    </Box>
                  </Box>
                </a>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default News;
