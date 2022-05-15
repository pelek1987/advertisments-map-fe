import React, {useState} from 'react';
import {Map} from './Map';
import {MainLayout} from "./layout/MainLayout";
import { SearchContext } from 'src/ctx/search.context';

export const App = () => {
    const [search, setSearch] = useState<string>('')
    return (
        <>
            <SearchContext.Provider
                value={{search, setSearch}}
            >
                <MainLayout>
                    <Map/>
                </MainLayout>
            </SearchContext.Provider>
        </>
    );
}

