import React from 'react';
import PropTypes from 'prop-types';


const VillagerDetails = ({ name, image, personality, quote }) => (
    <>
        <ul aria-label="villager">
            <li>
                <h2>{name}</h2>
                <img src={image} alt={name} />
                <p>{personality}</p>
                <p>{quote}</p>
            </li>
        </ul>
        </>
)

VillagerDetails.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    personality: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,};

export default VillagerDetails