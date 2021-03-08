import React, { ReactElement } from 'react';
import NavBar from './navbar/navbar';
import Notify from './notify/notify';

type IProps = {
    children: React.ReactNode
}

const Layout = ({ children }: IProps): ReactElement => {
    return (
        <React.Fragment>
            <NavBar />
            <Notify />
         
            <div className='container'>
                <main>{children}</main>
            </div>
        </React.Fragment>
    );
};

export default Layout;
