import React, { useContext } from 'react';
import Context from '../Context.jsx';

export default function AnotherComp(props) {
  return <Context.Consumer>{(value) => <h1>{value.firstName}</h1>}</Context.Consumer>;
}
