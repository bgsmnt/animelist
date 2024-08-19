// src/libs/api-libs.js

export const getAnimeResponse = async (resource, query) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
        
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        
        const data = await response.json();

        // Pastikan data mengandung URL unduhan jika ada
        return data;
    } catch (error) {
        console.error(error);
        return { data: [] }; // Mengembalikan array kosong jika terjadi error
    }
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
    try {
        const response = await getAnimeResponse(resource);
        
        if (Array.isArray(response.data)) {
            return response.data.flatMap(item => item[objectProperty] || []);
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        console.error(error);
        return []; // Mengembalikan array kosong jika terjadi error
    }
};

export const reproduce = (data, gap) => {
    if (!Array.isArray(data) || data.length === 0 || gap <= 0) {
        return { data: [] }; // Mengembalikan array kosong jika input tidak valid
    }

    const first = ~~(Math.random() * (data.length - gap) + 1);
    const last = first + gap;

    const response = {
        data: data.slice(first, last)
    };

    return response;
};
