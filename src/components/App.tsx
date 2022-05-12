import React from 'react';
import {Map} from './Map';
import {MainLayout} from "./layout/MainLayout";

export const App = () => {
    return (
        <>
            <MainLayout>
                <Map/>
            </MainLayout>
        </>
    );
}

