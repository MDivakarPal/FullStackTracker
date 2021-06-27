import RouteManager from './component/RouteManager';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <RouteManager/>
      </BrowserRouter>
    </div>
  );
}

export default App;
