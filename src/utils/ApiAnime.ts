export async function fetchAnimeData(id?: number) {
    try {
        const apiUrl = process.env.API_URL;
        const apiUrlId = process.env.API_URL_ID;

        if (!apiUrl || !apiUrlId) {
            throw new Error('API_URL o API_URL_ID no están definidas en las variables de entorno');
        }

        const url = id ? `${apiUrlId}/${id}/full` : apiUrl;

        const response = await fetch(url);
        const data = await response.json();
        return data.data; // Acceder a la propiedad `data`
    } catch (error) {
        console.log(error);
        return null;
    }
}
