import { cartAction } from './index';
import { cartActionTypes } from '../types';
import { ProductItems } from './index';

export const toggleCartHidden = (): { type: string } => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: ProductItems): cartAction => {
    if (item.inStock === 0) {
        return ({
            type: 'NOTIFY',
            payload: { error: 'This Product is out of stock.' },
        });
    }
    return ({
        type: cartActionTypes.ADD_ITEM,
        payload: item,
    }
    );
};
export const removeItem = (item: ProductItems): cartAction => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item,
});

export const clearItemFromCart = (item: ProductItems): cartAction => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item,
});
