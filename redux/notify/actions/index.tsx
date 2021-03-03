import { notifyActionTypes } from '../notify.types';

interface notifyActionError {
    type: notifyActionTypes.NOTIFY,
    payload: { error?: string }
}

interface notifyActionSuccess {
    type: notifyActionTypes.NOTIFY,
    payload: { success: string }
}

interface notifyActionLoading {
    type: notifyActionTypes.NOTIFY,
    payload: { loading: boolean }
}

export type NotifyAction =
    notifyActionSuccess |
    notifyActionError |
    notifyActionLoading
