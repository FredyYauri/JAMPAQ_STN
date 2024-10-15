using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using STN.Bussiness.Maestros;
using STN.Web.Api.Entities;
using STN.Web.Api.Utils;

namespace STN.Web.Api.Controllers
{
    public class MaestroController : Controller
    {
        [ApiController]
        [Route("[controller]")]
        public class ProductoController : ControllerBase
        {
            private readonly BSOpcionesMaestros _bsOpcionesMaestros;
            private readonly IConfiguration _configuration;
            public ProductoController(ApplicationDbContext context, IConfiguration configuration)
            {
                _bsOpcionesMaestros = new BSOpcionesMaestros(context);
                _configuration = configuration;
            }

            [HttpGet("ObtenerUnidadMedida")]
            [Authorize]
            public IActionResult ObtenerUnidadMedida()
            {
                Helper helper = new Helper();
                try
                {
                    var resultado = _bsOpcionesMaestros.ObtenerUnidadMedida();
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
                    return Ok(resultado);
                }
                catch (Exception ex)
                {
                    return StatusCode(500, ex.Message);
                }
            }

        }
    }
}
