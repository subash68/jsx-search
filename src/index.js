import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';


// This is with react 18
ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
// ReactDOM.render(<App />, document.querySelector('#root'));