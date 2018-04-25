import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auxx from '../Auxx/Auxx';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components//Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    toggleSideDrawer = () => {
        const currentShosSideDrawerState = this.state.showSideDrawer;
        this.setState({ showSideDrawer: !currentShosSideDrawerState})
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer}
        })
    }
/*     sideDrawerToggleHandler = () => {
        const oldShowSideDrawer = this.state.showSideDrawer;
        this.setState({showSideDrawer: !oldShowSideDrawer})
    } */

    render() {
        return (
            <Auxx>
                <Toolbar
                    isAuth={this.props.isAuthenticated} 
                    drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    isAuth={this.props.isAuthenticated}  
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxx>
        )
    }
} 

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};


export default connect(mapStateToProps)(Layout);