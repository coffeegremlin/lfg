import { useState } from 'react';
import axios from 'axios';

const projectID='2b543fe2-2a38-4552-8b53-6ae71ea17344'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

  const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

      try {
        // username / password goes to chatEngine and gives a message
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
    } catch (error) {
      
    }
  };


  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">LFG Community Chat Space</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default LoginForm;