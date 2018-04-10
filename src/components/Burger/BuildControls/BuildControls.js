import React from 'react';

<<<<<<< HEAD
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad' , type: 'salad'},
    { label: 'Bacon' , type: 'bacon'},
    { label: 'Cheese' , type: 'cheese'},
    { label: 'Meat' , type: 'meat'}
];

=======
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'Salad' },
    { label: 'Bacon', type: 'Bacon' },
    { label: 'Cheese', type: 'Cheese' },
    { label: 'Meat', type: 'Meat' },
];


>>>>>>> develop
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
<<<<<<< HEAD
                added={() => props.ingredientAdded(ctrl.type)} />
=======
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
>>>>>>> develop
        ))}
    </div>
);

<<<<<<< HEAD

=======
>>>>>>> develop
export default buildControls;