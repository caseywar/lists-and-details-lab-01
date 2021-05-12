import React from 'react';
import PropTypes from 'prop-types';


function VillagerDetails({ villager: { name, image, personality, quote }, }) {
    return (
        <ul aria-label="villager">
            <li>
                <h2>{name}</h2>
                <img src={image} alt={name} />
                <p>{personality}</p>
                <p>{quote}</p>
            </li>
        </ul>
    );
}

VillagerDetails.propTypes = {
    villager: PropTypes.object.isRequired
};

export default VillagerDetails