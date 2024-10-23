using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using STN.Bussiness.RRHH;
using STN.Entitie.RRHH;
using STN.Web.Api.Entities;

namespace STN.Web.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmpleadoController : ControllerBase
    {
        private readonly BSEmpleado _bSEmpleado;
        private readonly IConfiguration _configuration;
        public EmpleadoController(ApplicationDbContext context, IConfiguration configuration)
        {
            _bSEmpleado = new BSEmpleado(context, configuration);
            _configuration = configuration;
        }

        [HttpPost("RegistrarEmpleado")]
        [Authorize]
        public IActionResult Create([FromBody] ModelEmpleado model)
        {
            DTOEmpleadoCreate obj = new DTOEmpleadoCreate()
            {
                IdCompania = model.IdCompania,
                IdPersona = model.IdPersona,
                FechaIngreso = model.FechaIngreso,
                IdArea = model.IdArea,
                IdCargo = model.IdCargo,
                CantHijos = model.CantHijos,
                TipoContrato = model.TipoContrato,
                SueldoBasico = model.SueldoBasico,
                PersonaContacto = model.PersonaContacto,
                NumeroContacto = model.NumeroContacto,
                BancoConsignacion = model.BancoConsignacion,
                NumeroCuenta = model.NumeroCuenta,
                NumeroCuentaCCI = model.NumeroCuentaCCI,
                TipoComprobante = model.TipoComprobante,
                TipoAFP = model.TipoAFP,
                NumeroCuentaAFP = model.NumeroCuentaAFP,
                UsuarioRegistro = model.UsuarioRegistro
            };
            try
            {
                var resultado = _bSEmpleado.CrearEmpleado(obj);
                ResponseCreateEmpleado response = new ResponseCreateEmpleado();

                if (resultado > 0)
                {
                    response.status = 0;
                    response.mesage = "Empleado registrado correctamente";
                }
                else
                {
                    response.status = 1;
                    response.mesage = "No se pudo registrar el Empleado";
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

    }
}
