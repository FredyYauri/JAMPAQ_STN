using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using STN.Bussiness.Producto;
using STN.Bussiness.Seguridad;
using STN.Web.Api.Entities;
using STN.Web.Api.Utils;
using System.Data;

namespace STN.Web.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductoController : ControllerBase
    {
        private readonly BSProducto _bsProducto;
        private readonly IConfiguration _configuration;
        public ProductoController(ApplicationDbContext context, IConfiguration configuration)
        {
            _bsProducto = new BSProducto(context);
            _configuration = configuration;
        }

        [HttpGet("ObtenerProductos")]
        public IActionResult Index()
        {
            Helper helper = new Helper();
            try
            {
                var resultado = _bsProducto.ObtenerProductos();
                ResponseProducto response = new ResponseProducto();
                if (resultado.Rows.Count == 0)
                {
                    response.status = 1;
                    response.mesage = "No se encontraron productos";
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
