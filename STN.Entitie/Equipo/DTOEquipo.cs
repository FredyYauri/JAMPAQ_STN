using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace STN.Entitie.Equipo
{
    public class DTOEquipo
    {
        public int IdEquipo { get; set; }
        public int IdCompania { get; set; }
    }
    public class DTOEquipoGet
    {
        public int IdEquipo { get; set; }
        public string Codigo { get; set; }
        public string Descripcion { get; set; }
        public string Marca { get; set; }
        public string Modelo { get; set; }
        public string Serie { get; set; }
        public string Mantenimiento { get; set; }
        public string Control { get; set; }
        public string Estado { get; set; }
    }
    public class DTOEquipoRegister
    {
        public int IdEquipo { get; set; }
        public int IdCompania { get; set; }
        public string Descripcion { get; set; }
        public string Marca { get; set; }
        public string Modelo { get; set; }
        public string Serie { get; set; }
        public int TipoControl { get; set; }
        public decimal Valor { get; set; }
        public int TipoMantenimiento { get; set; }
        public string Observaciones { get; set; }
        public decimal ImporteMN { get; set; }
        public bool Estado { get; set; }
    }
    public class DTOEquipoCreate
    {
        public int IdCompania { get; set; }
        public string Descripcion { get; set; }
        public string Marca { get; set; }
        public string Modelo { get; set; }
        public string Serie { get; set; }
        public int TipoControl { get; set; }
        public decimal Valor { get; set; }
        public int TipoMantenimiento { get; set; }
        public string Observaciones { get; set; }
        public decimal ImporteMN { get; set; }
        public int Usuario { get; set; }
    }
    public class DTOEquipoUpdate
    {
        public int IdEquipo { get; set; }
        public int IdCompania { get; set; }
        public string Descripcion { get; set; }
        public string Marca { get; set; }
        public string Modelo { get; set; }
        public string Serie { get; set; }
        public int TipoControl { get; set; }
        public decimal Valor { get; set; }
        public int TipoMantenimiento { get; set; }
        public string Observaciones { get; set; }
        public decimal ImporteMN { get; set; }
        public int Usuario { get; set; }
    }
}
