const indexInPoint = `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/index.css';
// import * as serviceWorker from './helpers/serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// serviceWorker.unregister();
`;

module.exports = indexInPoint;
