import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FlightStatus = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('http://localhost:8000/flights/status/');
        setFlights(response.data);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };

    fetchFlights();
  }, []);

  return (
    <div>
      <h1>Flight Status</h1>
      <ul>
        {flights.map(flight => (
          <li key={flight.flight_number}>
            {flight.flight_number} - {flight.status} - Gate: {flight.gate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightStatus;
