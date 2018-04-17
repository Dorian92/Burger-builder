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
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zidCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            conutry: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheepest', displayValue: 'Cheepest'}
                    ]
                },
                value: '',
                validation: {},
                valid: true
            }
        },
        formIsValid: false,
        loading: false
    }

    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState({ loading: true});
        const formData = {};
        for (let fromElementIdentifier in this.state.orderForm) {
            formData[fromElementIdentifier] = this.state.orderForm[fromElementIdentifier].value;
        }
            const order = {
                ingredients: this.props.ingredients,
                price: this.props.price,
                orderData: formData
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
        updatedFromElement.valid = this.checkValidity(updatedFromElement.value, updatedFromElement.validation);
        updatedFromElement.touched = true;
        updatedOrderFrom[inputIdentifier] = updatedFromElement;
        
        let formIsValid = true;
        for (let inputIdentifiers in updatedOrderFrom) {
            formIsValid = updatedOrderFrom[inputIdentifier].valid && formIsValid;
        }
        console.log(formIsValid)
        this.setState({orderForm:updatedOrderFrom, formIsValid: formIsValid})
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength  && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength  && isValid;
        }

        return isValid;
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
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id} 
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event,formElement.id)} />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
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