import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
<<<<<<< HEAD
        <button className={classes.Less}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>
=======
        <button 
            disabled={props.disabled} 
            onClick={props.removed} 
            className={classes.Less}>Less</button>
        <button 
            onClick={props.added} 
            className={classes.More}>More</button>
>>>>>>> develop
    </div>
);

export default buildControl;