using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using STN.Bussiness.RRHH;
using STN.Entitie.RRHH;
using STN.Web.Api.Entities;
using STN.Web.Api.Utils;

namespace STN.Web.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonaController : ControllerBase
    {
        private readonly BSPersona _bsPersona;
        private readonly IConfiguration _configuration;
        public PersonaController(ApplicationDbContext context, IConfiguration configuration)
        {
            _bsPersona = new BSPersona(context, configuration);
            _configuration = configuration;
        }
        
        [HttpGet("ObtenerPersonas")]
        [Authorize]
        public IActionResult Index([FromQuery] RequestPersona request)
        {
            Helper helper = new Helper();
            try
            {
                var resultado = _bsPersona.ObtenerPersonas(request.IDCompania);
                ResponsePersona response = new ResponsePersona();
                if (resultado.Count == 0)
                {
                    response.status = 1;
                    response.mesage = "No se encontraron Personas";
                }
                else
                {
                    response.status = 0;
                    response.mesage = "Consulta Exitosa";
                    response.data = resultado;
                }
                return Ok(response);
            }
            catch (Exception ex)

            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("ObtenerPersona")]
        [Authorize]
        public IActionResult ObtenerPersona([FromQuery] RequestPersonaDetail request)
        {
            Helper helper = new Helper();
            DTOPersona obj = new DTOPersona()
            {
                IdCompania = request.IDCompania,
                IdPersona = request.IDPersona
            };
            try
            {
                var resultado = _bsPersona.ObtenerPersona(obj);
                ResponsePersonaDetail response = new ResponsePersonaDetail();
                if (resultado.Count == 0)
                {
                    response.status = 1;
                    response.mesage = "No se encontraron Personas";
                }
                else
                {
                    response.status = 0;
                    response.data = resultado;
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("RegistrarPersona")]
        [Authorize]
        public IActionResult Create([FromBody] ModelPersona model)
        {
            DTOPersonaCreate obj = new DTOPersonaCreate()
            {
                IdCompania = model.IdCompania,
                Nombre = model.Nombre,
                ApellidoPaterno = model.ApellidoPaterno,
                ApellidoMaterno = model.ApellidoMaterno,
                FechaNacimiento = model.FechaNacimiento,
                IdTipoDocumento = model.IdTipoDocumento,
                NumeroDocumento = model.NumeroDocumento,
                IdEstadoCivil = model.IdEstadoCivil,
                IdSexo = model.IdSexo,
                Direccion = model.Direccion,
                Observacion = model.Observacion,
                UsuarioRegistro = model.UsuarioRegistro,
                Email = model.Email,
                Telefono = model.Telefono,
                Ubigeo = model.Ubigeo
            };
            try
            {
                var resultado = _bsPersona.CrearPersona(obj);
                ResponseCreatePersona response = new ResponseCreatePersona();

                if (resultado > 0)
                {
                    response.status = 0;
                    response.mesage = "Persona registrado correctamente";
                }
                else
                {
                    response.status = 1;
                    response.mesage = "No se pudo registrar el Persona";
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut("ActualizarPersona")]
        [Authorize]
        public IActionResult Update([FromBody] ModelPersona model)
        {
            DTOPersonaUpdate obj = new DTOPersonaUpdate()
            {
                IdPersona = model.IdPersona,
                IdCompania = model.IdCompania,
                Nombre = model.Nombre,
                ApellidoPaterno = model.ApellidoPaterno,
                ApellidoMaterno = model.ApellidoMaterno,
                FechaNacimiento = model.FechaNacimiento,
                IdTipoDocumento = model.IdTipoDocumento,
                NumeroDocumento = model.NumeroDocumento,
                IdEstadoCivil = model.IdEstadoCivil,
                IdSexo = model.IdSexo,
                Direccion = model.Direccion,
                Observacion = model.Observacion,
                UsuarioRegistro = model.UsuarioRegistro,
                Email = model.Email,
                Telefono = model.Telefono,
                Ubigeo = model.Ubigeo
            };
            try
            {
                var resultado = _bsPersona.ActualizarPersona(obj);
                ResponseCreatePersona response = new ResponseCreatePersona();

                if (resultado > 0)
                {
                    response.status = 0;
                    response.mesage = "Persona actualizado correctamente";
                    response.result = true;
                }
                else
                {
                    response.status = 1;
                    response.mesage = "No se pudo actualizar el Persona";
                    response.result = false;
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete("EliminarPersona")]
        [Authorize]
        public IActionResult Delete([FromQuery] RequestPersonaDetail request)
        {
            DTOPersona obj = new DTOPersona()
            {
                IdCompania = request.IDCompania,
                IdPersona = request.IDPersona
            };
            try
            {
                var resultado = _bsPersona.EliminarPersona(obj);
                ResponseDeletePersona response = new ResponseDeletePersona();
                if (resultado)
                {
                    response.status = 0;
                    response.mesage = "Persona eliminado correctamente";
                    response.data = true;
                }
                else
                {
                    response.status = 1;
                    response.mesage = "No se pudo eliminar el Persona";
                    response.data = false;
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
