import React , {useState, useEffect} from 'react';

function Services(){
    //1 Local state for list of services and any error message
    const [services, setServices] = useState([]);
    const [error,setError] = useState('');

    //2 useEffect to fetch services once when the component mount
    useEffect(() => {
        //Call our backend API
        fetch ('http://localhost:5000/services')
                //2a check for HTTP errors (non-2xx  eg 200,201 status codes)
            .then(response => {
                if (!response.ok) throw new Error ('Error ${response.status}' );
               //2b Parse JSON body on success
                return response.json()
            })
        .then(json => {
            //2c Extract array from '{services: [...] and save to state}'
            setServices(json.services);
        })
        .catch(err  => {
            console.error('Fetch error:', err);
            setError('Failed to load services: ${err.message}');
        });

    },[]); //empty dependency array means this runs only once

// 3 If there was an error fetching, show it
if (error) return <p>{error}</p>

//4 While services array is still empty (fetching) , show a loading message
if (!services.length) return <p>Loading services..</p>;

    //5 Once data has loaded, render the list of services
    return (
        <div>
            <h2> Available Services</h2>
            <ul>
                {services.map((service) => (
                    <li key={service.id}>
                        <h3>{service.service_name}</h3>
                        <p>{service.description}</p>
                        <p>Price:${service.price}</p>
                    </li>
                    ))}
            </ul>
        </div>
    );
}

export default Services;