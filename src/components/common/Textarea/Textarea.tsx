import React, {ChangeEvent} from "react";
import './Textarea.css';

interface TextareaProps {
    label: string;
    name: string
    maxLength?: number
    value: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea = ({ label, name, maxLength, value, onChange}: TextareaProps) => {
    return (
        <div className="Textarea">
            <label>
                <span>{label}:</span>
                <textarea name={name} maxLength={maxLength} onChange={onChange}>{value}</textarea>
            </label>
        </div>
    )
}