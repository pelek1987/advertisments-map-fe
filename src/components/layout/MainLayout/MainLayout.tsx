import React, {ReactElement} from 'react';
import {Header} from "../Header";

interface Props {
    children: ReactElement
}

export const MainLayout = ({children}: Props) => (
    <>
        <Header />
        <main>
            {children}
        </main>
    </>
)