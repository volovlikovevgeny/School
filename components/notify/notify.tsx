import React, { ReactElement, Fragment } from 'react';
import Loading from '../loading/loading';
import Toast from '../toast/toast';

import { useTypedSelector } from '../../redux/notify/typedSelectors';

const Notify = (): ReactElement => {
    const { notify } = useTypedSelector(state => state.notify);

    return (
        <Fragment>
            {notify.loading && <Loading />}
            {notify.error && <Toast msg={{ msg: notify.error, title: 'Error' }} bgColor="red" />}
            {notify.success && <Toast msg={{ msg: notify.success, title: 'Success' }} bgColor="lightGreen" />}
        </Fragment>
    );
};

export default Notify;
