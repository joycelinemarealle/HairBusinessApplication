import React , {useState, useEffect} from 'react';

function BookAppointment() {
    // 1 Form state: to hold user input customer , service, date and status
    const [formData, setFormData] = useState({
        customer_id: '',
        service_id: '',
        appointment_date: '',
        status: 'pending'
    });

    //2 Services state: list of available services, fetched on mount
    const [services, setServices] = useState([])

    // 3 Message state to displays success or error feedback
    const [message, setMessage] = useState('');


    //4 useEffect to load services from the backend when component mounts
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(response => {
                if (!response.ok) throw new Error(`Error ${response.status}`);
                return response.json();
            })
            .then(json => {
                //backend returns { services: [...] }
                setServices(json.services);
            })
            .catch(err => {
                console.error('Error loading services', err);
            });
}, []); // empty deps => run once

//5 handleChange: update formData when any input or select changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    // 6 handleSubmit: POST formData to /appointments
    const handleSubmit = async (e) => {
        e.preventDefault(); //prevent page reload
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
                    <label> Appointment Date:</label>
                    <input type="datetime-local" name="appointment_date" value={formData.appointment_date} onChange={handleChange} required />
                </div>
                <button type="submit">Book Appointment</button>
          </form>
            {message && <p>{message}</p>}
        </div>

    );
}
export default BookAppointment;