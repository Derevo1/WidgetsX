import './root/index.css';
import ReactDOM from 'react-dom/client';
import App from './root/App';
import { BrowserRouter } from 'react-router-dom';
import { AuthorizationWrapper } from './components/Authorization/AuthorizationWrapper';
import { Provider } from 'react-redux';
import { store } from './state/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter basename='WidgetsX'>
    <AuthorizationWrapper>
        <Provider store={store}>
          <App/>
        </Provider>
    </AuthorizationWrapper>
  </BrowserRouter>
);
