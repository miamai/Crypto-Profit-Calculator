import useSWR from "swr";

export const newsFetcher = async (url: URL) => {
  const option = {
    method: "GET",
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
    },
  };
  const response = await fetch(url, option);
  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }
  const data = await response.json();
  return data.data;
};

export function useFetchNews(newsProvider: string) {
  const { data: newsData } = useSWR(
    `https://cryptocurrency-news2.p.rapidapi.com/v1/${newsProvider}`,
    newsFetcher
  );

  return newsData;
}
