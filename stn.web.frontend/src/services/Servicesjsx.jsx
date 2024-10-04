import fetchData from './ConfigService.jsx'

const uri = 'https://localhost:7139/'
export const sendValidarCredenciales = (usuario, clave, compania) => fetchData(`${uri}Usuarios/ObtenerResultado?usuario=${usuario}&clave=${clave}&compania=${compania}`, {
    method: 'GET'
})

