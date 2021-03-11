import Layout from '../components/Layout';
import React, { FC, useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { Router } from 'next/router';
import LoadingSpinner from '../components/loading/loading';
import { PersistGate } from 'redux-persist/integration/react';
import '../styles.scss';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    
    useEffect(() => {
        const start = () => {
            console.log('start');
            setLoading(true);
        };

        const end = () => {
            console.log('finished');
            setLoading(false);
        };

        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete", end);
            Router.events.off("routeChangeError", end);
        };
    }, []);

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Layout>
                    {
                        loading
                            ?
                            <LoadingSpinner />
                            :
                            <Component {...pageProps} />
                    }
                </Layout>
            </PersistGate>
        </Provider>
    );
};

export default App;
