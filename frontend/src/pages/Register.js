import React from 'react', {useState};

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
            const response = await fetch("http://127.0.0.1:5000/",{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.status === 201){
                setMessage('Registration successful');
            } else{
                setMessage('Registration failed:' + data.message);
            }

        } catch(error){
            console.error('Error',error);
            setMessage('An error occured.');
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
                    <input type="email" name="email" value={formatData.email} onChange={handleChange} required />
                </div>

                <div>
                    <label>Phone: </label>
                    <input type="text"  name="phone" value={formatData.phone} onChange={handleChange} required/>
                </div>
                    <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
 }
export default Register;