import useSWR from 'swr';
import { useContext } from 'react';
import FormContext from '../store/form-context';

// fetcher
const fetcher = (url: URL) => fetch(url).then((res) => res.json());

const twdFetcher = (url: URL) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => res.data.rates.TWD);

const chartFetcher = (url: URL) =>
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

  const query = Array.from(new Set([...inputcryptos, ...searchcryptos]));
  const { data: cryptoData, error: cryptoError } = useSWR(
    query.length === 0
      ? null
      : `https://api.binance.com/api/v3/ticker/24hr?symbols=[${query}]`,
    fetcher,
    { refreshInterval: 5000 }
  );

  const { data: usdtTwdRatio, error: twdError } = useSWR(
    'https://api.coinbase.com/v2/exchange-rates?currency=USDT',
    twdFetcher
  );

  return {
    cryptoData,
    usdtTwd: +usdtTwdRatio,
    fetchCryptoError: cryptoError || twdError,
  };
}

export function useFetchChart(coin: string) {
  const { data: historialData, error: fetchChartError } = useSWR(
    `https://api.binance.com/api/v1/klines?symbol=${coin}USDT&interval=1h&limit=24&startTime=${start}`,
    chartFetcher,
    { refreshInterval: 24 * 60 * 60 * 1000 }
  );

  return {
    historialData,
    fetchChartError,
  };
}
