using Azure.Core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using STN.Bussiness.Equipo;
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
    }
}
