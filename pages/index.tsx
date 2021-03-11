import React, { ReactElement, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useDispatch } from 'react-redux';
import Directory from '../components/directory/directory';
import { Product } from '../interfaces/productItem';
import { addNotifyAction } from '../redux/notify/actions/actions';
import { addUser } from '../redux/user/actions/actions';
import { getData } from '../utils/fetchData';
import Head from 'next/head';
import LoadingSpinner from '../components/loading/loading';
import Header from '../components/slider/slider';
import Companies from '../components/companies/companies';
import Overview from '../components/overview/overview';

const Home = ({ Product }: Product): ReactElement => {

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
      <Head><title>Home Page</title></Head>
      <Header />
      {/* <Companies /> */}
      <Overview />

      {
        Product.length === 0
          ? <LoadingSpinner />
          : <div className='section'>
            <h1 className='title'>Lessons</h1>
            <Directory Product={Product} />
          </div>
      }
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const Product = await getData('product');
  return {
    props: {
      Product,
    },
  };
};

export default Home;
