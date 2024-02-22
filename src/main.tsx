import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';

import LoginForm from './components/login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container not found!');
}
ReactDOM.render(<App />, container);
