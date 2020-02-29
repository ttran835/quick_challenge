import React, { useContext } from 'react';
import Context from '../Context.jsx';
import AnotherComp from './AnotherComp.jsx';

export default function Info(props) {
  const testContext = useContext(Context);

  return (
    <Context.Provider value={testContext}>
      <AnotherComp />
    </Context.Provider>
  );
}
