import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styles from './Test.module.scss';

export default function Test(props) {
  useEffect(() => {
    document.title = 'Test page';
  });

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Inner Test Page</title>
      </Helmet>
      <h1 className={`${styles.redFont}`}> This is the inner Page</h1>
    </div>
  );
}
