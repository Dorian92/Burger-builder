import React, { Component } from 'react';

import Auxx from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
/*     constructor(props) {
        super(props);
        this.state = {}
    } */
    state = {
        ingredients: {
            Salad: 1,
            Bacon: 1,
            Cheese: 2,
            Meat: 2
        }
    }

    render() {
        return (
            <Auxx>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div> 
            </Auxx>
        );
    }
}

export default BurgerBuilder;