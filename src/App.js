import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('dummyUser');
  const [chats, setChats] = useState([{ name: 'user1', message: 'message1' }, { name: 'dummyUser', message: 'message2' }]);

  const [msg, setMsg] = useState('');

  const sendChat = () => {
    const c = [...chats];
    c.push({ name, message: msg });
    setChats(c);
    setMsg('');
  }
  return (
    <div>
      <h3>User: {name}</h3>
      <div className="chat-container">
        {chats.map(c => <div className={`container ${c.name === name ? 'me' : ''}`}>
          <p className="chatbox">
            <strong>{c.name}:</strong>
            <span> {c.message}</span>
          </p>
        </div>)}
      </div>

      <div className="btm">
        <input type="text" placeholder="enter your message" onInput={e => setMsg(e.target.value)} value={msg}>

        </input>
        <button onClick={e => sendChat()}>Send</button>
      </div>

    </div>
  );
}

export default App;
