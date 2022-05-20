import React, {ChangeEvent, FormEvent, useState} from "react";
import './AddForm.css';
import {Input} from "../common/Input";
import {Button} from "../common/Button";
import {Textarea} from "../common/Textarea";
import {geocode} from "../../utils/geocoding";

type FormFields = {
    name: string,
    description: string;
    price: number;
    url: string;
    address: string;
}

export const AddForm = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [id, setId] = useState<string>('')
    const [formFields, setFormFields] = useState<FormFields>({
        name: '',
        description: '',
        price: 0,
        url: '',
        address: ''
    })

    const updateFormField = (key: string, value: string | number) => {
            setFormFields(formFields => ({
                ...formFields,
                [key]: key === 'price' ? Number(value) : value
            }))
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: string) => {
        updateFormField(key, e.target.value)
    }

    const saveAd = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true);
        try {
            const {lat, lon} = await geocode(formFields.address);
            const res = await fetch('http://localhost:3001/ad', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formFields,
                    lat,
                    lon
                })
            })
            const data = await res.json()
            setId(data.id);
        } finally {
            setLoading(false);
        }
    }

    if(loading) {
        return <p>Trwa dodawanie ogłoszenia...</p>
    }

    if(id) {
        return <p>Twoje ogłoszenie "{formFields.name}" zostało poprawnie dodane do serwisu pod #ID {id}</p>
    }

    return (
        <form className="AddForm" onSubmit={saveAd}>
            <h1>Dodawanie ogłoszenia</h1>
            <Input
                required
                label="Nazwa"
                type="text"
                name="name"
                maxLength={99}
                value={formFields.name}
                onChange={(e) => handleChange(e, 'name')}
            />
            <Textarea
                label="Opis"
                name="description"
                maxLength={999}
                value={formFields.description}
                onChange={(e) => handleChange(e, 'description')}
            />
            <Input
                label="Cena"
                type="number"
                name="price"
                required
                value={formFields.price}
                onChange={(e) => handleChange(e, 'price')}
            />
            <Input
                required
                label="Adres URL"
                type="text"
                name="url"
                maxLength={99}
                value={formFields.url}
                onChange={(e) => handleChange(e, 'url')}
            />
            <Input
                required
                label="Adres"
                type="text"
                name="address"
                value={formFields.address}
                onChange={(e) => handleChange(e, 'address')}
            />
            <Button text="Dodaj"/>
        </form>
    )
}