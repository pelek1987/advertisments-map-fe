import React from "react";
import './Header.css';
import {Button} from "../../common/Button";

export const Header = () => (
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
)