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
        public int Id { get; set; }
        public string Codigo { get; set; }
        public string Descripcion { get; set; }
        public string Marca { get; set; }
        public string Modelo { get; set; }
        public string Serie { get; set; }
        public string Mantenimiento { get; set; }
        public string Control { get; set; }
        public string Estado { get; set; }
    }
}
