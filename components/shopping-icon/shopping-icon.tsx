import React, { ReactElement } from 'react';
import styles from './shopping-icon.module.scss';
import Image from 'next/image';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { connect, useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/card/actions/actions';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { selectCartItemsCount } from '../../redux/card/selector';
import { createStructuredSelector } from 'reselect';

interface IProps {
    itemCount: number
}
const ShoppingIcon = ({ itemCount }: IProps): ReactElement => {

    console.log(itemCount);

    const dispatch = useDispatch();
    const { hidden } = useTypedSelector(state => state.cart);

    return (
        <React.Fragment>
            <div onClick={() => dispatch(toggleCartHidden())} >
                <span
                    className={styles.shopping_bag}>
                    <Image
                        src='/shopbag.jpg'
                        alt="Bag"
                        width={25}
                        height={25} />
                </span>
                <span className={styles.count}>{itemCount}</span>
                {
                    hidden ? null : <CartDropdown />
                }
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});

export default connect(
    mapStateToProps,
)(ShoppingIcon);
