import React, { Component } from "react";
import './PricingPlans.css'
import PricingPlanCards from "../../../../Data/PricingPlansData/PricingPlansData";
import { MT, MS, SC } from '../compo/ComponentIndex'

class PricingPlans extends Component {
    render() {
        return (
            <MS class='PricingPlans' Uniq='PricingPlans'>
                <MT>PricingPlans</MT>
                <SC CCS='PricingPlan__container container grid'>
                    {PricingPlanCards}
                </SC>
            </MS>

        )
    };
}
export default PricingPlans