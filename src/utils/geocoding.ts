export const geocode = async (address: string): Promise<{
    lat: number,
    lon: number
}> => {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    const geoData = await res.json();
    const {lat: latitude, lon: longtitude} = geoData[0];
    const lat = Number(latitude);
    const lon = Number(longtitude);
    return {
        lat,
        lon
    }
}