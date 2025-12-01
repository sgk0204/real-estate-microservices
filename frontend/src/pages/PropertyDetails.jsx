import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropertyService from '../services/property.service';
import { AuthContext } from '../context/AuthContext';

const PropertyDetails = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        PropertyService.getPropertyById(id).then(
            (response) => {
                setProperty(response.data);
            },
            (error) => {
                console.log(error);
            }
        );
    }, [id]);

    const handleDelete = () => {
        PropertyService.deleteProperty(id).then(
            () => {
                navigate('/');
            },
            (error) => {
                console.log(error);
            }
        );
    };

    if (!property) return <div>Loading...</div>;

    return (
        <div className="container">
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <p>Price: ${property.price}</p>
            <p>Address: {property.address}</p>
            <p>Owner: {property.ownerUsername}</p>

            {currentUser && currentUser.username === property.ownerUsername && (
                <button onClick={handleDelete}>Delete Property</button>
            )}
        </div>
    );
};

export default PropertyDetails;
