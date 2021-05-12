import React, { Component } from 'react';
import { fetchVillagers } from '../services/AnimalCrossingApi';
import VillagerDetails from '../components/details/VillagerDetails';
import VillagerList from '../components/characters/VillagerList';

export default class DetailContainer extends Component {
    state = {
        villager: {}
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const villager = await fetchVillagers(id);
        this.setState({
            villager
        });
    }

    render() {
        const { villager } = this.state;
        return(
            <div>
                <h1>Villager Details</h1>
                <VillagerDetails villager={villager} />
            </div>
        );
    }
};
