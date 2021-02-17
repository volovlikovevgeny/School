// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem._id === cartItemToAdd._id,
    );

    if (existingCartItem) {
        if (existingCartItem) {
            return cartItems.map(cartItem =>
                cartItem._id === cartItemToAdd._id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem,
            );
        }
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
