import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'foundation-sites/dist/css/foundation.min.css';
import 'typeface-roboto-slab';

// Styles
import './index.css';

// Components
import App from './components/App/App';

// Providers
import Providers from './providers';

ReactDOM.render(
    <Providers>
        <App />
    </Providers>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
