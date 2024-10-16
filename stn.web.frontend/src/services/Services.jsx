import fetchData  from './FetchService.jsx'

const uri = 'https://localhost:7139/'
export const sendValidarCredenciales = (usuario, clave, compania) => fetchData(`${uri}Usuarios/ObtenerResultado?usuario=${usuario}&clave=${clave}&compania=${compania}`, {
    method: 'GET'
}, false);

export const getMenu = (usuario) => fetchData(`${uri}Usuarios/ObtenerPerfil`, {
    method: 'POST',
    body: JSON.stringify(usuario)
});

export const ObtenerUnidadMedida = (IDCompania) => fetchData(`${uri}Maestro/ObtenerUnidadMedida?IDCompania=${IDCompania}`, {
    method: 'GET',
});

export const ObtenerClaseProducto = () => fetchData(`${uri}Maestro/ObtenerClaseProducto`, {
    method: 'GET'
});

export const ObtenerProducto = () => fetchData(`${uri}Producto/ObtenerProductos`, {
    method: 'GET',
});

