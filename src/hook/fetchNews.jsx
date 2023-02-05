import useSWR from 'swr';

const newsFetcher = (url) => {
  //Explicit return
  return fetch(url, {
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    },
  })
    .then((res) => res.json())
    .then((res) => {
      return res.value;
    });
};

export function useFetchNews(newsCategory) {
  const { data: newsData } = useSWR(
    `https://bing-news-search1.p.rapidapi.com/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day`,
    newsFetcher
  );

  return newsData;
}
