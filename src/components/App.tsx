import React, {useState} from 'react';
import {Map} from './Map';
import {MainLayout} from "./layout/MainLayout";
import {SearchContext} from '../ctx/search.context';
import {Routes, Route} from "react-router-dom";
import {AddForm} from "./AddForm";

export const App = () => {
    const [search, setSearch] = useState<string>('')
    return (
        <>
            <SearchContext.Provider
                value={{search, setSearch}}
            >
                    <MainLayout>
                        <Routes>
                            <Route path="/" element={<Map/>}/>
                            <Route path="/add" element={<AddForm/>}/>
                        </Routes>
                    </MainLayout>
            </SearchContext.Provider>
        </>
    );
}

