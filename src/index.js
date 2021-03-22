import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AutoCompleter from './components/AutoCompleter.jsx';
import reportWebVitals from './reportWebVitals';

function myOnChangeFunction() { console.log("something changed"); }

ReactDOM.render(
  <React.StrictMode>
    <AutoCompleter onChange={myOnChangeFunction} value='init value' defaultValue='default value' options={['option1', 'option2']}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
