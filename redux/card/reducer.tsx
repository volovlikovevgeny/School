import { cartAction } from './actions';
import { cartActionTypes } from './types';
import { addItemToCart, removeItemFromCart } from './utils';

interface ProductItems {
    hidden: boolean;
    cartItems: {
        category?: string;
        checked?: boolean;
        content?: string;
        description?: string;
        images?: {
            public_id: string;
            url: string;
        }[];
        inStock?: number;
        price?: number;
        sold?: number;
        title?: string;
        _id?: string;
    }[]
}

const initialState: ProductItems = {

    hidden: true,
    cartItems: [],
};

export const cartReducer = (
    state = initialState,
    action: cartAction,
): ProductItems => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
            };
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem._id !== action.payload._id,
                ),
            };
        default:
            return state;
    }
};
