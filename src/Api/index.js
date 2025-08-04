const baseURL = process.env.REACT_APP_BASE_URL;

export const getWeatherDataAPI = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}`);
    return await response.json();
};

export const getWeatherDataForCurrentLocation = async (lat, lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}`);
    return await response.json();
};
