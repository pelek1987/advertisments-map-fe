import React from 'react';
import {Button} from "./common/Button";
import {Map} from './Map';

export const App = () => {
    return (
        <>
            <header>
                <h1>
                    <strong>Mega </strong> Ogłoszenia
                </h1>
                <Button text="Dodaj ogłoszenie" />
                <div className="search">
                    <input type="text"/>
                    <Button text="Szukaj" />
                </div>
            </header>
            <Map />
        </>
    );
}

