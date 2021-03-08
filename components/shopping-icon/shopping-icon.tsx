import React, { ReactElement } from 'react';
import styles from './shopping-icon.module.scss';
import Image from 'next/image';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/card/actions/actions';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';

const ShoppingIcon = (): ReactElement => {
    const dispatch = useDispatch();
    const {hidden} = useTypedSelector(state =>state.cart);
    return (
        <React.Fragment>
            <span
                onClick={() => dispatch(toggleCartHidden())}
                className={styles.shopping_bag}>
                <Image
                    src='/shopbag.jpg'
                    alt="Bag"
                    width={25}
                    height={25} />
            </span>
            {
                hidden ? null :  <CartDropdown />
            }
        </React.Fragment>
    );
};

export default ShoppingIcon;
