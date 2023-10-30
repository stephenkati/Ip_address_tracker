import { Provider, useSelector } from 'react-redux';
import './App.css'
import Tracker from './pages/Tracker';
import store from './redux/store';

const App = () => {

  return (
    <Provider store={store}>
      <Tracker /> 
    </Provider>
  )
};

export default App;
