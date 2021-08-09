import * as types from '../contains/actionTypes';

let initialState = [];
let carts = localStorage.getItem('products');
let cart = JSON.parse(carts);
if (localStorage.getItem('cart_item')){
    initialState = JSON.parse(localStorage.getItem('cart_item'));
}

let myReducer = (state = initialState, action) =>{
    switch (action.type){
        case types.ADD_TO_CART: {
            let index = action.item;
            if (state[index] !== undefined){
                state[index].qty += 1;
            } else {
                state.push({
                    id: cart[index].id,
                    img: cart[index].img,
                    name: cart[index].name,
                    qty: 1,
                    price: cart[index].price
                });
            }
            localStorage.setItem('cart_item',JSON.stringify(state));
            return [...state];
        }
        case types.REMOVE_CART_ITEM: {
            let id = action.id;
            let newState = state.filter(item => item.id !== id);
            localStorage.setItem('cart_item',JSON.stringify(newState));
            return [...newState];
        }
        case types.CART_UP_DOWN: {
            state.map((item) => {
                if (item.id === action.id){
                    if (action.caseType === 'minus'){
                        item.qty = (item.qty < 2) ? 1 : item.qty - 1;
                    } else {
                        item.qty += 1;
                    }
                }
            });
            localStorage.setItem('cart_item',JSON.stringify(state));
            return [...state];
        }
        default: return state;
    }
}

export default myReducer;