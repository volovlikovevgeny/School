import React, { ReactElement} from 'react';

type ToastType = {
    msg?: any | string,
    bgColor: string,
    title?: string,
}

const Toast = ({ msg, bgColor }: ToastType): ReactElement => {
    return (
        <span style={{ color: `${bgColor}` }}>{msg.msg}</span>
    );
};

export default Toast;
