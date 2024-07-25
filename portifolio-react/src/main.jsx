import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './services/App';
import GlobalStyle from './styles/GlobalStyles';
import ThemeProviderComponent from './components/ThemeProviderComponent';
import i18n from './services/i18n';
import { I18nextProvider } from 'react-i18next';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProviderComponent>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </ThemeProviderComponent>
    </I18nextProvider>
  </React.StrictMode>
);