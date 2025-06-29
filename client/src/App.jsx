import { useState, useEffect } from 'react';
import { messageApi } from './api/message';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    const data = await messageApi.getMessage();
    setMessage(data.text);
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Message</h1>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
