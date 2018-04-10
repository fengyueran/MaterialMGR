import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addLocaleData } from 'react-intl';
import intl from 'intl';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import configureStore from './store/configureStore';
import LocaleProvider from '../components/localization';
import App from './App';

const history = createHistory();
const store = configureStore().getInstance();

const MOUNT_NODE = document.getElementById('root');

const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LocaleProvider>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LocaleProvider>
    </Provider>,
    MOUNT_NODE
  );
};

const openPage = () => {
  const run = () => {
    global.store = store;
    addLocaleData([...en, ...zh]);

    if (!window.Intl) {
      async function getIntl() { // eslint-disable-line no-inner-declarations
        await import('intl');
        await Promise.all([
          import('intl/locale-data/jsonp/en.js'),
          import('intl/locale-data/jsonp/zh.js'),
        ]);
      }
      getIntl()
        .then(() => render())
        .catch((err) => {
          throw err;
        });
    } else {
      render();
    }
  };

  if (store.then != null) {
    store.then(s => { run(s); });
  } else {
    run(store);
  }
};

const run = () => openPage();

export default run;
