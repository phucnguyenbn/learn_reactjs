import * as types from '../contains/actionTypes';

export const onAddToCart = (item) => {
    return {
        type: types.ADD_TO_CART,
        item
    }
}

export const onRemoveItem = (id) => {
    return{
        type: types.REMOVE_CART_ITEM,
        id
    }
}

export const onChangeAmount = (caseType,id) => {
    return{
        type: types.CART_UP_DOWN,
        id,
        caseType
    }
}


