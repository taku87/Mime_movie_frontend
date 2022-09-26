import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter} from 'react-router-dom';
import './css/index.css';
import App from './App';
import { Footer } from "components/organisms/Footer";
import { Header } from "components/organisms/Header";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN!}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
    redirectUri={window.location.origin}
  >
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
