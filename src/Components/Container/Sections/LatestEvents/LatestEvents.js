import React, { Component } from 'react';
import FlipCountdown from '@rumess/react-flip-countdown'
import './LatestEvents.css'
import { MT, MS, SC } from '../compo/ComponentIndex'

class LatestEvents extends Component {
    render() {
        return (
            <MS class='LatestEvents' Uniq='Events'>
                <MT>LatestEvents</MT>
                <SC CCS='LatestEvents__container container grid'>
                    <div className="top">
                        <FlipCountdown
                            size="medium"
                            hideYear
                            monthTitle='Months'
                            dayTitle='Days'
                            hourTitle='Hours'
                            minuteTitle='Minutes'
                            secondTitle='Seconds'
                            endAt={'2026-12-12 01:26:58'}
                        />
                    </div>
                </SC>
            </MS>
        )
    }
}
export default LatestEvents