import React from 'react'
import PropTypes from 'prop-types'
import Villager from './Villager'

const VillagerList = ({ villagers }) => {
    const villagerElements = villagers.map((villager) => (
        <li key={villager.id}>
            <Villager
                name={villager.name}
                image={villager.image}
                personality={villager.personality}
                quote={villager.quote}
            /> 
            </li>
            ));
    return (
        <ul aria-label="villagers">
            {villagerElements}
        </ul> )
}

VillagerList.propTypes = {
    villagers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            personality: PropTypes.string.isRequired,
            quote: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default VillagerList

