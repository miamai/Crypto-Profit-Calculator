import React from 'react';
import FavoritesForm from './FavoritesForm';
import FavoritesSearch from './FavoritesSearch';
import { useFetchData } from '../../hook/fetchCrypto';

const MyCurrency = () => {
  const { cryptodata } = useFetchData();

  return (
    <div>
      <FavoritesSearch />
      {cryptodata && <FavoritesForm coindata={cryptodata} />}
    </div>
  );
};

export default MyCurrency;
