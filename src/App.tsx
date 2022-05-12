import React from 'react';
import {Button} from "../components/common/Button";

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
            <div className="map"/>
        </>
    );
}

