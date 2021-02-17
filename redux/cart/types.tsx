export const cartActionTypes = {
    ADD_CART:'ADD_CART',
    REMOVE_ITEM:'REMOVE_ITEM',
    CLEAR_ITEM_CART: 'CLEAR_ITEM_CART',
};

export interface ItemState {
    type: typeof cartActionTypes.ADD_CART,
    payload?: {
        category: string,
        checked: boolean,
        content: string,
        description: string,
        images: {
            public_id: string
            url: string
        }[],
        inStock: number,
        price: number,
        sold: number,
        title: string,
        _id: string

        error?:string
    }
}

export interface ItemParam {
    category: string,
    checked: boolean,
    content: string,
    description: string,
    images: {
        public_id: string
        url: string
    }[],
    inStock: number,
    price: number,
    sold: number,
    title: string,
    _id: string
}
