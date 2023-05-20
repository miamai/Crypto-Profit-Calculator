import { useContext } from 'react';

import FavoritesForm from './FavoritesForm';
import FavoritesSearch from './FavoritesSearch';
import { useFetchData } from '../../hook/fetchCrypto';
import FormContext from '../../store/form-context';
import ErrorModal from '../../UI/ErrorModal';

const MyCurrency = () => {
  const { cryptoData, fetchCryptoError } = useFetchData();
  const { searchList } = useContext(FormContext);

  return (
    <div>
      <FavoritesSearch />
      {fetchCryptoError && <ErrorModal />}
      {searchList.length > 0 && <FavoritesForm coindata={cryptoData} />}
    </div>
  );
};

export default MyCurrency;
