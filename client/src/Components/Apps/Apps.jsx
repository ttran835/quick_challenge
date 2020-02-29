import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styles from './Apps.module.scss';

import Test from '../Test/Test.jsx';
import Test2 from '../InnerPage/Test/Test.jsx';
import Context from '../Context/Context.jsx';
import Info from '../Context/RenderTest/Info.jsx';

export default function App(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className={`${styles.header1}`}>This is the app.</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Info />
        </div>
      </div>
      <Switch>
        <Route path="/test" title="Test" component={Test} />
        <Route path="/test2" title="Test2" component={Test2} />
      </Switch>
      <div className="row">
        <div className="col-6">
          <Link to="/test">Go To Test</Link>
        </div>
        <div className="col-6">
          <Link to="/test2">Go To Test 2</Link>
        </div>
      </div>
    </div>
  );
}
