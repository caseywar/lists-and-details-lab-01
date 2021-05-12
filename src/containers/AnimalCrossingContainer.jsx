import React, { Component } from 'react'
import VillagerList from '../components/characters/VillagerList';
import { fetchVillagers } from '../services/AnimalCrossingApi';

export default class AnimalCrossingContainer extends Component {
    state = {
        loading: true,
        villagers: [],
    };

    async componentDidMount() {
        const villagers = await fetchVillagers();
        this.setState({
            villagers,
            loading: false,
        });
    };

    render() {
        const { loading, villagers } = this.state;

        if (loading) return <h1>Loading...</h1>;

        return <VillagerList villagers={villagers} />
    }
}
