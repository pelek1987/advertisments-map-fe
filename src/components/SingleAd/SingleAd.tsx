import {useEffect, useState} from "react";
import {AdEntity} from "types";

interface SingleAdProps {
    id: string;
}

export const SingleAd = ({id}: SingleAdProps) => {
    const [ad, setAd] = useState<AdEntity | null>(null)

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/ad/${id}`);
            const data = await res.json();
            setAd(data);
        })()
    }, [])

    return (
        <>
            {!ad ? (
                <p>Wczytywanie...</p>
            ) : (
                <>
                    <h2>{ad.name}</h2>
                    <p>{ad.description}</p>
                    {!!ad.price && <p><b>{ad.price} zł</b></p>}
                    <hr/>
                    <a href={ad.url} target="_blank" rel="noreferrer">Otwórz ogłoszenie</a>
                </>
            )}
        </>
    )
}