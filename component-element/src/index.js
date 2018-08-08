import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const componentInstance = ReactDOM.render(<App />, document.getElementById('root'));
console.log('Component instance:', componentInstance);
