using Azure.Core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using STN.Bussiness.Equipo;
using STN.Entitie.Equipo;
using STN.Web.Api.Entities;
using STN.Web.Api.Utils;

namespace STN.Web.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EquipoController : ControllerBase
    {
        private readonly BSEquipo _bsEquipo;
        private readonly IConfiguration _configuration;
        public EquipoController(ApplicationDbContext context, IConfiguration configuration)
        {
            _bsEquipo = new BSEquipo(context, configuration);
            _configuration = configuration;
        }

        [HttpGet("ObtenerEquipos")]
        [Authorize]
        public IActionResult Index([FromQuery] RequestEquipo request)
        {
            Helper helper = new Helper();
            try
            {
                var resultado = _bsEquipo.ObtenerEquipos(request.IDCompania);
                ResponseEquipo response = new ResponseEquipo();
                if (resultado.Count == 0)
                {
                    response.status = 1;
                    response.mesage = "No se encontraron Equipos";
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

        [HttpGet("ObtenerEquipo")]
        [Authorize]
        public IActionResult ObtenerEquipo([FromQuery] RequestEquipoDetail request)
        {
            Helper helper = new Helper();
            DTOEquipo obj = new DTOEquipo()
            {
                IdCompania = request.IDCompania,
                IdEquipo = request.IDEquipo
            };
            try
            {
                var resultado = _bsEquipo.ObtenerEquipo(obj);
                ResponseEquipoDetail response = new ResponseEquipoDetail();
                if (resultado.Count == 0)
                {
                    response.status = 1;
                    response.mesage = "No se encontraron Equipos";
                }
                else
                {
                    response.status = 0;
                    response.data = resultado[0];
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("RegistrarEquipo")]
        [Authorize]
        public IActionResult Create([FromBody] ModelEquipo model)
        {
            DTOEquipoCreate obj = new DTOEquipoCreate()
            {
                IdCompania = model.IdCompania,
                Descripcion = model.Descripcion,
                Marca = model.Marca,
                Modelo = model.Modelo,
                Serie = model.Serie,
                TipoControl = model.TipoControl,
                Valor = model.Valor,
                TipoMantenimiento = model.TipoMantenimiento,
                Observaciones = model.Observaciones,
                ImporteMN = model.ImporteMN,
                Usuario = model.Usuario
            };
            try
            {
                var resultado = _bsEquipo.CrearEquipo(obj);
                ResponseCreateEquipo response = new ResponseCreateEquipo();

                if (resultado > 0)
                {
                    response.status = 0;
                    response.mesage = "Equipo registrado correctamente";
                }
                else
                {
                    response.status = 1;
                    response.mesage = "No se pudo registrar el Equipo";
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut("ActualizarEquipo")]
        [Authorize]
        public IActionResult Update([FromBody] ModelEquipo model)
        {
            DTOEquipoUpdate obj = new DTOEquipoUpdate()
            {
                IdEquipo = model.IdEquipo,
                IdCompania = model.IdCompania,
                Descripcion = model.Descripcion,
                Marca = model.Marca,
                Modelo = model.Modelo,
                Serie = model.Serie,
                TipoControl = model.TipoControl,
                Valor = model.Valor,
                TipoMantenimiento = model.TipoMantenimiento,
                Observaciones = model.Observaciones,
                ImporteMN = model.ImporteMN,
                Usuario = model.Usuario
            };
            try
            {
                var resultado = _bsEquipo.ActualizarEquipo(obj);
                ResponseCreateEquipo response = new ResponseCreateEquipo();

                if (resultado > 0)
                {
                    response.status = 0;
                    response.mesage = "Equipo actualizado correctamente";
                    response.result = true;
                }
                else
                {
                    response.status = 1;
                    response.mesage = "No se pudo actualizar el Equipo";
                    response.result = false;
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete("EliminarEquipo")]
        [Authorize]
        public IActionResult Delete([FromQuery] RequestEquipoDetail request)
        {
            DTOEquipo obj = new DTOEquipo()
            {
                IdCompania = request.IDCompania,
                IdEquipo = request.IDEquipo
            };
            try
            {
                var resultado = _bsEquipo.EliminarEquipo(obj);
                ResponseDeleteEquipo response = new ResponseDeleteEquipo();
                if (resultado)
                {
                    response.status = 0;
                    response.mesage = "Equipo eliminado correctamente";
                    response.data = true;
                }
                else
                {
                    response.status = 1;
                    response.mesage = "No se pudo eliminar el Equipo";
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
