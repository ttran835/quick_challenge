import React, { useState } from 'react';

const initState = require('./initState');

const Context = React.createContext(initState);

export default Context;
