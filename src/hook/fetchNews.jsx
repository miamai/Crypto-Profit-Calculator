import useSWR from 'swr';

const newsFetcher = (url) => {
  //Explicit return
  return fetch(url, {
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': '84146c9a50msh025d8d05479e9b0p1704e6jsn9b09ddfeb464',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    },
  })
    .then((res) => res.json())
    .then((res) => {
      return res.value;
    });
};

export function useFetchNews(newsCategory) {
  const { data: newsData, isLoading } = useSWR(
    `https://bing-news-search1.p.rapidapi.com/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day`,
    newsFetcher
  );

  return newsData;
}
