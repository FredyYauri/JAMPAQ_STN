using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace STN.Entitie.RRHH
{
    public class DTOPersona
    {
        public int IdPersona { get; set; }
        public int IdCompania { get; set; }
    }
    public class DTOPersonaGet
    {
        public int IdPersona { get; set; }
        public string TipoTrabajador { get; set; }
        public string NombreCompleto { get; set; }
        public string TipoDocumento { get; set; }
        public string NumeroDocumento { get; set; }
        public string Sexo { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set; }
        public string Estado { get; set; }
    }
    public class DTOPersonaRegister
    {
        public int IdPersona { get; set; }
        public int IdCompania { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string NombreCompleto { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public int IdTipoDocumento { get; set; }
        public string TipoDocumento { get; set; }
        public string NumeroDocumento { get; set; }
        public int IdEstadoCivil { get; set; }
        public string EstadoCivil { get; set; }
        public int IdSexo { get; set; }
        public string Sexo { get; set; }
        public string Direccion { get; set; }
        public string Observacion { get; set; }
        public int UsuarioRegistro { get; set; }
        public DateTime FechaRegistro { get; set; }
        public bool Estado { get; set; }
        public string Ubigeo { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
    }
    public class DTOPersonaCreate
    {
        public int IdCompania { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public int IdTipoDocumento { get; set; }
        public string NumeroDocumento { get; set; }
        public int IdEstadoCivil { get; set; }
        public int IdSexo { get; set; }
        public string Direccion { get; set; }
        public string Observacion { get; set; }
        public int UsuarioRegistro { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
        public string Ubigeo { get; set; }
    }
    public class DTOPersonaUpdate
    {
        public int IdPersona { get; set; }
        public int IdCompania { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public int IdTipoDocumento { get; set; }
        public string NumeroDocumento { get; set; }
        public int IdEstadoCivil { get; set; }
        public int IdSexo { get; set; }
        public string Direccion { get; set; }
        public string Observacion { get; set; }
        public int UsuarioRegistro { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
        public string Ubigeo { get; set; }
    }
}
