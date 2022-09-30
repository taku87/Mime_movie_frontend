import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux'
// import { store } from 'store'
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from './reportWebVitals';
import App from './App';

const domain: string = process.env.REACT_APP_AUTH0_DOMAIN || '';
const clientId: string = process.env.REACT_APP_AUTH0_CLIENT_ID || '';
const audience: string = process.env.REACT_APP_AUTH0_AUDIENCE || '';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    audience={audience}
    redirectUri={window.location.origin}
  >
    {/* <Provider store={store}> */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    {/* </Provider> */}
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
