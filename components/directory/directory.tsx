import React, { ReactElement } from 'react';
import { Product } from '../../interfaces/productItem';
import MenuItems from '../menu-items/menu-items';
import styles from './directory.module.scss';

const Directory = ({ Product }: Product): ReactElement => {
    const { products } = Product;
    return (
        <div className={styles.directory_menu}>
            {
                products.map((item, index) => (
                    <MenuItems key={index} ProductItem={item} />
                ))
            }
        </div>
    );
};

export default Directory;
