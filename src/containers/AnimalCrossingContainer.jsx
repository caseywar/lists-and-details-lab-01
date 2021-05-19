import React, { Component } from 'react'
import VillagerList from '../components/characters/VillagerList';
import { fetchVillagers } from '../services/AnimalCrossingApi';
import style from '../components/app/App.css'
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

        return(
       <>
            <h1 className={style.header} >Animal Crossing Buddies</h1>
            <VillagerList villagers={villagers} />
       </>
        )
    }
}
