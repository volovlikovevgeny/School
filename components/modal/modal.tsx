import React, { ReactElement, ReactNode } from 'react';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import styles from './modal.module.scss';
import { toggleModalHidden } from '../../redux/card/actions/actions';

interface IProps {
    title: string;
    children: ReactNode
}

const Modal = ({ title, children }: IProps): ReactElement => {
    const dispatch = useDispatch();
    const { modalHidden } = useTypedSelector(state => state.cart);
    
    return (
        <div
            style={modalHidden ? { display: 'inline-block' } : { display: 'none' }}
            className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.modal_header}>
                    <span
                        onClick={() => dispatch(toggleModalHidden())}
                        className={styles.close}>&times;</span>
                    <p>{title}</p>
                </div>
                <div className={styles.modal_body}>
                    {children}
                </div>
            </div>

        </div>
    );
};

export default Modal;
