import React, { ReactElement, Fragment } from 'react';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import LoadingSpinner from '../loading/loading';
import Toast from '../toast/toast';

const Notify = (): ReactElement => {
    const { notify } = useTypedSelector(state => state.notify);
    return (
        <Fragment>
            {notify.loading && <LoadingSpinner />}
            {notify.error && <Toast
                msg={{ message: notify.error, title: "Error" }}
                bgColor="red"
            />}
            {notify.success && <Toast
                msg={{ message: notify.success, title: "Success" }}
                bgColor="green"
            />}
        </Fragment>
    );
};

export default Notify;
