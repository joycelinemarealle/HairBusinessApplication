import React, {useState} from 'react' ;

function Register (){
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        phone:''
    });

    const [message,setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://127.0.0.1:5000/customers",{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(formData)
            });
            const data = await response.json();
            if (!response.ok){
                const error = await response.json()
                throw new Error(error.message || response.statusText)
            }
            setMessage('Registration successful' );
        } catch(error){
            setMessage('Registration failed:.' + error.message);
        }
    };

    return (
        <div>
            <h2> Customer Registration</h2>
            <form onSubmit={{handleSubmit}}>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div>
                    <label>Phone: </label>
                    <input type="text"  name="phone" value={formData.phone} onChange={handleChange} required/>
                </div>
                    <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
 }
export default Register;