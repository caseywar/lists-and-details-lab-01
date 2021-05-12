import React from 'react'
import PropTypes from 'prop-types'

const Villager = ({ name, personality, quote, image  }) => (
        <>
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{personality}</p>
            <p>"{quote}"</p>
        </>
)

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
}

export default Villager

