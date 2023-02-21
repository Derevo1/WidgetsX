import ReactDOM from 'react-dom/client';
import './root/index.css';
import App from './root/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App/>);
