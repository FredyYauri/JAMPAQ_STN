async function fetchData(url, options, requiredAuth = true) {
    try {
        let headers = {
            'Content-Type': 'application/json',
            ...options.headers
        };

        if (requiredAuth) {
            const token = sessionStorage.getItem('token');
            // console.log('token', token);
            if (!token) {
                window.alert('Su sesión a terminado.');
                window.location.href = '/login'; 
                throw new Error('Token-Error');
            }
            headers = {
                'Authorization': `Bearer ${token}`,
                ...headers
            };
        }
        const objectRequest =  {
            method: options.method,
            headers: headers,
            body: options.method !== 'GET' && options.body ? JSON.stringify(options.body) : undefined,
            ...options
        };
        const response = await fetch(url, objectRequest);

        if (response.status === 401 || response.status === 403) {
            console.error('Token expirado o inválido, redirigiendo al login');
            sessionStorage.clear()   
            window.alert('Su sesión a terminado.');
            window.location.href = '/login'; 
        }
        
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