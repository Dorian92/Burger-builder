import React, { Component } from 'react';

import classes from './Modal.css';
import Auxx from '../../../hoc/Auxx/Auxx';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component {
    // THis could be a fucntional component, doesn't have to be a class component

    shouldComponentUpdate ( nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }


    render() {
        return (
            <Auxx>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxx>
        );
    }
}

export default Modal;