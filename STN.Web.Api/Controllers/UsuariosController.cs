using Microsoft.AspNetCore.Mvc;
using STN.Bussiness.Seguridad;
using System.Data;
using System;
using System.Collections.Generic;
using STN.Web.Api.Entities;

namespace STN.Web.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuariosController : ControllerBase
    {
        private readonly BSUsuario _bsUsuario;

        public UsuariosController(ApplicationDbContext context)
        {
            _bsUsuario = new BSUsuario(context);
        }

        [HttpGet("ObtenerResultado")]
        public IActionResult ObtenerResultado([FromQuery] RequestUsuario request)
        {
            try
            {
                var resultado = _bsUsuario.ObtenerResultado(request.usuario, request.clave, request.compania);
                ResponseUsuario response = new ResponseUsuario();
                response.status = "OK";
                response.data = ConvertDataTableToJson(resultado);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        // Método para convertir un DataTable a una lista de diccionarios
        private List<Dictionary<string, object>> ConvertDataTableToJson(DataTable dataTable)
        {
            var jsonResult = new List<Dictionary<string, object>>();

            foreach (DataRow row in dataTable.Rows)
            {
                var dict = new Dictionary<string, object>();
                foreach (DataColumn col in dataTable.Columns)
                {
                    dict[col.ColumnName] = row[col];
                }
                jsonResult.Add(dict);
            }

            return jsonResult;
        }

    }
}
