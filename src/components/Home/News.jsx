import React from 'react';
import { useState } from 'react';
import moment from 'moment';
import {
  Grid,
  Typography,
  Avatar,
  Card,
  CardActionArea,
  // CardContent,
  // CardMedia,
  Autocomplete,
  Box,
  TextField,
} from '@mui/material';
import { useFetchNews } from '../../hook/fetchNews';
import { cryptoList } from '../../UI/CryptoSearchInput';

const style = {
  loadingBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {},
};

const News = () => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const newsData = useFetchNews(newsCategory);
  const cryptoNews = [
    ...cryptoList,
    {
      symbol: '',
      name: 'Cryptocurrency',
      color: '',
    },
  ];

  console.log(newsData); //🔺🔺

  if (!newsData)
    return (
      <Box sx={style.loadingBox}>
        <Typography variant='h5'>抓取新聞中...請稍後</Typography>
        <img src='/images/loading-1-200px.svg' alt='Loading...' width='64' />
      </Box>
    );
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={3}>
        <Grid xs={12}>
          <Autocomplete
            sx={{ width: '180px' }}
            id='news-select'
            options={cryptoNews}
            value={newsCategory}
            onChange={(newValue) => setNewsCategory(newValue)}
            getOptionLabel={(option) => option.name}
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
            <Card>
              <CardActionArea>
                <a href={news.url} target='_blank' rel='noreferrer'>
                  <div>
                    <Typography variant='h5'>{news.name}</Typography>
                    <img
                      alt='news picture'
                      src={news?.image?.thumbnail?.contentUrl}
                    />
                  </div>
                  <p>
                    {news.description > 100
                      ? `${news.description.substring(0, 100)}...`
                      : news.description}
                  </p>
                  <div>
                    <Avatar
                      src={news.provider[0]?.image?.thumbnail?.contentUrl}
                      alt='news'
                    />
                    <Typography>{news.provider[0]?.name}</Typography>

                    <div>
                      <Typography>
                        {moment(news.dataPublished).startOf('ss').fromNow()}
                      </Typography>
                    </div>
                  </div>
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
