import React from 'react';
import ReactDOM from 'react-dom';
import 'foundation-sites/dist/css/foundation.min.css';
import 'typeface-roboto-slab';

// Styles
import './index.css';

// Components
import App from './containers/App/App';

// Providers
import Providers from './providers';

ReactDOM.render(
    <Providers>
        <App />
    </Providers>,
    document.getElementById('root'),
);

