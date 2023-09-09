import { useState, useEffect } from 'react';
import './App.css';
import he from 'he';

function App() {
  const [ip, setIp] = useState('');
  const [hello, setHello] = useState('');

  useEffect(() => {
    fetch('http://ip-api.com/json/?fields=61439')
      .then((response) => response.json())
      .then((json) => setIp(json.query));
  }, []);

  console.log(ip);

  let URL = `https://hellosalut.stefanbohacek.dev/?ip=${ip}`;

  useEffect(() => {
    const makeApiCall = async () => {
      let result = await fetch(URL);
      result.json().then((json) => {
        setHello(json.hello);
        console.log(json);
      });
    };
    makeApiCall();
  }, [URL]);

  const decodedText = he.decode(hello);

  return (
    <div className="App">
      <p style={{ fontSize: '40px' }}>{decodedText}</p>
    </div>
  );
}

export default App;
