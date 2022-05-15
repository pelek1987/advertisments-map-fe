import React, {ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, useContext, useState} from "react";
import './Header.css';
import {Button} from "../../common/Button";
import {SearchContext} from "../../../ctx/search.context";

export const Header = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const {setSearch} = useContext(SearchContext)
    const handleInputChange: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }
    const setSearchFromLocalState: FormEventHandler = (e: FormEvent) => {
        e.preventDefault()
        setSearch(inputValue)
    }
    return (
        <header>
            <h1>
                <strong>Mega </strong> Ogłoszenia
            </h1>
            <Button text="Dodaj ogłoszenie"/>
            <form className="search" onSubmit={setSearchFromLocalState}>
                <input value={inputValue} onChange={handleInputChange} type="text"/>
                <Button text="Szukaj"/>
            </form>
        </header>
    )
}