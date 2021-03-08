import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { addNotifyAction } from '../../redux/notify/actions/actions';
import styles from './toast.module.scss';

interface IProps {
    msg: {
        title: string,
        message: string
    };
    bgColor: string;
}

const Toast = ({ msg, bgColor }: IProps): ReactElement => {
    const { title, message } = msg;
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <div style={{ backgroundColor: `${bgColor}` }} className={styles.snackbar}>
                <h3 style={{ paddingBottom: '5px' }} >{title}</h3>
                <p>{message}</p>
                <span onClick={() => dispatch(addNotifyAction({}))}>X</span>
            </div>
        </React.Fragment>
    );
};

export default Toast;
