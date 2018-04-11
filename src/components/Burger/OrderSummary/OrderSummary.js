import React from 'react';

import Auxx from '../../../hoc/Auxx';
import Button from '../../UI/Button/Button.js';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey,index) => {
            return <li key={index}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}</li>
        })
    return (
        <Auxx>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout</p>
            <Button btnType={"Danger"} clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType={"Success"} clicked={props.purchaseContinue}>CONTINUE</Button>
        </Auxx>
    );
};

export default orderSummary;