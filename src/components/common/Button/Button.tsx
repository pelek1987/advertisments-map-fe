import React from "react";
import './Button.css';
import {Link} from "react-router-dom";

interface Props {
    text: string;
    to?: string;
}

export const Button = ({text, to}: Props) => {
    return (
        to ? <Link className="btn"  to={to}>{text}</Link>
            : <button className="btn">{text}</button>
    )
}