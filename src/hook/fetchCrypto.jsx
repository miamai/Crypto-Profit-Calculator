import useSWR from 'swr';
import { useContext } from 'react';
import FormContext from '../store/form-context';
import ErrorModal from '../UI/ErrorModal';

// fetcher
const fetcher = (url) => fetch(url).then((res) => res.json());

const twdFetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => res.data.rates.TWD);

const chartFetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      let chart_data = [];
      for (let i = 0; i < res.length; i++) {
        let openTime = res[i][0];
        let openPrice = parseFloat(res[i][1]);
        chart_data.push([openTime, openPrice]);
      }
      return chart_data;
    });

const start = Date.now() - 24 * 60 * 60 * 1000;

// function
export function useFetchData() {
  const { inputList, searchList } = useContext(FormContext);
  const inputcryptos = inputList?.map((el) => `"${el.coin + 'USDT'}"`);
  const searchcryptos = searchList?.map((el) => `"${el.favCoin + 'USDT'}"`);

  const query = [...new Set([...inputcryptos, ...searchcryptos])];

  const {
    data: cryptodata,
    isLoading,
    error,
  } = useSWR(
    query.length === 0
      ? null
      : `https://api.binance.com/api/v3/ticker/24hr?symbols=[${query}]`,
    fetcher,
    { refreshInterval: 10000 }
  );

  const { data: usdtTwdRatio } = useSWR(
    'https://api.coinbase.com/v2/exchange-rates?currency=USDT',
    twdFetcher
  );

  //🔺🔺 error modal發生後，空白的無法再fetch一次
  //   //🔺🔺error的時候應該停止fetch data
  if (error) {
    return <ErrorModal />;
  }

  return {
    cryptodata,
    usdtTwd: +usdtTwdRatio,
    isLoading,
    isError: error,
  };
}

export function useFetchChart(coin) {
  const {
    data: historialData,
    error,
    isLoading,
  } = useSWR(
    `https://api.binance.com/api/v1/klines?symbol=${coin}USDT&interval=1h&limit=24&startTime=${start}`,
    chartFetcher,
    { refreshInterval: 300000 }
  );

  return {
    historialData,
    error,
    isLoading,
  };
}
