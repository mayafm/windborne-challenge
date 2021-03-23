import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AutoCompleter from './components/AutoCompleter.jsx';
import reportWebVitals from './reportWebVitals';

var defaultValue = 'type to search options';

var options = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
//modify options variable to be any list of strings for testing 

ReactDOM.render(
  <React.StrictMode>
    <AutoCompleter defaultValue={defaultValue} options={options}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
