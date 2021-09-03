import logo from './logo.svg';
import './App.css';
import ClassComponent from './pages/ClassComponent';
import FunctionComponent from './pages/FunctionComponent';

function App() {
  return (
    <div className="App">
      {/* <ClassComponent /> */}
      <img src={logo}/>
      <FunctionComponent />
    </div>
  );
}

export default App;
