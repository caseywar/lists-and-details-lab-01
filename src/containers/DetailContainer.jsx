import React, { Component } from 'react';
import { findVillagerById } from '../services/AnimalCrossingApi';
import VillagerDetail from '../components/details/VillagerDetails';
import style from '../components/app/App.css'


export default class DetailContainer extends Component {
    state = {
        villagerObject: {},
        loading: true,
    };

    async componentDidMount() {
        this.setState({ loading: true });
        const villager = await findVillagerById(this.props.match.params.id);
        this.setState({
            villagerObject: villager,
            loading: false
        });
    }

    render() {

        const { villagerObject, loading } = this.state;
        if (loading) return <h1>Loading...</h1>;

        return(
            <div className={style.detailPage}>
                <h1>Villager Details</h1>
                <VillagerDetail villager={villagerObject} />
            </div>
        );
    }
};
