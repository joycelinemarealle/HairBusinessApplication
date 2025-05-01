import React , {useState} from 'react';

function Login() {
  // 1. State to hold email, password inputs
   const [credentials, setCredentials] = useState({email: '', password: ''})

   // 2. State to display success or error messages
   const [message, setMessage] = useState('');

   // Update credentials when user types in either field
   const handleChange = e =>
       setCredentials({...credentials, [e.target.name]: e.target.value});

   // Handle form submission
   const handleSubmit = async e=>{
      e.preventDefault(); // prevent page reload

      try {
         // 4a Send POST request to the backend log in endpoint
         const response = await fetch ('', {
            method: 'POST',
            headers: {'Content-Type': 'applicstion.json'},
            body: JSON.stringify(credentials) //send {email, password}
         });

         //4b. If server returns non-2xx 200,2001 etc, parse error and throw
         if(!response.ok){
            const err = await response.json();
            throw new Error(err.message || response.statusText)
         }
           //4c On success, show confirmation
            setMessage('Login successful');

         //catch any other errors
      } catch (err){
         //4d Failure, display the error message
         setMessage('Login failed' + err.message);
      }

   };


   return (
       <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
             <div>
                <label>Email:</label>
                <input name="email"
                       type="email"
                       value={email}
                       onChange={handleChange} required/>
             </div>
             <div>
                <label>Password:</label>
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChange} required/>
             </div>
             <button type="submit">Login</button>
          </form>
          {message && <p>{message}</p>}
       </div>);
}

export default Login;