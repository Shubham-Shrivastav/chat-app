import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [chats, setChats] = useState([]);

  const [msg, setMsg] = useState('');

  const sendChat = () => {
    const c = [...chats];
    c.push({ name: name, message: msg });
    setChats(c);
    setMsg('');
  };

  return (
    <div>
      {name ? null : <div>
        <input tpe="text" placeholder="Enter your name to chat" onBlur={e => setName(e.target.value)}></input>
      </div>}

      {name ? <div>
        <h3>User: {name}</h3>
        <div className="chat-container">
          {chats.map((c, index) => (
            <div
              key={index}
              className={`container ${c.name === name ? 'me' : ''}`}
            >
              <p className="chatbox">
                <strong>{c.name}:</strong>
                <span> {c.message}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="btm">
          <input
            type="text"
            placeholder="enter your message"
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
          />
          <button onClick={(e) => sendChat()}>Send</button>
        </div>

      </div> : null}

    </div>
  );
}

export default App;