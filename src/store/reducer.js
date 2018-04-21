import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        Salad: 0,
        Bacon: 0,
        Cheese: 0,
        Meat: 0
    },
    totalPrice: 4,
};

const reducer = (state = initialState,action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                }
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                }
            };
        default: 
            return state;
    }
};

export default reducer;