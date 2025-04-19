import React , {useState} from 'react';

function Login() {
  // const [credentials, setCredentials] = useState({email: '', password: ''})
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [message, setMessage] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      //TODO placeholder - add actual authentication logic
      setMessage('Login functionality not implemented yet.');
   };
   return (
       <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
             <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
             </div>
             <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
             </div>
             <button type="submit">Login</button>
          </form>
          {message && <p>{message}</p>}
       </div>);
}

export default Login;