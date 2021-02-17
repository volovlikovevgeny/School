import { cartActionTypes } from './types';
import { ItemParam } from './types';
import { addItemToCart } from './utils';

const initialState: CartState = {
    cartItems: [],
};

interface CartAction {
    type: typeof cartActionTypes.ADD_CART,
    payload: ItemParam

}
interface CartState {
    cartItems: [] | {
        category: string
        checked: boolean
        content: string
        description: string
        images: {
            public_id: string,
            url: string
        }[]
        inStock: number
        price: number
        sold: number
        title: string
        _id: string
    }[]
}

export const cartReducer = (state = initialState, action: CartAction): CartState => {
    switch (action.type) {
        case cartActionTypes.ADD_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
            case cartActionTypes.CLEAR_ITEM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((cartItem) => cartItem._id != action.payload._id),
            };
        default:
            return state;
    }
};
export default cartReducer;
