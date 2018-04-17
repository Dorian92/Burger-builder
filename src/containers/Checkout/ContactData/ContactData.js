import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spiner/Spiner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zidCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP code'
                },
                value: ''
            },
            conutry: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheepest', displayValue: 'Cheepest'}
                    ]
                },
                value: ''
            }
        },
        
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true})
            const order = {
                ingredients: this.props.ingredients,
                price: this.props.price
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            }); 
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderFrom = {
            ...this.state.orderForm
        }
        const updatedFromElement = {...updatedOrderFrom[inputIdentifier]};
        updatedFromElement.value = event.target.value;
        updatedOrderFrom[inputIdentifier] = updatedFromElement
        this.setState({orderForm:updatedOrderFrom})
    }


    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let from = (
            <form>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id} 
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event,formElement.id)} />
                ))}
                <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
        </form>
        );
        if (this.state.loading) {
            from = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {from}
            </div>
        );
    }
}

export default ContactData;