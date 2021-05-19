import React from 'react'
import PropTypes from 'prop-types'

const Villager = ({ name, image  }) => (
        <div>
            <img src={image} alt={name} />
            <p>{name}</p>
  
        </div>
);

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Villager

