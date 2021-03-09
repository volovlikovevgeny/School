import React, { ReactElement } from 'react';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import styles from './modal.module.scss';
import { toggleModalHidden } from '../../redux/card/actions/actions';
interface IProps {
    title: string
}

const Modal = ({ title }: IProps): ReactElement => {
    console.log(title);

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
                    <h2>{title}</h2>
                </div>
                <div className={styles.modal_body}>
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                </div>
            </div>

        </div>
    );
};

export default Modal;
