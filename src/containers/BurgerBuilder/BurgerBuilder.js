import React, { Component } from 'react';

import Auxx from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

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
        },
        totalPrice: 4
    }

<<<<<<< HEAD
    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
=======
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
>>>>>>> develop
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
<<<<<<< HEAD
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
    }

    removeIngredientHandler = (type) => {

=======
        const priceAddion = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddion;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount -1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
>>>>>>> develop
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Auxx>
                <Burger ingredients={this.state.ingredients} />
<<<<<<< HEAD
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}/>
=======
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo} /> 
>>>>>>> develop
            </Auxx>
        );
    }
}

export default BurgerBuilder;