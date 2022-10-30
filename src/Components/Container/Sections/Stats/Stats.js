import React, { Component } from 'react';
import './Stats.css'
import StatsCard from '../../../../Data/StatsData/StatsData';
import { MT, MS, SC } from '../compo/ComponentIndex'

class Stats extends Component {
    render() {
        return (
            <MS class='Status' Uniq='Status'>
                <MT>Our Status</MT>
                <SC CCS='status__container container grid'>
                    {StatsCard}
                </SC>
            </MS>
        );
    }
}

export default Stats;
