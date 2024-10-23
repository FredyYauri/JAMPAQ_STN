using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using STN.Bussiness.Equipo;
using STN.Bussiness.Maestros;
using STN.Web.Api.Entities;
using STN.Web.Api.Utils;

namespace STN.Web.Api.Controllers
{
        [ApiController]
        [Route("[controller]")]
    public class MaestroController : ControllerBase
    {
        private readonly BSOpcionesMaestros _bsOpcionesMaestros;
        private readonly BSParametro _bsParametro;
        private readonly IConfiguration _configuration;
        public MaestroController(ApplicationDbContext context, IConfiguration configuration)
        {
            _bsOpcionesMaestros = new BSOpcionesMaestros(context, configuration);
            _bsParametro = new BSParametro(context, configuration);
            _configuration = configuration;
        }

        [HttpGet("ObtenerUnidadMedida")]
        [Authorize]
        public IActionResult ObtenerUnidadMedida([FromQuery] RequestMaestro request)
        {
            Helper helper = new Helper();
            try
            {
                var resultado = _bsOpcionesMaestros.ObtenerUnidadMedida(request.IDCompania);
                ResponseMaestro response = new ResponseMaestro();
                if (resultado.Rows.Count == 0)
                {
                    response.status = 1;
                    response.mesage = "No se encontraron unidades de medida";
                }
                else
                {
                    response.status = 0;
                    response.data = helper.ConvertDataTableToJson(resultado);
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("ObtenerTipoProducto")]
        [Authorize]
        public IActionResult ObtenerTipoProducto()
        {
            Helper helper = new Helper();
            try
            {
                var resultado = _bsOpcionesMaestros.ObtenerTipoProducto();
                ResponseMaestro response = new ResponseMaestro();
                if (resultado.Rows.Count == 0)
                {
                    response.status = 1;
                    response.mesage = "No se encontraron clases de producto";
                }
                else
                {
                    response.status = 0;
                    response.data = helper.ConvertDataTableToJson(resultado);
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("ObtenerMarca")]
        [Authorize]
        public IActionResult ObtenerMarca([FromQuery] RequestMaestro request)
        {
            Helper helper = new Helper();
            try
            {
                var resultado = _bsOpcionesMaestros.ObtenerMarca(request.IDCompania);
                ResponseMaestro response = new ResponseMaestro();
                if (resultado.Rows.Count == 0)
                {
                    response.status = 1;
                    response.mesage = "No se encontraron marcas";
                }
                else
                {
                    response.status = 0;
                    response.data = helper.ConvertDataTableToJson(resultado);
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("ObtenerParametros")]
        [Authorize]
        public IActionResult ObtenerParametro([FromQuery] RequestParametro request)
        {
            Helper helper = new Helper();
            try
            {
                var resultado = _bsParametro.ObtenerParametros(request.Tabla);
                ResponseParametro response = new ResponseParametro();
                if (resultado.Count == 0)
                {
                    response.status = 1;
                    response.mesage = "No se encontraron Parametros";
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
    }
}
