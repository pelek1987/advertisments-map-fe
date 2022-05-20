import React, {ChangeEvent} from "react";
import './Input.css';

interface InputProps {
    required?: boolean;
    label: string;
    type: string;
    name: string;
    maxLength?: number;
    value: string | number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({label, type, name, maxLength, required = false, value, onChange}: InputProps) => {
    return (
        <div className="Input">
            <label>
                <span>{label}:</span>
                <input required={required} type={type} name={name} maxLength={maxLength} value={value} onChange={onChange}/>
            </label>
        </div>
    )
}