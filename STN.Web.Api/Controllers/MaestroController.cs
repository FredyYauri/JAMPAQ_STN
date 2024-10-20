using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
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
        private readonly IConfiguration _configuration;
        public MaestroController(ApplicationDbContext context, IConfiguration configuration)
        {
            _bsOpcionesMaestros = new BSOpcionesMaestros(context, configuration);
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
    }
}
