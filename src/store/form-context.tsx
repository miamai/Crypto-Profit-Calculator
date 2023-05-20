import React from 'react';

type InputItem = {
  id: string;
  coin: string;
  cost: number;
  quantity: number;
};

type OutputItem = {
  id: string;
  coin: string;
  endPrice: number;
  usdtTwd: number;
  cost: number;
  quantity: number;
};

type SearchItem = {
  id: string;
  favCoin: string;
};

export type FormContextType = {
  inputList: InputItem[];
  outputList: OutputItem[];
  searchList: SearchItem[];
  addItemHandler: (coin: string, cost: string, quantity: string) => void;
  stopItemHandler: (id: string, data: number, usdtTwd: number) => void;
  searchItemHandler: (coin: string) => void;
  removeItemHandler: (id: string) => void;
  initHandler: (
    inputs: InputItem[],
    outputs: OutputItem[],
    searchs: SearchItem[]
  ) => void;
};

const FormContext = React.createContext<FormContextType>({
  inputList: [],
  outputList: [],
  searchList: [],
  addItemHandler: () => {},
  stopItemHandler: () => {},
  searchItemHandler: () => {},
  removeItemHandler: () => {},
  initHandler: () => {},
});

export default FormContext;
