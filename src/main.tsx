import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './common/components/AuthProvider';
import Router from './common/components/Router';

import './styles/index.css';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container not found!');
}
ReactDOM.render(<App />, container);
