import React from 'react';

const FormContext = React.createContext({
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
