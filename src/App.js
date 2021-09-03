import logo from './logo.svg';
import './App.css';
import ClassComponent from './pages/ClassComponent';
import FunctionComponent from './pages/FunctionComponent';
import SetStatePage from './pages/SetStatePage';

function App() {
  return (
    <div className="App">
      {/* <ClassComponent /> */}
      <img src={logo} />
      {/* <FunctionComponent /> */}
      <SetStatePage />
    </div>
  );
}

export default App;
