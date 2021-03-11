import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="My ecommerce" />
                    <script src={`https://www.paypal.com/sdk/js?client-id=AWrktSXIXgXUyChVDtk3JPSLu209b2mnl7gw5PP7mH5cqirK8IVJJA0-Vu7XHxyq2WMsJoG3xA5cvd0K`}></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
