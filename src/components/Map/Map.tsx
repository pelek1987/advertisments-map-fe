import React, {useContext, useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {SearchContext} from "../../ctx/search.context";
import {SimpleAdEntity} from 'types';
import 'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icon'
import './Map.css';
import {SingleAd} from "../SingleAd";

export const Map = () => {

    const [ads, setAds] = useState<SimpleAdEntity[]>([])
    const {search} = useContext(SearchContext);

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3001/ad/search/${search}`);
            const ads = await response.json()
            setAds(ads);
        })()
    }, [search])

    return <div className="map">
        <MapContainer
            center={[50.2657152,18.9945008]} zoom={20}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
            />
            {ads.map(ad => (
                    <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                        <Popup>
                            <SingleAd id={ad.id} />
                        </Popup>
                    </Marker>
                )
            )}
        </MapContainer>
    </div>
}