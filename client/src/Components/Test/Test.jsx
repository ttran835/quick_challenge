import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './Test.module.scss';

export default function Test(props) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Outer Test Page</title>
      </Helmet>
      <h1 className={`${styles.redFont}`}>This is not the inner page</h1>
    </div>
  );
}
