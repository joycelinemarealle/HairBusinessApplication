import React , {useState} from 'react';

function BookAppointment(){
    const[formData,setFormData] = useState({
        customer_id: '',
        service_id: '',
        appointment_date: '',
        status: 'pending'
    });
    const [message,setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/appointments', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.status ===201){
                setMessage('Appointment booked successfully!');
            } else{
                setMessage('Error booking appointment:' + data.message);

            }
        } catch (error){
            console.error('Error', error);
            setMessage('An error occurred.')
        }
    }
    return (
        <div>
            <h2>Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Customer ID:</label>
                    <input type="number" name="customer_id" value={formData.customer_id} onChange={handleChange} required/>
                </div>
                <div>
                    <label>Service ID:</label>
                    <input type="number" name="service_id" value={formData.service_id} onChange={handleChange} required />
                </div>
                <div>
                    <lable> Appointment Date:</lable>
                    <input type="datetime-local" name="appointment_date" value="formData.appointment_date" onChange={handleChange} required />
                </div>
                <button type="submit">Book Appointment</button>
          </form>
            {message && <p>{message}</p>}
        </div>

    );
}
export default BookAppointment;