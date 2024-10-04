async function fetchData(url, options) {
    try {
        const response = await fetch(url, {
            method: options.method,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            body: JSON.stringify(options.body),
            ...options
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

export default fetchData;