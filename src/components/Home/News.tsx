import { useState } from "react";
import moment from "moment";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  Autocomplete,
  Box,
  TextField,
} from "@mui/material";
import { useFetchNews } from "../../hook/fetchNews";

const style = {
  loadingBox: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    alignItems: "center",
    justifyContent: "center",
  },
  cardBox: { display: "flex", flexDirection: "column", gap: "12px" },
};

const NEWS_PROVIDERS = [
  { label: "Cryptodaily", value: "cryptodaily" },
  { label: "Decrypt", value: "decrypt" },
  { label: "BSC News", value: "bsc" },
];

const News = () => {
  const [newsCategory, setNewsCategory] = useState("cryptodaily");
  const newsData = useFetchNews(newsCategory);

  if (!newsData)
    return (
      <Box sx={style.loadingBox}>
        <Typography variant="h5">抓取新聞中...請稍後</Typography>
        <img src="/images/loading-1-200px.svg" alt="Loading..." width="64" />
      </Box>
    );

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={3} padding="24px">
        <Grid item xs={12} pt="24px" pl="24px">
          <Autocomplete
            sx={{ width: "220px" }}
            id="news-select"
            options={NEWS_PROVIDERS}
            onChange={(event, newValue) => {
              event.preventDefault();
              setNewsCategory(newValue.value);
            }}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                placeholder="News Provider"
                label="新聞搜尋"
              />
            )}
          />
        </Grid>

        {newsData.map((news, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              sx={{
                bgcolor: "background.paper",
                p: "12px",
              }}
            >
              <CardActionArea>
                <a
                  href={news.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  <Box sx={style.cardBox}>
                    <Typography variant="h5">{news.title}</Typography>
                    <Typography fontSize="14px">
                      {news.description.length > 100
                        ? `${news.description.substring(0, 100)}...`
                        : news.description}
                    </Typography>
                    <img
                      alt="news thumbnail"
                      src={news.thumbnail}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                      }}
                    />
                    <Typography
                      color="text.disabled"
                      fontSize="14px"
                      alignSelf="flex-end"
                    >
                      {moment(news.createdAt).startOf("s").fromNow()}
                    </Typography>
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
