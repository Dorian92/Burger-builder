import React, { Component } from 'react';

import Auxx from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
/*     constructor(props) {
        super(props);
        this.state = {}
    } */
    state = {
        ingredients: {
            Salad: 0,
            Bacon: 0,
            Cheese: 0,
            Meat: 0
        }
    }

    render() {
        return (
            <Auxx>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls /> 
            </Auxx>
        );
    }
}

export default BurgerBuilder;