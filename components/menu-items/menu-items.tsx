import Link from 'next/link';
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../redux/card/actions/actions';
import styles from './menu-items.module.scss';

interface ProductItemImg {
    public_id: string;
    url: string;
}

interface IProps {
    ProductItem: {
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
}

const MenuItems = ({ ProductItem }: IProps): ReactElement => {
    const dispatch = useDispatch();
    const { images, title, price, inStock, description, _id } = ProductItem;

    return (
        <div className={styles.card}>
            <div className={styles.img_top}>
                <img src={`${images[0].url}`} alt="item" />
            </div>
            <div className={styles.card_data}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.details}>
                    <h2>${price}</h2>
                    {inStock > 0
                        ? <h2>In Stock: {inStock}</h2>
                        : <h2>Out of Stock</h2>
                    }
                </div>
                <div className={styles.description}>
                    {description}
                </div>
                <div className={styles.details_btn}>
                    <Link href={`product/${_id}`}><a className='btn'>View</a></Link>
                    <button
                        disabled={ProductItem.inStock == 0 ? true : false}
                        onClick={() => dispatch(addItem(ProductItem))}
                        className='btn'
                        style={ProductItem.inStock === 0 ? { cursor: 'no-drop' } : { cursor: 'pointer' }}
                    >Buy</button>
                </div>
            </div>
        </div>
    );
};

export default MenuItems;
