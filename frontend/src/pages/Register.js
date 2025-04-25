import React, {useState} from 'react' ;

function Register (){
    // 1 State to hold form input values:name, email, phone
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        phone:''
    });
    // 2 State to display success or error messages
    const [message,setMessage] = useState('');

    // 3 Update formData when any input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };
    // 4 Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevenet page reload
        try{
            // 4a Send POST request to backend API with form data
            const response = await fetch("http://127.0.0.1:5000/customers",{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(formData) // Convert formData object to JSON
            });

            // 4b If server returns an error status, parse and throw it
            if (!response.ok){
                const error = await response.json() // read error from response body
                throw new Error(error.message || response.statusText)
            }

            // 4C On success, show confirmation
            setMessage('Registration successful' );
        } catch(error){

            //4d On failure, display the error message
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