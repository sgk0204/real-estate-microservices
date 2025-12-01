import React, { useState, useEffect } from 'react';
import PropertyService from '../services/property.service';
import { Link } from 'react-router-dom';

const Home = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        PropertyService.getAllProperties().then(
            (response) => {
                setProperties(response.data);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    return (
        <div className="container">
            <h2>Properties</h2>
            <div className="property-list">
                {properties.map((property) => (
                    <div key={property.id} className="property-card">
                        <h3>{property.title}</h3>
                        <p>{property.description}</p>
                        <p>Price: ${property.price}</p>
                        <Link to={`/properties/${property.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
