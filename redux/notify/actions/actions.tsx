import { notifyActionTypes } from '../notify.types';
import { NotifyAction } from './index';

export const addNotifyAction = (item: any): NotifyAction => {
    return (
        {
            type: notifyActionTypes.NOTIFY,
            payload: item,
        }
    );
};
