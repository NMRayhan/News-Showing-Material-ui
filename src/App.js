import './App.css';
import Button from '@material-ui/core/Button'
import NewsCenter from './Components/NewsCenter/NewsCenter';

function App() {
  return (
    <div className="App">
      <h1>Material UI</h1>
      <Button variant="contained" color="primary">Primary</Button>
      <NewsCenter></NewsCenter>
    </div >
  );
}

export default App;
