import React, { Component } from 'react';

import Auxx from '../../hoc/Auxx';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    state = {
        showSideDrawer: true
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
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxx>
        )
    }
} 
export default Layout;