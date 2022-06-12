import {Button} from 'antd';
import './App.css';
import Topnav from './components/Topnav/Topnav';

function App() {
  return (
    <div className="App">
      <Topnav></Topnav>
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
