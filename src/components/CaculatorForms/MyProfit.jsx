import React from 'react';
import { useContext } from 'react';
import FormContext from '../../store/form-context';
import InputForm from './InputForm';
import ProfitForm from './ProfitForm';

const MyProfit = () => {
  const { inputList } = useContext(FormContext);

  return (
    <>
      <h2>損益計算表</h2>
      <InputForm />
      {inputList.length > 0 && <ProfitForm />}
    </>
  );
};

export default MyProfit;
