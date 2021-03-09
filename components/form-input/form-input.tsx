import React, { ReactElement } from 'react';
import styles from './form-input.module.scss';

interface IProps {
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    name: string;
    placeholder: string;
    value: string;
    required: boolean;
}

const FormInput = ({ handleChange, ...otherProps }: IProps): ReactElement => {
    return (
        <input className={styles.form_input} onChange={handleChange} {...otherProps} />
    );
};

export default FormInput;
