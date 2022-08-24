import './styles/reset.scss';
import './styles/common.scss';

import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';

const App = () => {
  console.log('app component');
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="todo" element={<Todo />} />
    </Routes>
  );
};

export default App;
