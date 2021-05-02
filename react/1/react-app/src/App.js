import {useState} from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(getFormatData());

  setInterval(() => setTime(getFormatData()), 1000);

  function getFormatData() {
    return (new Date()).toLocaleString();
  }

  return (
    <div className="App">
      Текущее время: {time}
    </div>
  );
}

export default App;
