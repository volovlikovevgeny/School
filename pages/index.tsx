import React, { ReactElement, useEffect} from 'react';
import { useDispatch } from 'react-redux';

import HomePage from '../components/home/home';
import { addNotifyAction } from '../redux/notify/actions/actions';
import { addUser } from '../redux/user/actions/actions';
import { getData } from '../utils/fetchData';

const Home = (): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');
    if (firstLogin) {
        getData('auth/accessToken').then(res => {
            if (res.err) {
                localStorage.removeItem('firstLogin');
                dispatch(addNotifyAction({ error: res.err }));
                return;
            }

            dispatch(addUser({
                token: res.access_token,
                user: res.user,
            }));
        });
    }

}, []);
  return (
    <React.Fragment>
      <HomePage />
    </React.Fragment>
  );
};

export default Home;
