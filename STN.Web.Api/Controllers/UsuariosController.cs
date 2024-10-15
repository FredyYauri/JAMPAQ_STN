using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using STN.Bussiness.Seguridad;
using STN.Web.Api.Entities;
using STN.Web.Api.Utils;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using static STN.Web.Api.Utils.Helper;

namespace STN.Web.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuariosController : ControllerBase
    {
        private readonly BSUsuario _bsUsuario;
        private readonly IConfiguration _configuration;
        public UsuariosController(ApplicationDbContext context, IConfiguration configuration)
        {
            _bsUsuario = new BSUsuario(context);
            _configuration = configuration;
        }

        [HttpGet("ObtenerResultado")]
        public IActionResult ObtenerResultado([FromQuery] RequestUsuario request)
        {
            Helper helper = new Helper();
            try
            {
                var resultado = _bsUsuario.ObtenerResultado(request.usuario, request.clave, request.compania);
                ResponseUsuario response = new ResponseUsuario();
                if (resultado.Rows.Count == 0)
                { 
                    response.status = 1;
                    response.mesage = "Usuario o clave incorrectos";
                }
                else
                {
                    response.status = 0;
                    response.data = helper.ConvertDataTableToJson(resultado);
                    var firstRow = response.data[0];
                    if (firstRow.TryGetValue("IDUsuario", out var idUsuario))
                    {
                        response.token = helper.GenerateJwtToken(idUsuario.ToString(), _configuration);
                    }
                    
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("ObtenerPerfil")]
        [Authorize]
        public IActionResult ObtenerPerfil([FromBody] RequestPerfil request)
        {
            Helper helper = new Helper();
            try
            {
                var resultado = _bsUsuario.ObtenerPerfil(request.idUsuario);
                ResponsePerfil response = new ResponsePerfil();
                response.status = 0;
                response.data = helper.ConvertDataTableToJson(resultado);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        
    }
}
