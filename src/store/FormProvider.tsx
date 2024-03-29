import { useState } from 'react';
import FormContext, { FormContextType } from './form-context';

const FormProvider = (props) => {
  const [inputList, setInputList] = useState([]);
  const [outputList, setOutputList] = useState([]);
  const [searchList, setSearchList] = useState([]);

  const addItemHandler: FormContextType['addItemHandler'] = (
    coin,
    cost,
    quantity
  ) => {
    setInputList((state) => [
      ...state,
      {
        id: crypto.randomUUID(),
        coin: coin,
        cost: +cost,
        quantity: +quantity,
      },
    ]);

    if (!searchList.find((item) => item.favCoin === coin)) {
      setSearchList((state) => [
        ...state,
        {
          id: crypto.randomUUID(),
          favCoin: coin,
        },
      ]);
    }
  };

  const stopItemHandler: FormContextType['stopItemHandler'] = (
    id,
    data,
    usdtTwd
  ) => {
    setInputList(inputList.filter((state) => state.id !== id));
    setOutputList((preList) => {
      const checkedState = inputList.filter((state) => state.id === id);
      const checkedList = checkedState.map((state) => ({
        ...state,
        endPrice: data,
        usdtTwd: usdtTwd,
      }));
      return [...preList, ...checkedList];
    });
  };

  const searchItemHandler: FormContextType['searchItemHandler'] = (coin) => {
    if (!searchList.find((item) => item.favCoin === coin)) {
      setSearchList((state) => [
        ...state,
        {
          id: crypto.randomUUID(),
          favCoin: coin,
        },
      ]);
    }
  };

  const removeItemHandler: FormContextType['removeItemHandler'] = (id) => {
    setOutputList(outputList.filter((data) => data.id !== id));
    setSearchList(searchList.filter((data) => data.id !== id));
  };

  const initHandler: FormContextType['initHandler'] = (
    inputs,
    outputs,
    searchs
  ) => {
    setInputList(inputs);
    setOutputList(outputs);
    setSearchList(searchs);
  };

  const formContext: FormContextType = {
    inputList,
    outputList,
    searchList,
    addItemHandler,
    stopItemHandler,
    searchItemHandler,
    removeItemHandler,
    initHandler,
  };

  return (
    <FormContext.Provider value={formContext}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormProvider;
