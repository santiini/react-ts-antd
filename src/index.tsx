import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const APP_ELEMENT = document.getElementById('root');
const render = (Component: React.ComponentClass<any>) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    APP_ELEMENT,
  );
};

render(App);
// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// );

// 热刷新
// 声明类型
declare var module: any;
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App); 
    // render(require('./App').App);
  });
}

registerServiceWorker();
