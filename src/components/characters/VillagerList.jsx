import React from 'react'
import PropTypes from 'prop-types'
import Villager from './Villager'
import { Link } from 'react-router-dom';
import style from '../app/App.css'


const VillagerList = ({ villagers }) => (
        <ul aria-label="villagers" className={style.list}>
            {villagers.map((villager) => (
                <Link to={`villagers/${villager.id}`} key={villager.id} >
                    <li key={villager.id} className={style.character} >
                    <Villager
                        name={villager.name}
                        image={villager.image}
                    /> 
                </li>
                </Link>
            ))}
        </ul> 
    )


VillagerList.propTypes = {
    villagers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
    
        }).isRequired
    ).isRequired
}

export default VillagerList

