import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootswatch/dist/litera/bootstrap.min.css';
import './styles/custom.css';
require('dotenv').config();

ReactDOM.render(<App />, document.getElementById('root'));
