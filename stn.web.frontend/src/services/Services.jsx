import fetchData  from './FetchService.jsx'

const uri = 'https://localhost:7139/'
const IDCompania = 1;
export const sendValidarCredenciales = (usuario, clave, compania) => fetchData(`${uri}Usuarios/ValidarUsuario?usuario=${usuario}&clave=${clave}&compania=${compania}`, {
    method: 'GET'
}, false);

export const getMenu = (usuario) => fetchData(`${uri}Usuarios/ObtenerPerfil`, {
    method: 'POST',
    body: JSON.stringify(usuario)
});

export const ObtenerUnidadMedida = () => fetchData(`${uri}Maestro/ObtenerUnidadMedida?IDCompania=${IDCompania}`, {
    method: 'GET',
});

export const ObtenerClaseProducto = () => fetchData(`${uri}Maestro/ObtenerTipoProducto`, {
    method: 'GET'
});


export const ObtenerMarca = () => fetchData(`${uri}Maestro/ObtenerMarca?IDCompania=${IDCompania}`, {
    method: 'GET',
});


export const ObtenerProductos = () => fetchData(`${uri}Producto/ObtenerProductos?IDCompania=${IDCompania}`, {
    method: 'GET',
});

export const ObtenerProducto = (IDProducto) => fetchData(`${uri}Producto/ObtenerProducto?IDCompania=${IDCompania}&IDProducto=${IDProducto}`, {
    method: 'GET',
});

export const EliminarProducto = (IDProducto) => fetchData(`${uri}Producto/EliminarProducto?IDCompania=${IDCompania}&IDProducto=${IDProducto}`, {
    method: 'DELETE',
});

export const GuardarProducto = (producto) => fetchData(`${uri}Usuarios/RegistrarProducto`, {
    method: 'POST',
    body: JSON.stringify(producto)
});

export const EditarProducto = (producto) => fetchData(`${uri}Usuarios/EditarProducto`, {
    method: 'POST',
    body: JSON.stringify(producto)
});