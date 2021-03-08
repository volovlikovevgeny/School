import { cartActionTypes } from '../types';

interface ProductItemImg {
    public_id: string;
    url: string;
}

export interface ProductItems {

    category: string;
    checked: boolean;
    content: string;
    description: string;
    images: ProductItemImg[];
    inStock: number;
    price: number;
    sold: number;
    title: string;
    _id: string;
}

interface cartActionInterface {
    type: cartActionTypes.ADD_ITEM,
    payload: ProductItems,
}

interface cartActionRemove {
    type: cartActionTypes.REMOVE_ITEM
    payload: ProductItems
}

interface cartActionClear {
    type: cartActionTypes.CLEAR_ITEM_FROM_CART
    payload: ProductItems
}

interface cartError {
    type: string,
    payload: { error?: string, _id?: string }
}

export type cartAction =
    cartActionInterface |
    cartError |
    cartActionRemove |
    cartActionClear
