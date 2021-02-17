import { cartActionTypes } from './types';
import { ItemParam, ItemState } from './types';

export const addCartItem = (product: ItemParam): ItemState => {
    if (product.inStock === 0) {
        return ({ type: 'NOTIFY', payload: { error: 'This Product is out of stock.' } });
    }
    return ({
        type: cartActionTypes.ADD_CART,
        payload: product,
    });
};

export const removeCartItem = (product: ItemParam): ItemState => {
    return ({
        type: cartActionTypes.REMOVE_ITEM,
        payload: product,
    });
};

export const clearItemFromCart = (product: ItemParam): ItemState => {
    return ({
        type: cartActionTypes.CLEAR_ITEM_CART,
        payload: product,
    });
};
